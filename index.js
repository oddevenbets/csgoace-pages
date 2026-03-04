/* ================================
   COUNTDOWN (LOGIC ONLY)
================================ */
const targetDate = new Date(2026, 3, 14);

const daysEl = document.querySelector(".countdown-clean span:nth-child(1)");
const hoursEl = document.querySelector(".countdown-clean span:nth-child(3)");
const minsEl = document.querySelector(".countdown-clean span:nth-child(5)");
const secsEl = document.querySelector(".countdown-clean span:nth-child(7)");

setInterval(() => {
  const diff = targetDate - new Date();

  if (diff <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minsEl.textContent = "00";
    secsEl.textContent = "00";
    return;
  }

  daysEl.textContent = String(Math.floor(diff / 86400000)).padStart(2, "0");
  hoursEl.textContent = String(Math.floor((diff / 3600000) % 24)).padStart(2, "0");
  minsEl.textContent = String(Math.floor((diff / 60000) % 60)).padStart(2, "0");
  secsEl.textContent = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");
}, 1000);

/* ================================
   FIRST SIGNUP FORM (PRE-LAUNCH)
================================ */
const signupForm = document.getElementById("signupForm");
const successMsg = document.getElementById("successMsg");

if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const res = await fetch(signupForm.action, {
      method: "POST",
      body: new FormData(signupForm),
      headers: { Accept: "application/json" }
    });

    if (res.ok) {
      signupForm.remove();
      successMsg.classList.remove("hidden");
    }
  });
}

/* ================================
   SPINNER
================================ */
const reel = document.getElementById("reel");
const btn = document.getElementById("spinBtn");
const winCard = document.getElementById("winCard");

let spinning = false;

const ITEMS = [
  ["gun1", 40],
  ["gun2", 25],
  ["gun3", 20],
  ["gun4", 15], // Dragon Lore
];

const ITEM_WIDTH = 130;
const WINDOW_WIDTH = 650;

const pick = () => {
  let r = Math.random() * 100;
  let sum = 0;
  for (const [id, weight] of ITEMS) {
    sum += weight;
    if (r <= sum) return id;
  }
};

const offset = i =>
  WINDOW_WIDTH / 2 - (i * ITEM_WIDTH + ITEM_WIDTH / 2);

function fill(items) {
  reel.innerHTML = "";
  items.forEach(id => {
    const img = document.createElement("img");
    img.src = `/assets/${id}.png`;
    img.className = id;
    reel.appendChild(img);
  });
}

fill(Array.from({ length: 40 }, pick));
reel.style.transform = `translateX(${offset(20)}px)`;

/* Spin */
btn.onclick = () => {
  if (spinning) return;

  spinning = true;
  btn.disabled = true;
  winCard.classList.add("hidden");

  const win = pick();
  const items = Array.from({ length: 60 }, pick);
  items[30] = win;

  fill(items);

  reel.style.transition = "none";
  reel.style.transform = `translateX(${offset(2)}px)`;
  reel.offsetHeight;

  reel.style.transition = "transform 7s cubic-bezier(.05,.3,.1,1)";
  reel.style.transform = `translateX(${offset(30)}px)`;

  setTimeout(() => {
    spinning = false;
    btn.disabled = false;

    if (win === "gun4") {
      winCard.classList.remove("hidden");
    }
  }, 7200);
};

/* ================================
   SECOND FORM (WINNER – 2ND CASE)
================================ */
const secondForm = document.getElementById("secondForm");
const secondSuccess = document.getElementById("secondSuccess");

if (secondForm) {
  secondForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const res = await fetch(secondForm.action, {
      method: "POST",
      body: new FormData(secondForm),
      headers: { Accept: "application/json" }
    });

    if (res.ok) {
      secondForm.remove();
      secondSuccess.classList.remove("hidden");
    }
  });
}
