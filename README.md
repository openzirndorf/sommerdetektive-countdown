# sommerdetektive-countdown

Geheimnisvolle Countdown-/Teaser-Seite für die **Zirndorfer Sommerdetektive**
(Start: **3. August 2026**). Statische Seite für GitHub Pages — keine
externen Fonts, CDNs oder Tracker (gleiche Verbotsliste wie die Haupt-App).

**Live:** https://sommerdetektive.openzirndorf.de (Custom Domain via `CNAME`;
zusätzlich beim DNS-Anbieter einen CNAME-Record `sommerdetektive` →
`openzirndorf.github.io` anlegen und in den Pages-Settings „Enforce HTTPS“
aktivieren)

## Inhalt

- `index.html` — Countdown, Teaser-Hinweise, Share-Text mit Kopier-/Teilen-Button,
  Downloads, Credits (Veranstalter ChaRUNity e.V. · Sponsor Helpi · Idee &
  Umsetzung openzirndorf)
- `impressum.html` — Impressum + Datenschutz-Hinweis (GitHub Pages)
- `countdown.js` — Countdown-Logik; läuft am 03.08.2026 00:00 Uhr (MESZ) ab
  und zeigt dann den Button „Zum Einsatz melden“
- `style.css` — Detektiv-Akten-Look (nächtliches Büro, Manila-Mappen, Stempel)
- `images/silhouette.png` — Maskottchen als Silhouette (Teaser-Motiv), erzeugt
  aus `images/detektiv.png` mit `tools/make_silhouette.py`; das Original ist
  per `.gitignore` ausgeschlossen, damit das Maskottchen bis zum Start geheim
  bleibt (liegt in der Haupt-App unter `frontend/public/images/logo2.png`)
- `downloads/` — hier `sharepic-instagram.png`, `flyer.pdf` und `poster.pdf`
  ablegen (Dateinamen sind fest verlinkt, siehe `downloads/README.md`)

## Vor dem Veröffentlichen prüfen

- [ ] **Impressum:** Platzhalter `[Straße Hausnummer]` in `impressum.html`
      durch die ladungsfähige Anschrift des ChaRUNity e.V. ersetzen
- [ ] **Downloads:** die drei Dateien in `downloads/` ablegen
- [ ] **Ziel-Link nach Ablauf:** in `index.html` zeigt der Button
      „Zum Einsatz melden“ auf `https://detektive.openzirndorf.de` —
      anpassen, sobald die finale Adresse der App feststeht (falls die App
      später selbst `sommerdetektive.openzirndorf.de` übernimmt, ersetzt sie
      diese Countdown-Seite einfach komplett)

## Veröffentlichen

GitHub → Repo **Settings → Pages → Deploy from a branch → `main` / root**.
Danach ist die Seite unter der Live-URL oben erreichbar; Änderungen werden
mit jedem Push auf `main` neu ausgeliefert.
