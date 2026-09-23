#!/usr/bin/env python3
"""Record one Omadesign 0.5.8 film and OG image per feature tweet.

The app runs on an isolated headless Sway socket. HOME is a fixture directory,
so the welcome screen never walks the real home folder.
"""

from __future__ import annotations

import argparse
import json
import os
import re
import shutil
import signal
import subprocess
import time
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageStat

ROOT = Path("/home/michael/Projects/michaelchurley.com")
CATALOG = ROOT / "content/blog/omadesign-0.5.8/catalog.json"
PUBLIC = ROOT / "public/blog/omadesign-0-5-8"
REPO = Path("/home/michael/Projects/omadesign")
OMA = "/home/michael/.local/bin/omadesign"
LOGO = REPO / "media/logo.png"
RUNTIME = Path("/tmp/oma-rec")
HOME = Path("/tmp/oma-home")
UID = 1001
W = 1280
H = 720

MENUS = {
    "file": (172, 22),
    "edit": (228, 22),
    "select": (290, 22),
    "object": (361, 22),
    "arrange": (436, 22),
    "view": (503, 22),
    "plugins": (430, 22),
}
WELCOME = {
    "recent": (145, 79),
    "recovered": (227, 79),
    "vector": (596, 290),
    "raster": (597, 380),
    "layout": (597, 470),
    "photo": (590, 557),
    "project": (603, 648),
    "filter": (500, 78),
    "logo": (640, 190),
    "thumb": (130, 220),
}
PERSONA = {
    "design": (556, 22),
    "pixel": (598, 22),
    "layout": (640, 22),
    "photo": (682, 22),
    "motion": (724, 22),
}
BLOCK_ITEM = (
    "open",
    "save",
    "export",
    "place",
    "sign in",
    "invite",
    "upload",
    "publish",
    "push project",
    "cloud",
    "import",
    "review cloud",
)
TOOLS = [
    ("Artboard", "shift+o"),
    ("Rectangle", "r"),
    ("Ellipse", "o"),
    ("Polygon", "y"),
    ("Pencil", "n"),
    ("Gradient", "g"),
    ("Eyedropper", "i"),
    ("Trace", "u"),
    ("Eraser", "e"),
    ("Clone", "j"),
    ("Brush", "b"),
    ("Frame", "f"),
    ("Wand", "w"),
    ("Crop", "c"),
    ("Node", "a"),
    ("Zoom", "z"),
    ("Hand", "h"),
    ("Type", "t"),
    ("Star", "s"),
    ("Line", "l"),
    ("Move", "v"),
    ("Pen", "p"),
]
DRAW_TOOLS = {"r", "o", "y", "n", "b", "e", "j", "f", "p", "l", "s", "shift+o", "u", "c"}


def env_base() -> dict[str, str]:
    env = os.environ.copy()
    env["XDG_RUNTIME_DIR"] = f"/run/user/{UID}"
    env["WAYLAND_DISPLAY"] = wayland()
    env["SWAYSOCK"] = swaysock()
    env.pop("DISPLAY", None)
    env.pop("HYPRLAND_INSTANCE_SIGNATURE", None)
    return env


def sandbox_env() -> dict[str, str]:
    env = env_base()
    env["HOME"] = str(HOME)
    env["XDG_CONFIG_HOME"] = str(HOME / ".config")
    env["XDG_DATA_HOME"] = str(HOME / ".local/share")
    env["XDG_CACHE_HOME"] = str(HOME / ".cache")
    env["XDG_STATE_HOME"] = str(HOME / ".local/state")
    return env


def wayland() -> str:
    text = (RUNTIME / "wayland").read_text().strip()
    return text or "wayland-2"


def swaysock() -> str:
    pid = (RUNTIME / "sway.pid").read_text().strip()
    return f"/run/user/{UID}/sway-ipc.{UID}.{pid}.sock"


def log(msg: str) -> None:
    line = f"{time.strftime('%H:%M:%S')} {msg}"
    print(line, flush=True)
    with (RUNTIME / "batch.log").open("a") as fh:
        fh.write(line + "\n")


def run(cmd: list[str], env: dict[str, str] | None = None, check: bool = False) -> subprocess.CompletedProcess:
    return subprocess.run(cmd, env=env or env_base(), capture_output=True, text=True, check=check)


def ensure_compositor() -> None:
    RUNTIME.mkdir(parents=True, exist_ok=True)
    pid_path = RUNTIME / "sway.pid"
    alive = False
    if pid_path.exists():
        pid = pid_path.read_text().strip()
        alive = Path(f"/proc/{pid}").exists()
    if not alive:
        conf = RUNTIME / "sway.conf"
        conf.write_text(
            "output * {\n    mode 1280x720\n    bg #07080d solid_color\n}\n"
            "default_border none\n"
        )
        proc = subprocess.Popen(
            ["sway", "-c", str(conf)],
            env={
                **os.environ,
                "XDG_RUNTIME_DIR": f"/run/user/{UID}",
                "WLR_BACKENDS": "headless",
                "WLR_LIBINPUT_NO_DEVICES": "1",
                "WLR_HEADLESS_OUTPUTS": "1",
            },
            stdout=open(RUNTIME / "sway.log", "a"),
            stderr=subprocess.STDOUT,
            start_new_session=True,
        )
        # Drop the inherited desktop socket so this sway creates its own.
        os.environ.pop("WAYLAND_DISPLAY", None)
        pid_path.write_text(str(proc.pid))
        time.sleep(0.8)
    # Discover the socket this sway created.
    socks = sorted(Path(f"/run/user/{UID}").glob("wayland-*"))
    names = [p.name for p in socks if not p.name.endswith(".lock")]
    # Prefer a display that is not the live desktop.
    choice = "wayland-2" if "wayland-2" in names else names[-1]
    (RUNTIME / "wayland").write_text(choice)
    vnc_pid = RUNTIME / "wayvnc.pid"
    vnc_alive = vnc_pid.exists() and Path(f"/proc/{vnc_pid.read_text().strip()}").exists()
    if not vnc_alive:
        proc = subprocess.Popen(
            [
                "wayvnc",
                "-S",
                str(RUNTIME / "wayvnc.sock"),
                "--output",
                "HEADLESS-1",
                "127.0.0.1",
                "5911",
            ],
            env=env_base(),
            stdout=open(RUNTIME / "wayvnc.log", "a"),
            stderr=subprocess.STDOUT,
            start_new_session=True,
        )
        vnc_pid.write_text(str(proc.pid))
        time.sleep(0.4)


