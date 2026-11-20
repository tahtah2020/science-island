"""Generate pictures with Cloudflare Workers AI (FLUX.2), free daily allowance.

Runs inside GitHub Actions (branch `images`). Reads every job file in
imagegen/jobs/*.json and makes each picture that is not in imagegen/out/<job>/
yet. Secrets: CF_ACCOUNT_ID, CF_AI_TOKEN.

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

ACC = os.environ["CF_ACCOUNT_ID"].strip()
TOK = os.environ["CF_AI_TOKEN"].strip()
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def ref_png(path):
    im = Image.open(os.path.join(ROOT, path)).convert("RGB")
    im.thumbnail((500, 500))
    buf = io.BytesIO()
    im.save(buf, "PNG")
    return buf.getvalue()


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


def main():
    made, failed = 0, 0
    for job in sorted(glob.glob(os.path.join(ROOT, "imagegen/jobs/*.json"))):
        name = os.path.splitext(os.path.basename(job))[0]
        cfg = json.load(open(job, encoding="utf-8"))
        out = os.path.join(ROOT, "imagegen/out", name)
        os.makedirs(out, exist_ok=True)
        model = cfg.get("model", "flux-2-klein-4b")
        w, h = cfg.get("size", [1024, 1024])
        style = cfg.get("style", "")
        for it in cfg["images"]:
            n = it.get("n", 1)
            for k in range(1, n + 1):
                fn = it["file"] + (f"_{k}" if n > 1 else "") + ".png"
                dst = os.path.join(out, fn)
                if os.path.exists(dst):
                    continue
                prompt = it["prompt"].strip() + ("\n\n" + style if style else "")
                seed = it.get("seed")
                seed = None if seed is None else seed + k - 1
                ref = it.get("ref", cfg.get("ref"))
                try:
                    png = run(it.get("model", model), prompt, w, h, seed, ref)
                    Image.open(io.BytesIO(png)).save(dst, "PNG")
                    made += 1
                    print("made", name, fn, flush=True)
                except Exception as e:  # keep going, report at the end
                    failed += 1
                    print("FAILED", name, fn, e, flush=True)
                    if "429" in str(e) or "daily" in str(e).lower():
                        print("daily free allowance probably used up; stopping")
                        print(f"made {made}, failed {failed}")
                        return
                time.sleep(1)
    print(f"made {made}, failed {failed}")
    if failed and not made:
        sys.exit(1)


if __name__ == "__main__":
    main()
