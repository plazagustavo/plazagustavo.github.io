(function () {
  "use strict";

  /* ── Año en footer ── */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ── Toast ── */
  var toast    = document.getElementById("toast");
  var hideTimer;

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(hideTimer);
    hideTimer = setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 3200);
  }

  /* ── Botón ¡Hola! ── */
  var btnWelcome = document.getElementById("btnWelcome");
  if (btnWelcome) {
    btnWelcome.addEventListener("click", function () {
      showToast("Gracias por visitar mi portfolio — seguí explorando los proyectos.");
    });
  }

  /* ── Nav: marcar link activo al hacer scroll ── */
  var sections = Array.from(document.querySelectorAll("section[id]"));
  var navLinks  = Array.from(document.querySelectorAll(".nav-links a"));

  function onScroll() {
    var scrollY = window.scrollY + 80;
    var current = sections
      .filter(function (s) { return s.offsetTop <= scrollY; })
      .pop();

    navLinks.forEach(function (link) {
      link.style.color = "";
      if (current && link.getAttribute("href") === "#" + current.id) {
        link.style.color = "var(--clr-text)";
      }
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