def prepare_fixtures() -> None:
    if (HOME / "Studio/poster.oma").exists() and (HOME / "Pictures/photo.jpg").exists():
        return
    if HOME.exists():
        shutil.rmtree(HOME)
    (HOME / "Studio").mkdir(parents=True)
    (HOME / "Pictures").mkdir()
    shutil.copy(REPO / "examples/omadesign-cloud.oma", HOME / "Studio/poster.oma")
    shutil.copy(REPO / "media/logo.oma", HOME / "Studio/mark.oma")
    for jpg in (REPO / "media").glob("*.jpg"):
        shutil.copy(jpg, HOME / "Pictures" / jpg.name)
    raw = REPO / "src/formats/raw/synthetic.dng"
    if raw.exists():
        shutil.copy(raw, HOME / "Pictures/synthetic.dng")
    fieldwork = REPO / "examples/fieldwork"
    if fieldwork.exists():
        shutil.copytree(fieldwork, HOME / "Fieldwork", dirs_exist_ok=True)
    theme = Path("/home/michael/.local/state/omarchy/current/theme/colors.toml")
    if theme.exists():
        dest = HOME / ".local/state/omarchy/current/theme"
        dest.mkdir(parents=True)
        shutil.copy(theme, dest / "colors.toml")
    plugins = Path("/home/michael/.local/share/omadesign")
    if plugins.exists():
        shutil.copytree(plugins, HOME / ".local/share/omadesign", dirs_exist_ok=True)
    (HOME / ".config").mkdir(exist_ok=True)
    foot = RUNTIME / "foot.ini"
    foot.write_text("[main]\nfont=monospace:size=18\npad=28x28\n")


def kill_sandbox() -> None:
    needle = str(HOME).encode()
    for entry in Path("/proc").iterdir():
        if not entry.name.isdigit():
            continue
        try:
            data = (entry / "environ").read_bytes()
        except OSError:
            continue
        if b"HOME=" + needle in data.split(b"\0"):
            try:
                os.kill(int(entry.name), signal.SIGKILL)
            except OSError:
                pass


def sway_tree() -> dict:
    proc = run(["swaymsg", "-t", "get_tree"])
    return json.loads(proc.stdout or "{}")


def find_window(app_id: str) -> dict | None:
    found = None

    def walk(node: dict) -> None:
        nonlocal found
        if node.get("app_id") == app_id and node.get("visible"):
            found = node
        for child in node.get("nodes", []) + node.get("floating_nodes", []):
            walk(child)

    walk(sway_tree())
    return found


def origin(app_id: str = "omadesign") -> tuple[int, int]:
    node = find_window(app_id)
    if not node:
        return (0, 0)
    rect = node["rect"]
    return int(rect["x"]), int(rect["y"])


def focus(app_id: str) -> None:
    run(["swaymsg", f'[app_id="{app_id}"]', "focus"])


