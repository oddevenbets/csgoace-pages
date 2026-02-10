/* COUNTDOWN */
const c = document.getElementById("countdown");
const t = new Date(2026, 2, 1);

setInterval(() => {
  const d = t - new Date();
  c.textContent = d <= 0
    ? "We are live!"
    : `${Math.floor(d/86400000)}d ${Math.floor(d/3600000%24)}h ${Math.floor(d/60000%60)}m ${Math.floor(d/1000%60)}s`;
}, 1000);

/* SPINNER */
const reel = document.getElementById("reel");
const btn = document.getElementById("spinBtn");
const winCard = document.getElementById("winCard");
let spinning = false;

const ITEMS = [["gun1",40],["gun2",25],["gun3",20],["gun4",15]];
const W = 130, M = 650;

const pick = () => {
  let r = Math.random() * 100, s = 0;
  for (const [i,w] of ITEMS) {
    s += w;
    if (r <= s) return i;
  }
};

const offset = i => M/2 - (i*W + W/2);

function fill(arr) {
  reel.innerHTML = "";
  arr.forEach(id => {
    const img = document.createElement("img");
    img.src = `/assets/${id}.png`;
    img.className = id;
    reel.appendChild(img);
  });
}

fill(Array.from({length:40}, pick));
reel.style.transform = `translateX(${offset(20)}px)`;

btn.onclick = () => {
  if (spinning) return;
  spinning = true;
  btn.disabled = true;
  winCard.classList.add("hidden");

  const win = pick();
  const arr = Array.from({length:60}, pick);
  arr[30] = win;
  fill(arr);

  reel.style.transition = "none";
  reel.style.transform = `translateX(${offset(2)}px)`;
  reel.offsetHeight;

  reel.style.transition = "transform 7s cubic-bezier(.05,.3,.1,1)";
  reel.style.transform = `translateX(${offset(30)}px)`;

  setTimeout(() => {
    spinning = false;
    btn.disabled = false;
    if (win === "gun4") winCard.classList.remove("hidden");
  }, 7200);
};
