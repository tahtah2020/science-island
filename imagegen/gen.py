"""Generate pictures with Cloudflare Workers AI (FLUX.2), free daily allowance.

Runs inside GitHub Actions (branch `images`). Reads every job file in
imagegen/jobs/*.json and makes each picture that is not in imagegen/out/<job>/
yet. Secrets: CF_ACCOUNT_ID, CF_AI_TOKEN; optional fallbacks TOGETHER_API_KEY, GEMINI_API_KEY
(used automatically when the previous provider runs out). Pictures are made at most
MAXSIDE (512) px on the long side unless the job sets "exact_size": true; version 1
of every picture is made before any version 2.

Job file:
{
  "model": "flux-2-klein-4b",            # or flux-2-klein-9b (better, ~7 a day free)
  "style": "base style paragraph ...",    # added after every prompt
  "ref": "arabic/assets/a3_heba_paint.webp",   # optional style reference (repo path)
  "size": [1024, 1024],
  "images": [
    {"file": "a3_x", "prompt": "...", "seed": 7, "ref": "optional other ref", "n": 2}
  ]
}
"n" = how many versions to make (file a3_x_1.png, a3_x_2.png ...). Default 1.
Delete an output file and push again to remake it.
"""
import base64, glob, io, json, os, sys, time
import requests
from PIL import Image

ACC = os.environ.get("CF_ACCOUNT_ID", "").strip()
TOK = os.environ.get("CF_AI_TOKEN", "").strip()
TOGETHER = os.environ.get("TOGETHER_API_KEY", "").strip()   # optional fallback 1
GEMINI = os.environ.get("GEMINI_API_KEY", "").strip()       # optional fallback 2
MAXSIDE = int(os.environ.get("MAXSIDE", "512"))             # smaller = more pictures per free day
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def ref_png(path):
    im = Image.open(os.path.join(ROOT, path)).convert("RGB")
    im.thumbnail((500, 500))
    buf = io.BytesIO()
    im.save(buf, "PNG")
    return buf.getvalue()


def fit(w, h):
    """Scale down so the long side is MAXSIDE (multiple of 16)."""
    k = min(1.0, MAXSIDE / max(w, h))
    r16 = lambda v: max(256, int(round(v * k / 16)) * 16)
    return r16(w), r16(h)


def run_together(prompt, w, h, seed):
    r = requests.post(
        "https://api.together.xyz/v1/images/generations",
        headers={"Authorization": f"Bearer {TOGETHER}"},
        json={"model": "black-forest-labs/FLUX.1-schnell-Free", "prompt": prompt,
              "width": w, "height": h, "steps": 4, "n": 1, "seed": seed or 0,
              "response_format": "b64_json"}, timeout=180)
    if r.status_code != 200:
        raise RuntimeError(f"HTTP {r.status_code}: {r.text[:400]}")
    return base64.b64decode(r.json()["data"][0]["b64_json"])


def run_gemini(prompt, ref):
    parts = [{"text": prompt}]
    if ref:
        parts.append({"inline_data": {"mime_type": "image/png",
                      "data": base64.b64encode(ref_png(ref)).decode()}})
    r = requests.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent",
        headers={"x-goog-api-key": GEMINI},
        json={"contents": [{"parts": parts}],
              "generationConfig": {"responseModalities": ["IMAGE"]}}, timeout=180)
    if r.status_code != 200:
        raise RuntimeError(f"HTTP {r.status_code}: {r.text[:400]}")
    for c in r.json().get("candidates", []):
        for p in c.get("content", {}).get("parts", []):
            d = p.get("inlineData") or p.get("inline_data")
            if d:
                return base64.b64decode(d["data"])
    raise RuntimeError("no image in Gemini response")


def run(model, prompt, w, h, seed, ref):
    url = f"https://api.cloudflare.com/client/v4/accounts/{ACC}/ai/run/@cf/black-forest-labs/{model}"
    data = {"prompt": prompt, "width": str(w), "height": str(h)}
    if seed is not None:
        data["seed"] = str(seed)
    files = {k: (None, v) for k, v in data.items()}
    if ref:
        files["input_image_0"] = ("ref.png", ref_png(ref), "image/png")
    r = requests.post(url, headers={"Authorization": f"Bearer {TOK}"}, files=files, timeout=180)
    ct = r.headers.get("content-type", "")
    if r.status_code != 200:
        raise RuntimeError(f"HTTP {r.status_code}: {r.text[:400]}")
    if ct.startswith("image/"):
        return r.content
    j = r.json()
    res = j.get("result", j)
    img = res.get("image") if isinstance(res, dict) else None
    if not img:
        raise RuntimeError("no image in response: " + json.dumps(j)[:400])
    return base64.b64decode(img)


def providers():
    p = []
    if ACC and TOK:
        p.append("cloudflare")
    if TOGETHER:
        p.append("together")
    if GEMINI:
        p.append("gemini")
    return p


def make(prov, model, prompt, w, h, seed, ref):
    if prov == "cloudflare":
        return run(model, prompt, w, h, seed, ref)
    if prov == "together":
        return run_together(prompt, w, h, seed)
    return run_gemini(prompt, ref)


def main():
    made, failed = 0, 0
    provs = providers()
    if not provs:
        sys.exit("no provider configured (need CF_* or TOGETHER_API_KEY or GEMINI_API_KEY)")
    todo = []  # (version k, job name, out dir, item, n, size, model, style, ref)
    for job in sorted(glob.glob(os.path.join(ROOT, "imagegen/jobs/*.json"))):
        name = os.path.splitext(os.path.basename(job))[0]
        cfg = json.load(open(job, encoding="utf-8"))
        out = os.path.join(ROOT, "imagegen/out", name)
        os.makedirs(out, exist_ok=True)
        w, h = cfg.get("size", [1024, 1024])
        if not cfg.get("exact_size"):
            w, h = fit(w, h)
        for it in cfg["images"]:
            n = it.get("n", 1)
            for k in range(1, n + 1):
                fn = it["file"] + (f"_{k}" if n > 1 else "") + ".png"
                if not os.path.exists(os.path.join(out, fn)):
                    todo.append((k, name, out, fn, it, w, h, cfg))
    todo.sort(key=lambda t: t[0])  # first version of every picture before any second version
    for k, name, out, fn, it, w, h, cfg in todo:
        dst = os.path.join(out, fn)
        style = cfg.get("style", "")
        prompt = it["prompt"].strip() + ("\n\n" + style if style else "")
        seed = it.get("seed")
        seed = None if seed is None else seed + k - 1
        ref = it.get("ref", cfg.get("ref"))
        model = it.get("model", cfg.get("model", "flux-2-klein-4b"))
        done = False
        while provs and not done:
            prov = provs[0]
            try:
                png = make(prov, model, prompt, w, h, seed, ref)
                Image.open(io.BytesIO(png)).save(dst, "PNG")
                made += 1
                done = True
                print("made", prov, name, fn, flush=True)
            except Exception as e:
                msg = str(e)
                if "429" in msg or "daily" in msg.lower() or "quota" in msg.lower() or "402" in msg:
                    print(f"{prov}: allowance used up ({msg[:120]}); switching", flush=True)
                    provs.pop(0)
                else:
                    failed += 1
                    print("FAILED", prov, name, fn, msg, flush=True)
                    break
        if not provs:
            print("all providers used up; stopping")
            break
        time.sleep(1)
    print(f"made {made}, failed {failed}")
    if failed and not made:
        sys.exit(1)


if __name__ == "__main__":
    main()