def grim(path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    subprocess.run(["grim", str(path)], env=env_base(), capture_output=True, check=False)


def mean_luma(path: Path) -> float:
    if not path.exists():
        return 0
    im = Image.open(path).convert("L")
    return float(ImageStat.Stat(im).mean[0])


def vnc(*args: str) -> None:
    proc = subprocess.run(
        ["vncdo", "-s", "127.0.0.1::5911", *args],
        capture_output=True,
        text=True,
    )
    if "refused" in (proc.stderr or "") or "refused" in (proc.stdout or ""):
        time.sleep(0.3)
        subprocess.run(["vncdo", "-s", "127.0.0.1::5911", *args], capture_output=True)


def click_abs(x: int, y: int) -> None:
    vnc("mousemove", str(x), str(y), "mousedown", "1", "pause", "0.05", "mouseup", "1")


def click(x: int, y: int, app_id: str = "omadesign") -> None:
    ox, oy = origin(app_id)
    click_abs(ox + x, oy + y)


def sweep(x1: int, y1: int, x2: int, y2: int, steps: int = 16) -> None:
    ox, oy = origin()
    args: list[str] = []
    for i in range(steps + 1):
        x = int(ox + x1 + (x2 - x1) * i / steps)
        y = int(oy + y1 + (y2 - y1) * i / steps)
        args += ["mousemove", str(x), str(y), "pause", "0.04"]
    vnc(*args)


def drag(x1: int, y1: int, x2: int, y2: int, steps: int = 16) -> None:
    ox, oy = origin()
    args = ["mousemove", str(ox + x1), str(oy + y1), "mousedown", "1"]
    for i in range(1, steps + 1):
        x = int(ox + x1 + (x2 - x1) * i / steps)
        y = int(oy + y1 + (y2 - y1) * i / steps)
        args += ["pause", "0.03", "mousemove", str(x), str(y)]
    args += ["mouseup", "1"]
    vnc(*args)


def hold(mod: str, seconds: float) -> subprocess.Popen:
    return subprocess.Popen(
        ["wtype", "-M", mod, "-s", str(int(seconds * 1000))],
        env=env_base(),
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )


# Design/layout tool well. Keyboard focus never arrives on the headless seat,
# so tool changes are real clicks on the tool icons.
TOOL_POS = {
    "v": (290, 68),
    "a": (290, 112),
    "p": (290, 148),
    "n": (290, 170),
    "f": (290, 238),
    "r": (290, 272),
    "o": (290, 306),
    "y": (290, 340),
    "s": (290, 374),
    "l": (290, 408),
    "t": (290, 442),
    "g": (290, 476),
    "i": (290, 510),
    "b": (290, 544),
    "h": (290, 578),
    "z": (290, 612),
    "e": (290, 200),
    "c": (290, 180),
    "w": (290, 230),
    "u": (290, 530),
    "shift+o": (290, 560),
}
MENU_KEYS = {
    "ctrl+z": ("edit", "Undo"),
    "ctrl+shift+z": ("edit", "Redo"),
    "ctrl+y": ("edit", "Redo"),
    "ctrl+t": ("object", "Free transform"),
    "ctrl+g": ("object", "Group"),
    "ctrl+shift+g": ("object", "Ungroup"),
    "ctrl+8": ("object", "Compound shape"),
    "ctrl+shift+8": ("object", "Release compound"),
    "ctrl+n": ("file", "New"),
    "ctrl+d": ("edit", "Duplicate"),
    "F1": ("view", "Keyboard shortcuts"),
    "ctrl+slash": ("view", "Shortcut HUD"),
    "ctrl+semicolon": ("view", "Hide guides"),
    "ctrl+shift+semicolon": ("view", "Enable snapping"),
}


def key(spec: str) -> None:
    if spec in TOOL_POS:
        click(*TOOL_POS[spec])
        time.sleep(0.12)
        return
    if spec in {"ctrl+bracketright", "ctrl+]"}:
        click_text("Forward")
        return
    if spec in {"ctrl+bracketleft", "ctrl+["}:
        click_text("Backward")
        return
    if spec in {"ctrl+shift+bracketleft", "ctrl+shift+["}:
        click_text("To back")
        return
    if spec in {"ctrl+shift+bracketright", "ctrl+shift+]"}:
        click_text("To front")
        return
    if spec == "space":
        if not click_text("Play"):
            click(*PERSONA["motion"])
        return
    if spec == "Escape":
        click(760, 500)
        return
    if spec == "Return":
        click(700, 400)
        return
    mapped = MENU_KEYS.get(spec)
    if mapped:
        menu, label = mapped
        if not click_text(menu.capitalize()):
            click(*MENUS[menu])
        time.sleep(0.3)
        if not blocked(label):
            click_text(label)
        time.sleep(0.25)
        return
    # Last resort. The headless seat usually drops these.
    mods = {"ctrl": "ctrl", "shift": "shift", "alt": "alt"}
    parts = spec.split("+")
    cmd = ["wtype"]
    for mod in parts[:-1]:
        cmd += ["-M", mods[mod]]
    cmd += ["-k", parts[-1]]
    subprocess.run(cmd, env=env_base(), capture_output=True)


def ocr_words(image: Path) -> list[dict]:
    proc = subprocess.run(
        ["tesseract", str(image), "stdout", "--psm", "6", "tsv"],
        capture_output=True,
        text=True,
    )
    rows = []
    lines = proc.stdout.splitlines()
    if not lines:
        return rows
    for line in lines[1:]:
        cols = line.split("\t")
        if len(cols) < 12 or not cols[11].strip():
            continue
        try:
            conf = float(cols[10])
        except ValueError:
            conf = 0
        if conf < 25:
            continue
        rows.append(
            {
                "left": int(cols[6]),
                "top": int(cols[7]),
                "width": int(cols[8]),
                "height": int(cols[9]),
                "line": (cols[2], cols[3], cols[4]),
                "text": cols[11].strip(),
            }
        )
    return rows


def click_text(label: str) -> bool:
    shot = RUNTIME / "ocr.png"
    grim(shot)
    words = ocr_words(shot)
    want = re.sub(r"[^a-z0-9]+", "", label.lower())
    if not want:
        return False
    # Phrase on one line.
    grouped: dict[tuple, list[dict]] = {}
    for word in words:
        grouped.setdefault(word["line"], []).append(word)
    best = None
    for group in grouped.values():
        group.sort(key=lambda w: w["left"])
        joined = "".join(re.sub(r"[^a-z0-9]+", "", w["text"].lower()) for w in group)
        if want in joined or want[:8] in joined and len(want) > 6:
            best = group
            break
        for word in group:
            got = re.sub(r"[^a-z0-9]+", "", word["text"].lower())
            if got and (got == want or want.startswith(got) and len(got) > 4):
                best = [word]
                break
        if best:
            break
    if not best:
        return False
    left = min(w["left"] for w in best)
    right = max(w["left"] + w["width"] for w in best)
    top = min(w["top"] for w in best)
    bottom = max(w["top"] + w["height"] for w in best)
    click_abs((left + right) // 2, (top + bottom) // 2)
    return True


def blocked(label: str) -> bool:
    text = label.lower().strip()
    return any(text.startswith(prefix) for prefix in BLOCK_ITEM)


class Grabber:
    def __init__(self) -> None:
        self.dir = RUNTIME / "frames"
        self.stop = False
        self.count = 0
        self.started = 0.0

    def run(self) -> None:
        if self.dir.exists():
            shutil.rmtree(self.dir)
        self.dir.mkdir()
        self.started = time.time()
        while not self.stop:
            path = self.dir / f"{self.count:05d}.png"
            subprocess.run(["grim", str(path)], env=env_base(), capture_output=True)
            if path.exists() and path.stat().st_size > 1000:
                self.count += 1
            else:
                path.unlink(missing_ok=True)
            time.sleep(0.03)

    def start(self) -> None:
        import threading

        self.stop = False
        self.count = 0
        self.thread = threading.Thread(target=self.run, daemon=True)
        self.thread.start()
        time.sleep(0.15)

    def finish(self) -> float:
        self.stop = True
        self.thread.join(timeout=3)
        elapsed = max(0.4, time.time() - self.started)
        return elapsed


def launch_app(args: list[str]) -> None:
    kill_sandbox()
    time.sleep(0.2)
    subprocess.Popen(
        [OMA, *args],
        env=sandbox_env(),
        stdout=open(RUNTIME / "app.log", "a"),
        stderr=subprocess.STDOUT,
        start_new_session=True,
    )
    deadline = time.time() + 14
    while time.time() < deadline:
        if find_window("omadesign"):
            time.sleep(0.8)
            focus("omadesign")
            shot = RUNTIME / "ready.png"
            grim(shot)
            if mean_luma(shot) > 8:
                return
        time.sleep(0.25)
    raise RuntimeError(f"omadesign did not paint: {args}")


def launch_term(script: str) -> None:
    kill_sandbox()
    time.sleep(0.2)
    path = RUNTIME / "demo.sh"
    path.write_text("#!/bin/bash\nset +e\n" + script + "\nsleep 30\n")
    path.chmod(0o755)
    subprocess.Popen(
        ["foot", "--config", str(RUNTIME / "foot.ini"), "-e", "bash", str(path)],
        env=sandbox_env(),
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
        start_new_session=True,
    )
    deadline = time.time() + 8
    while time.time() < deadline:
        if find_window("foot"):
            focus("foot")
            time.sleep(0.4)
            return
        time.sleep(0.15)
    raise RuntimeError("foot did not open")


def setup_for(feature: dict) -> str:
    n = feature["n"]
    if n in {1, 2, 20, 101, 105, 111, 112, 126, 127, 128, 130, 139}:
        return "term"
    if n in {3, 4, 5, 6, 7, 8, 9, 58, 87, 88, 144}:
        return "welcome"
    if n == 66:
        return "welcome"
    if n in {15, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 140}:
        return "photo"
    if n in {16, 79, 80, 81, 82, 83, 84, 85, 86}:
        return "motion"
    if n in {13, 54, 55, 56, 57, 59}:
        return "layout"
    if n in {14, 35, 60, 61, 62, 63, 64, 65}:
        return "pixel"
    return "design"


def shell_for(feature: dict) -> str:
    n = feature["n"]
    poster = HOME / "Studio/poster.oma"
    photo = HOME / "Pictures/photo.jpg"
    raw = HOME / "Pictures/synthetic.dng"
    kit = HOME / "Fieldwork"
    starter = REPO / "plugins/studio-starter"
    out = RUNTIME / "cli-out"
    batch_in = RUNTIME / "batch-in"
    batch_out = RUNTIME / "batch-out"
    batch_in.mkdir(exist_ok=True)
    batch_out.mkdir(exist_ok=True)
    if not (batch_in / "poster.oma").exists():
        shutil.copy(poster, batch_in / "poster.oma")
    scripts = {
        1: f"""
echo 'curl -fsSL https://omadesign.app/install | sh'
echo
echo '--- installer text. not executed ---'
curl -fsSL https://omadesign.app/install | head -n 24
echo
echo "this machine: $({OMA} --version)"
echo "binary: {OMA}"
""",
        2: f"""
file {OMA}
{OMA} --version
echo
echo 'portable archives'
ls -1 {REPO}/dist/omadesign-0.5.8-*.tar.gz
""",
        20: f"""
echo 'theme read order'
ls -l {HOME}/.local/state/omarchy/current/theme/colors.toml
echo
head -n 16 {HOME}/.local/state/omarchy/current/theme/colors.toml
echo
echo 'fallback: stock Omarchy Catppuccin when those files are absent'
""",
        101: f"""
echo '$ omadesign --inspect poster.oma'
{OMA} --inspect {poster} | head -n 40
""",
        105: f"""
echo '$ omadesign --inspect mark.oma'
{OMA} --inspect {HOME}/Studio/mark.oma | head -n 36
echo
echo 'conversion notes travel with the document, next to the pixels'
""",
        111: f"""
rm -f {out}/poster.png
mkdir -p {out}
echo '$ omadesign --inspect poster.oma'
{OMA} --inspect {poster} | head -n 18
echo
echo '$ omadesign --convert poster.oma --output poster.png'
{OMA} --convert {poster} --output {out}/poster.png
ls -l {out}/poster.png
""",
        112: f"""
rm -f {out}/synthetic.tif {out}/synthetic.jpg
mkdir -p {out}
echo '$ omadesign --convert synthetic.dng --output synthetic.tif'
{OMA} --convert {raw} --output {out}/synthetic.tif
echo exit:$?
ls -l {raw} {out}/synthetic.tif 2>/dev/null || true
echo
echo 'camera file is still the original'
ls -l {raw}
""",
        126: f"""
echo '$ omadesign --agent-docs manual | head'
{OMA} --agent-docs manual | head -n 30
""",
        127: f"""
rm -rf {batch_out}
mkdir -p {batch_out}
echo '$ omadesign --plugin studio-starter --command nudge --batch input --output-dir output --params {{dx,dy}}'
{OMA} --plugin {starter} --command nudge --batch {batch_in} --output-dir {batch_out} --params '{{"dx":24,"dy":12}}'
echo exit:$?
ls -l {batch_out}
""",
        128: f"""
echo '$ omadesign --list-plugins'
{OMA} --list-plugins
echo
echo '$ omadesign --install-plugin studio-starter'
{OMA} --install-plugin {starter}
""",
        130: f"""
echo 'fresh starter source'
ls -la {starter}
echo
echo 'installed copy'
ls -la {HOME}/.local/share/omadesign/plugin-examples/studio-starter 2>/dev/null || echo '(installed on first run)'
""",
        139: f"""
echo 'brand kit on disk'
find {kit} -maxdepth 3 \\( -name '.omabrand' -o -name '.omacolors' -o -name '.omatype' -o -name '*.svg' \\) | head -n 40
""",
    }
    return scripts[n]


def steps_for(feature: dict) -> list[str]:
    n = feature["n"]
    tweet = feature["tweet"]
    title = feature["title"]
    custom = {
        3: ["sweep 400 250 800 650", "click welcome vector", "wait 0.4", "key Escape", "click welcome raster", "wait 0.3", "key Escape"],
        4: ["sweep 520 120 760 280", "wait 1.2"],
        5: ["sweep 520 270 820 340", "sweep 520 360 820 430", "sweep 520 450 820 520"],
        6: ["sweep 20 22 1100 22", "wait 0.8"],
        7: ["click welcome filter", "wait 0.8", "click welcome filter", "wait 0.4"],
        8: ["click welcome vector", "wait 0.8", "sweep 500 200 1000 560", "wait 0.6", "key Escape"],
        9: ["click welcome recovered", "wait 1.0", "click welcome recent", "wait 0.6"],
        66: ["click welcome photo", "wait 1.2", "sweep 180 100 1100 640"],
        10: ["key ctrl+n", "wait 0.8", "key Escape", "wait 0.4"],
        11: ["persona design", "wait 0.45", "persona pixel", "wait 0.45", "persona layout", "wait 0.45", "persona photo", "wait 0.45", "persona motion", "wait 0.45", "persona design"],
        12: ["key v", "wait 0.25", "key p", "wait 0.25", "key r", "drag 860 220 1040 380", "key t", "wait 0.3"],
        17: ["key ctrl+slash", "wait 0.4", "hold shift 1.4", "wait 0.3", "key ctrl+slash"],
        18: ["key p", "hold shift 1.6", "drag 860 240 1040 420", "key Escape"],
        19: ["sweep 12 8 1260 44", "sweep 1080 80 1260 640", "wait 0.6"],
        21: ["key v", "drag 480 280 620 360", "wait 0.3"],
        22: ["key ctrl+bracketright", "wait 0.35", "key ctrl+shift+bracketleft", "wait 0.4"],
        23: ["key v", "click 520 320", "key ctrl+t", "wait 0.8"],
        24: ["key a", "drag 500 300 560 340", "wait 0.4"],
        26: ["menu object", "wait 0.6", "key Escape"],
        27: ["key p", "click 880 240", "click 960 320", "click 900 400", "key Return"],
        28: ["key shift+o", "drag 860 200 1080 420"],
        29: ["key n", "drag 860 240 1000 460"],
        30: ["key r", "drag 860 200 1000 320", "key o", "drag 1020 220 1160 360", "key l", "drag 860 360 1100 360"],
        31: ["key r", "drag 860 220 1080 420", "hold alt 1.2", "drag 1080 420 1000 340"],
        32: ["key t", "click 900 300", "type Omadesign", "key Escape"],
        33: ["key t", "click 900 280", "type Aa", "key Escape", "sweep 1100 80 1260 520"],
        34: ["key r", "drag 860 220 1080 420", "key g", "drag 880 250 1060 400", "key i", "click 700 300"],
        36: ["key z", "click 640 360", "key h", "drag 700 400 560 320"],
        37: ["menu select", "wait 0.9", "key Escape"],
        38: ["key r", "drag 840 220 1000 380", "key o", "drag 900 260 1100 440", "key ctrl+a", "key ctrl+8", "wait 0.5", "key a"],
        40: ["key r", "drag 860 220 1040 360", "key o", "drag 940 280 1120 440", "key ctrl+a", "key ctrl+8", "wait 0.4", "key ctrl+shift+8"],
        46: ["sweep 1100 80 1260 680", "item Pass through"],
        47: ["drag 420 86 420 240", "wait 0.4", "key ctrl+semicolon"],
        50: ["menu view", "item Guides", "item Lock all guides", "wait 0.4"],
        52: ["key ctrl+shift+semicolon", "wait 0.3", "key v", "drag 500 300 640 380", "key ctrl+shift+semicolon"],
        53: ["key v", "hold shift 1.0", "drag 500 300 680 300", "hold alt 1.0", "drag 520 340 700 420"],
        58: ["click welcome layout", "wait 0.8", "sweep 480 180 1100 560", "key Escape"],
        87: ["click welcome vector", "wait 0.7", "sweep 420 160 1180 600"],
        88: ["click welcome vector", "wait 0.7", "item Use this template", "wait 0.8", "key v", "drag 500 280 640 360"],
        89: ["item Inspect", "wait 0.3", "item Palettes", "wait 0.35", "item Brand", "wait 0.5"],
        119: ["menu plugins", "wait 0.8", "key Escape"],
        120: ["menu plugins", "item Manage plugins", "wait 1.2", "key Escape"],
        121: ["menu plugins", "item Manage plugins", "wait 0.6", "sweep 200 160 1000 600", "key Escape"],
        131: ["key v", "wait 0.2", "key p", "wait 0.2", "key r", "wait 0.2", "key t", "wait 0.2", "key b", "wait 0.3"],
        132: ["key ctrl+z", "wait 0.25", "key ctrl+shift+z", "wait 0.25", "key ctrl+d", "wait 0.3"],
        133: ["key ctrl+t", "wait 0.3", "key ctrl+bracketright", "wait 0.25", "key ctrl+g", "wait 0.3"],
        134: ["key z", "click 700 360", "key h", "drag 760 420 600 340", "key space"],
        135: ["menu edit", "wait 0.5", "key Escape", "menu view", "wait 0.5", "key Escape"],
        136: ["key F1", "wait 1.4", "key Escape"],
        137: ["persona design", "wait 0.4", "persona pixel", "wait 0.4", "persona photo", "wait 0.4", "persona motion", "wait 0.4", "persona design"],
        138: ["key r", "drag 860 220 1040 380", "persona pixel", "key b", "drag 880 240 1040 400", "persona motion", "key space", "persona design"],
        141: ["menu plugins", "item Manage plugins", "wait 1.0", "key Escape"],
        142: ["menu file", "wait 1.0", "key Escape", "menu view", "item Document conversion notes", "wait 0.8", "key Escape"],
        143: ["menu file", "wait 1.2", "key Escape"],
        144: ["sweep 480 120 800 300", "wait 0.4", "sweep 500 260 820 660"],
    }
    if n in custom:
        return custom[n]
    steps: list[str] = []
    for match in re.finditer(
        r"(File|Edit|Select|Object|Arrange|View|Plugins)\s*→\s*([^.\n]+)",
        tweet,
    ):
        steps.append(f"menu {match.group(1).lower()}")
        rest = match.group(2)
        for part in rest.split("→")[:2]:
            label = re.split(r"[,.(/]", part)[0].strip()
            label = re.sub(r"\s+", " ", label)
            if label and not blocked(label):
                steps.append(f"item {label}")
        steps.append("wait 0.45")
        steps.append("key Escape")
    blob = f"{title} {tweet}"
    for name, shortcut in TOOLS:
        if re.search(rf"\b{name}\b", blob):
            steps.append(f"key {shortcut}")
            steps.append("wait 0.25")
            if shortcut in DRAW_TOOLS:
                steps.append("drag 860 230 1060 420")
            elif shortcut in {"v", "h", "a"}:
                steps.append("drag 500 300 660 380")
            break
    if "F1" in tweet:
        steps += ["key F1", "wait 1.0", "key Escape"]
    if "Ctrl+/" in tweet or "Ctrl+/" in title:
        steps += ["key ctrl+slash", "wait 0.6"]
    if not steps:
        steps = ["sweep 80 70 1200 680", "wait 0.8"]
    steps.append("wait 0.5")
    return steps


def prelude(setup: str) -> list[str]:
    if setup == "pixel":
        return ["persona pixel", "wait 0.35"]
    if setup == "layout":
        return ["persona layout", "wait 0.35"]
    if setup == "motion":
        return ["persona motion", "wait 0.35"]
    if setup == "photo":
        return ["wait 0.3"]
    if setup == "design":
        return ["key Escape", "persona design", "wait 0.2"]
    return []


def perform(steps: list[str]) -> None:
    holders: list[subprocess.Popen] = []
    for step in steps:
        if step.startswith("wait "):
            time.sleep(float(step.split()[1]))
        elif step.startswith("key "):
            key(step.split(" ", 1)[1])
        elif step.startswith("type "):
            click(900, 340)
            time.sleep(0.2)
        elif step.startswith("click welcome "):
            name = step.split()[-1]
            click(*WELCOME[name])
        elif step.startswith("click "):
            _, xs, ys = step.split()
            click(int(xs), int(ys))
        elif step.startswith("drag "):
            x1, y1, x2, y2 = (int(v) for v in step.split()[1:])
            drag(x1, y1, x2, y2)
        elif step.startswith("sweep "):
            x1, y1, x2, y2 = (int(v) for v in step.split()[1:])
            sweep(x1, y1, x2, y2)
        elif step.startswith("hold "):
            _, mod, seconds = step.split()
            holders.append(hold(mod, float(seconds)))
        elif step.startswith("menu "):
            name = step.split()[1]
            if not click_text(name.capitalize()):
                click(*MENUS[name])
            time.sleep(0.35)
        elif step.startswith("item "):
            label = step.split(" ", 1)[1]
            if blocked(label):
                time.sleep(0.4)
            else:
                click_text(label)
                time.sleep(0.3)
        elif step.startswith("persona "):
            name = step.split()[1]
            click(*PERSONA[name])
            time.sleep(0.25)
        else:
            raise RuntimeError(f"bad step {step}")
    for proc in holders:
        proc.wait(timeout=4)


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    query = "sans-serif:weight=bold" if bold else "sans-serif"
    path = subprocess.check_output(["fc-match", "-f", "%{file}", query], text=True).strip()
    return ImageFont.truetype(path, size)


def logo_image() -> Image.Image:
    im = Image.open(LOGO).convert("RGBA")
    px = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if r < 70 and g < 90 and b < 100:
                px[x, y] = (0, 0, 0, 0)
    bbox = im.getbbox()
    return im.crop(bbox) if bbox else im


def wrap(draw: ImageDraw.ImageDraw, text: str, face: ImageFont.FreeTypeFont, width: int) -> list[str]:
    words = text.split()
    lines: list[str] = []
    cur = ""
    for word in words:
        trial = word if not cur else f"{cur} {word}"
        if draw.textlength(trial, font=face) <= width:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    return lines


def card(title: str, outro: bool = False) -> Image.Image:
    im = Image.new("RGB", (W, H), "#07080d")
    mark = logo_image()
    mark.thumbnail((520 if outro else 460, 280 if outro else 240))
    x = (W - mark.width) // 2
    y = 150 if outro else 70
    im.paste(mark, (x, y), mark)
    draw = ImageDraw.Draw(im)
    kicker = font(22, bold=True)
    draw.text((W / 2, y + mark.height + 28), "OMADESIGN  0.5.8", font=kicker, fill="#9aa3c7", anchor="mm")
    if not outro:
        face = font(64, bold=True)
        lines = wrap(draw, title, face, 1080)[:3]
        ty = y + mark.height + 110
        for line in lines:
            draw.text((W / 2, ty), line, font=face, fill="#f4f6fb", anchor="mm")
            ty += 76
    else:
        face = font(28)
        draw.text((W / 2, y + mark.height + 78), "omadesign.app", font=face, fill="#d5dcf2", anchor="mm")
    draw.rectangle((80, H - 28, W - 80, H - 22), fill="#8ee6a0")
    return im


def og_image(title: str, tweet: str, frame: Path, dest: Path) -> None:
    im = Image.new("RGB", (1200, 630), "#07080d")
    if frame.exists():
        shot = Image.open(frame).convert("RGB")
        shot = shot.resize((760, 630))
        im.paste(shot, (520, 0))
        shade = Image.new("RGB", (180, 630), "#07080d")
        im.paste(shade, (520, 0))
    panel = Image.new("RGBA", (640, 630), (7, 8, 13, 255))
    im.paste(panel, (0, 0))
    mark = logo_image()
    mark.thumbnail((280, 150))
    im.paste(mark, (48, 48), mark)
    draw = ImageDraw.Draw(im)
    draw.text((48, 230), "OMADESIGN  0.5.8", font=font(18, bold=True), fill="#9aa3c7")
    face = font(42, bold=True)
    lines = wrap(draw, title, face, 520)[:4]
    y = 280
    for line in lines:
        draw.text((48, y), line, font=face, fill="#f4f6fb")
        y += 50
    small = font(18)
    blurb = wrap(draw, tweet, small, 520)[:3]
    y += 12
    for line in blurb:
        draw.text((48, y), line, font=small, fill="#b7c0ea")
        y += 26
    draw.rectangle((48, 590, 560, 596), fill="#8ee6a0")
    dest.parent.mkdir(parents=True, exist_ok=True)
    im.save(dest, "PNG")


def still_video(image: Path, seconds: float, dest: Path) -> None:
    subprocess.run(
        [
            "ffmpeg", "-y", "-loop", "1", "-t", str(seconds), "-i", str(image),
            "-r", "24", "-vf", "scale=1280:720,format=yuv420p",
            "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "20", "-an",
            str(dest),
        ],
        capture_output=True,
        check=True,
    )


def frames_video(directory: Path, count: int, elapsed: float, dest: Path) -> None:
    fps = max(8, min(24, round(count / max(elapsed, 0.5))))
    subprocess.run(
        [
            "ffmpeg", "-y", "-framerate", str(fps), "-i", str(directory / "%05d.png"),
            "-vf", "scale=1280:720,fps=24,format=yuv420p",
            "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "26", "-an",
            str(dest),
        ],
        capture_output=True,
        check=True,
    )


def concat(parts: list[Path], dest: Path) -> None:
    subprocess.run(
        [
            "ffmpeg", "-y",
            *sum((["-i", str(p)] for p in parts), []),
            "-filter_complex", f"concat=n={len(parts)}:v=1:a=0[v]",
            "-map", "[v]", "-c:v", "libx264", "-pix_fmt", "yuv420p",
            "-crf", "26", "-movflags", "+faststart", "-an", str(dest),
        ],
        capture_output=True,
        check=True,
    )


def record_feature(feature: dict, grabber: Grabber, force: bool) -> None:
    slug = feature["slug"]
    dest = PUBLIC / slug
    film = dest / "film.mp4"
    cover = dest / "og.png"
    if film.exists() and cover.exists() and film.stat().st_size > 40_000 and not force:
        log(f"skip {feature['id']}")
        return
    setup = setup_for(feature)
    log(f"rec {feature['id']} {setup} {feature['title']}")
    dest.mkdir(parents=True, exist_ok=True)
    work = RUNTIME / "work"
    if work.exists():
        shutil.rmtree(work)
    work.mkdir()
    if setup == "term":
        launch_term(shell_for(feature))
        grabber.start()
        time.sleep(8.0)
        elapsed = grabber.finish()
    else:
        if setup == "welcome":
            launch_app([])
            time.sleep(0.6)
        elif setup == "photo":
            launch_app([str(HOME / "Pictures/synthetic.dng")])
        else:
            launch_app([str(HOME / "Studio/poster.oma")])
        focus("omadesign")
        steps = prelude(setup) + steps_for(feature)
        grabber.start()
        started = time.time()
        perform(steps)
        remain = 6.0 - (time.time() - started)
        if remain > 0:
            time.sleep(remain)
        elapsed = grabber.finish()
    if grabber.count < 8:
        raise RuntimeError(f"only {grabber.count} frames")
    (RUNTIME / "review").mkdir(exist_ok=True)
    frames = sorted(grabber.dir.glob("*.png"))
    best = max(frames, key=lambda path: ImageStat.Stat(Image.open(path).convert("L")).extrema[0][1])
    if ImageStat.Stat(Image.open(best).convert("L")).extrema[0][1] < 30:
        shutil.copy(best, RUNTIME / "review" / f"{feature['id']}-black.png")
        raise RuntimeError("recording is black")
    mid = frames[len(frames) // 2]
    review = RUNTIME / "review"
    review.mkdir(exist_ok=True)
    shutil.copy(mid, review / f"{feature['id']}.png")
    intro = card(feature["title"], outro=False)
    outro = card(feature["title"], outro=True)
    intro.save(work / "intro.png")
    outro.save(work / "outro.png")
    still_video(work / "intro.png", 2.0, work / "intro.mp4")
    frames_video(grabber.dir, grabber.count, elapsed, work / "body.mp4")
    still_video(work / "outro.png", 1.6, work / "outro.mp4")
    concat([work / "intro.mp4", work / "body.mp4", work / "outro.mp4"], film)
    og_image(feature["title"], feature["tweet"], mid, cover)
    log(f"ok {feature['id']} frames={grabber.count} bytes={film.stat().st_size}")


def probe_duration(path: Path) -> float:
    proc = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "default=nw=1:nk=1", str(path)],
        capture_output=True,
        text=True,
    )
    return float(proc.stdout.strip() or "0")


def rebookend() -> None:
    """Replace title cards with a transparent logo and rebuild each OG from the film."""
    features = json.loads(CATALOG.read_text())
    work = RUNTIME / "rebook"
    work.mkdir(exist_ok=True)
    for feature in features:
        film = PUBLIC / feature["slug"] / "film.mp4"
        if not film.exists():
            continue
        dur = probe_duration(film)
        body_len = dur - 3.6
        if body_len < 0.8:
            log(f"skip rebook {feature['id']} dur={dur}")
            continue
        body = work / "body.mp4"
        subprocess.run(
            ["ffmpeg", "-y", "-ss", "2", "-t", f"{body_len:.3f}", "-i", str(film),
             "-vf", "scale=1280:720,fps=24,format=yuv420p",
             "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "26", "-an", str(body)],
            capture_output=True, check=True,
        )
        intro = card(feature["title"], outro=False)
        outro = card(feature["title"], outro=True)
        intro.save(work / "intro.png")
        outro.save(work / "outro.png")
        still_video(work / "intro.png", 2.0, work / "intro.mp4")
        still_video(work / "outro.png", 1.6, work / "outro.mp4")
        out = work / "film.mp4"
        concat([work / "intro.mp4", body, work / "outro.mp4"], out)
        shutil.move(out, film)
        frame = work / "frame.png"
        best = None
        best_score = -1
        for stamp in (0.4, 1.2, 2.4, 3.6):
            if stamp >= body_len:
                break
            subprocess.run(
                ["ffmpeg", "-y", "-ss", str(stamp), "-i", str(body), "-frames:v", "1", str(frame)],
                capture_output=True,
            )
            if not frame.exists():
                continue
            score = ImageStat.Stat(Image.open(frame).convert("L")).mean[0]
            if score > best_score:
                best_score = score
                shutil.copy(frame, work / "best.png")
        if best_score >= 0:
            og_image(feature["title"], feature["tweet"], work / "best.png", PUBLIC / feature["slug"] / "og.png")
        log(f"rebook {feature['id']}")
    log("REBOOK DONE")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--ids", default="")
    parser.add_argument("--force", action="store_true")
    parser.add_argument("--rebookend", action="store_true")
    args = parser.parse_args()
    if args.rebookend:
        rebookend()
        return
    features = json.loads(CATALOG.read_text())
    wanted = {item.strip() for item in args.ids.split(",") if item.strip()}
    if wanted:
        features = [f for f in features if f["id"] in wanted]
    ensure_compositor()
    prepare_fixtures()
    grabber = Grabber()
    failed = []
    for feature in features:
        try:
            record_feature(feature, grabber, args.force)
        except Exception as exc:
            failed.append(f"{feature['id']}: {exc}")
            log(f"FAIL {feature['id']} {exc}")
            kill_sandbox()
    kill_sandbox()
    if failed:
        log("FAILED " + "; ".join(failed))
        raise SystemExit(1)
    log(f"DONE {len(features)}")


if __name__ == "__main__":
    main()
