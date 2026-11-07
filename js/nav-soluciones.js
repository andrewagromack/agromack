// Dropdown "Soluciones digitales": abre con clic/tap y teclado (en escritorio también con hover vía CSS).
(function () {
  var dds = document.querySelectorAll(".nav-dd");
  if (!dds.length) return;

  function setOpen(dd, open) {
    dd.classList.toggle("open", open);
    var b = dd.querySelector(".nav-dd-btn");
    if (b) b.setAttribute("aria-expanded", open ? "true" : "false");
  }
  function closeAll(except) {
    dds.forEach(function (dd) { if (dd !== except) setOpen(dd, false); });
  }

  dds.forEach(function (dd) {
    var btn = dd.querySelector(".nav-dd-btn");
    if (!btn) return;
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = !dd.classList.contains("open");
      closeAll(dd);
      setOpen(dd, open);
    });
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".nav-dd")) closeAll(null);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    var openDd = document.querySelector(".nav-dd.open");
    closeAll(null);
    if (openDd) { var b = openDd.querySelector(".nav-dd-btn"); if (b) b.focus(); }
  });
})();
