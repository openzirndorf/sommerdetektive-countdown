/* Countdown zum 3. August 2026, 00:00 Uhr deutscher Zeit (MESZ = UTC+2).
   Fester Offset statt Ortszeit, damit der Countdown weltweit im selben
   Moment abläuft. */
(function () {
  "use strict";

  var TARGET = new Date("2026-08-03T00:00:00+02:00").getTime();

  var els = {
    days: document.getElementById("cd-days"),
    hours: document.getElementById("cd-hours"),
    mins: document.getElementById("cd-mins"),
    secs: document.getElementById("cd-secs"),
    countdown: document.getElementById("countdown"),
    reveal: document.getElementById("reveal"),
  };

  function pad(n) {
    return n < 10 ? "0" + n : String(n);
  }

  function tick() {
    var diff = TARGET - Date.now();

    if (diff <= 0) {
      // Der Fall ist eröffnet: Countdown ausblenden, CTA zeigen
      els.countdown.style.display = "none";
      var dateLine = document.querySelector(".countdown-date");
      if (dateLine) dateLine.style.display = "none";
      els.reveal.style.display = "block";
      clearInterval(timer);
      return;
    }

    var secs = Math.floor(diff / 1000);
    els.days.textContent = String(Math.floor(secs / 86400));
    els.hours.textContent = pad(Math.floor((secs % 86400) / 3600));
    els.mins.textContent = pad(Math.floor((secs % 3600) / 60));
    els.secs.textContent = pad(secs % 60);
  }

  var timer = setInterval(tick, 1000);
  tick();

  /* ---------- Teilen & Kopieren ---------- */

  var shareText = document.getElementById("share-text").textContent.trim();
  var copyBtn = document.getElementById("copy-btn");
  var shareBtn = document.getElementById("share-btn");

  copyBtn.addEventListener("click", function () {
    function done() {
      copyBtn.classList.add("copied");
      copyBtn.textContent = "✓ Kopiert!";
      setTimeout(function () {
        copyBtn.classList.remove("copied");
        copyBtn.textContent = "📋 Text kopieren";
      }, 2000);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareText).then(done, fallbackCopy);
    } else {
      fallbackCopy();
    }
    function fallbackCopy() {
      var ta = document.createElement("textarea");
      ta.value = shareText;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        done();
      } catch (e) {
        /* Kopieren nicht möglich — Text steht sichtbar auf der Seite */
      }
      document.body.removeChild(ta);
    }
  });

  // Nativer Teilen-Dialog (Handys) — Button nur zeigen, wenn verfügbar
  if (navigator.share) {
    shareBtn.hidden = false;
    shareBtn.addEventListener("click", function () {
      navigator.share({ text: shareText }).catch(function () {
        /* Abbruch durch Nutzer — kein Fehler */
      });
    });
  }
})();
