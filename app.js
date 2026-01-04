// ParaBank Custom Landing Page behavior
(function () {
  const REGISTER_URL = "https://parabank.parasoft.com/parabank/register.htm";

  const startBtn = document.getElementById("startBtn");
  const helpBtn  = document.getElementById("helpBtn");
  const modal    = document.getElementById("modal");
  const closeBtn = document.getElementById("closeModal");
  const okBtn    = document.getElementById("okModal");
  const darkBtn  = document.getElementById("darkToggle");

  function openModal() {
    modal.setAttribute("data-open", "true");
    modal.setAttribute("aria-hidden", "false");
  }
  function closeModal() {
    modal.removeAttribute("data-open");
    modal.setAttribute("aria-hidden", "true");
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (_) {}
  }
  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    setTheme(current === "dark" ? "light" : "dark");
  }

  // init theme
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") setTheme("dark");
  } catch (_) {}

  startBtn.addEventListener("click", () => {
    // Use a normal navigation (no CSP-sensitive APIs).
    window.location.href = REGISTER_URL;
  });

  helpBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);
  okBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  darkBtn.addEventListener("click", toggleTheme);
})();
