/* Cloudflare Pages Function: tells the owner on Telegram that a child sent a photo for «نجوم متفوّق» (7 Nov 2026).
   Secrets in Cloudflare (Workers & Pages → motafawek → Settings → Variables and Secrets):
     TG_TOKEN  = the bot token from BotFather
     TG_CHAT   = the owner's chat id (open /api/notify?setup=1 after sending the bot any message: it shows the id)
   The page calls POST /api/notify {name} after a photo reaches Firestore. One alert per visitor per minute (Cache API). */
const json = (o, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { 'content-type': 'application/json; charset=utf-8' } });

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  if (!url.searchParams.has('setup')) return json({ ok: true });
  if (!env.TG_TOKEN) return new Response('TG_TOKEN is not set yet.', { status: 200 });
  const r = await fetch(`https://api.telegram.org/bot${env.TG_TOKEN}/getUpdates`).then(x => x.json()).catch(() => null);
  const chats = new Map();
  ((r && r.result) || []).forEach(u => { const m = u.message || u.my_chat_member || {}; const c = m.chat; if (c) chats.set(c.id, c.first_name || c.title || ''); });
  const lines = [...chats].map(([id, n]) => `${n}: ${id}`);
  return new Response(lines.length ? 'Your chat id (put it in TG_CHAT):\n' + lines.join('\n') : 'Send any message to your bot in Telegram, then reload this page.', { headers: { 'content-type': 'text/plain; charset=utf-8' } });
}

export async function onRequestPost({ request, env }) {
  if (!env.TG_TOKEN || !env.TG_CHAT) return json({ ok: false, why: 'not set' });
  const ip = request.headers.get('cf-connecting-ip') || 'x', cache = caches.default, key = new Request('https://throttle.motafawek/notify/' + ip);
  if (await cache.match(key)) return json({ ok: false, why: 'wait' });
  await cache.put(key, new Response('1', { headers: { 'cache-control': 'max-age=60' } }));
  let name = ''; try { name = String((await request.json()).name || '').replace(/[<>&]/g, '').slice(0, 14); } catch (e) {}
  const text = `📷 صورة جديدة من ${name || 'طالب'} بانتظار موافقتك\nhttps://motafawek.com/admin.html`;
  const r = await fetch(`https://api.telegram.org/bot${env.TG_TOKEN}/sendMessage`, {
    method: 'POST', headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ chat_id: env.TG_CHAT, text, disable_web_page_preview: true })
  }).catch(() => null);
  return json({ ok: !!(r && r.ok) });
}
