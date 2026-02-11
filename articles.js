document.addEventListener("DOMContentLoaded", () => {
  const countdownEl = document.getElementById("countdown-text");

  // March 1, 2026 (local time)
  const launchDate = new Date(2026, 2, 1, 0, 0, 0);

  function updateCountdown() {
    const now = new Date();
    const diff = launchDate - now;

    if (diff <= 0) {
      countdownEl.textContent = "CSGOAce is live!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownEl.textContent =
      `CSGOAce goes live in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("exclusive-form");
  const success = document.getElementById("exclusive-success");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        form.style.display = "none";
        success.classList.remove("hidden");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Network error. Please try again.");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  const toggleIcon = toggleBtn?.querySelector("i");
  const body = document.body;

  // Default: dark (moon)
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    body.classList.add("light");
    toggleIcon.className = "fa-regular fa-sun";
  }

  toggleBtn?.addEventListener("click", () => {
    body.classList.toggle("light");

    const isLight = body.classList.contains("light");

    toggleIcon.className = isLight
      ? "fa-regular fa-sun"
      : "fa-solid fa-moon";

    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
});

