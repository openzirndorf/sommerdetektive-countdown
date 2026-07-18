#!/usr/bin/env python3
"""Erzeugt aus dem Maskottchen eine dunkle Silhouette (Teaser-Motiv).

Nutzt nur den Alphakanal von images/detektiv.png und füllt ihn mit
Espresso-Braun — das Maskottchen bleibt bis zum 3. August geheim.
"""
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
INK = (51, 36, 15)  # --sd-navy-dark

src = Image.open(ROOT / "images" / "detektiv.png").convert("RGBA")
alpha = src.getchannel("A")
silhouette = Image.new("RGBA", src.size, INK + (0,))
silhouette.putalpha(alpha)
# Volle Deckkraft nur, wo das Original wirklich sichtbar ist
solid = Image.new("RGBA", src.size, INK + (255,))
out = Image.composite(solid, Image.new("RGBA", src.size, (0, 0, 0, 0)), alpha)
out.save(ROOT / "images" / "silhouette.png")
print("images/silhouette.png geschrieben:", out.size)
