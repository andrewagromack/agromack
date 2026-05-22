// Nav scroll
const nav = document.getElementById("mainNav");
if (nav) window.addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 20));

// Mobile menu
const ham = document.getElementById("ham");
const mob = document.getElementById("mobMenu");
let mobOpen = false;
if (ham && mob) {
  ham.addEventListener("click", () => {
    mobOpen = !mobOpen;
    mob.classList.toggle("open", mobOpen);
    ham.classList.toggle("open", mobOpen);
    ham.setAttribute("aria-expanded", mobOpen);
    document.body.style.overflow = mobOpen ? "hidden" : "";
  });
}
function closeMob() {
  mobOpen = false;
  if (mob) mob.classList.remove("open");
  if (ham) { ham.classList.remove("open"); ham.setAttribute("aria-expanded", "false"); }
  document.body.style.overflow = "";
}

// Tabs (used on contacto page)
function setTab(p, ev) {
  if (ev) ev.preventDefault();
  document.querySelectorAll(".c-form").forEach(f => f.classList.remove("active"));
  document.querySelectorAll(".c-card").forEach(c => c.style.display = "none");
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  const cf = document.getElementById("cf-" + p);
  const ci = document.getElementById("ci-" + p);
  const tb = document.getElementById("tab-" + (p === "patrick" ? "p" : "a"));
  if (cf) cf.classList.add("active");
  if (ci) ci.style.display = "block";
  if (tb) tb.classList.add("active");
}

// FAQ accordion
function toggleFaq(btn) {
  const ans = btn.nextElementSibling;
  const isOpen = ans.classList.contains("open");
  document.querySelectorAll(".faq-a.open").forEach(a => a.classList.remove("open"));
  document.querySelectorAll(".faq-q.open").forEach(q => q.classList.remove("open"));
  if (!isOpen) { ans.classList.add("open"); btn.classList.add("open"); }
}

// Form submit -> mailto with prefilled body
function submitForm(e, who) {
  e.preventDefault();
  const f = e.target;
  const fd = new FormData(f);
  const to = who === "patrick" ? "patrick@agromack.cl" : "andrew@agromack.cl";
  const subject = `Consulta Agromack — ${fd.get("service") || "Sin especificar"}`;
  const body = `Nombre: ${fd.get("name")}\nCorreo: ${fd.get("email")}\nTeléfono: ${fd.get("phone") || "-"}\nServicio: ${fd.get("service") || "-"}\n\nMensaje:\n${fd.get("message")}`;
  window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return false;
}

// Fade-up animations
const obs = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in"); }),
  { threshold: 0.12 }
);
document.querySelectorAll(".fade-up").forEach(el => obs.observe(el));
