const scenes = document.querySelectorAll(".scene");
let current = 0;

function showScene(index) {
  scenes.forEach(s => s.classList.remove("active"));
  scenes[index].classList.add("active");
}

/* FIREWORK GENERATOR */
const container = document.querySelector(".firework-container");

function launchFirework(x, y) {
  const rocket = document.createElement("div");
  rocket.className = "rocket";
  rocket.style.left = x + "px";
  container.appendChild(rocket);

  setTimeout(() => {
    rocket.remove();
    explode(x, y);
  }, 1200);
}

function explode(x, y) {
  const total = 36; // jumlah partikel
  for (let i = 0; i < total; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    p.style.left = x + "px";
    p.style.top = y + "px";
    p.style.setProperty("--angle", `${(360 / total) * i}deg`);
    p.style.setProperty("--distance", `${80 + Math.random() * 40}px`);
    container.appendChild(p);

    setTimeout(() => p.remove(), 1500);
  }
}

/* 3 LEDAKAN */
setTimeout(() => launchFirework(200, 200), 200);
setTimeout(() => launchFirework(500, 180), 900);
setTimeout(() => launchFirework(350, 120), 1600);

/* PINDAH SCENE SETELAH SELESAI */
setTimeout(() => {
  document.getElementById("scene-firework").classList.remove("active");
  document.getElementById("scene-paintball").classList.add("active");
}, 3500);

/* TIMELINE */
setTimeout(() => {
  showScene(1);
}, 2000);

setTimeout(() => {
  showScene(2);
}, 5500);

document.getElementById("nextScene").onclick = () => {
  showScene(3);
};
