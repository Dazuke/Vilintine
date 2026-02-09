/* ======================
   SCENE CONTROLLER
====================== */
const scenes = document.querySelectorAll(".scene");
let currentScene = 0;

function showScene(index) {
  scenes.forEach(s => s.classList.remove("active"));
  if (scenes[index]) {
    scenes[index].classList.add("active");
    currentScene = index;
  }
}

/* ======================
   FIREWORK SCENE
====================== */
const fireworkContainer = document.querySelector(".firework-container");

function launchFirework(x, y) {
  const rocket = document.createElement("div");
  rocket.className = "rocket";
  rocket.style.left = x + "px";
  fireworkContainer.appendChild(rocket);

  setTimeout(() => {
    rocket.remove();
    explode(x, y);
  }, 1200);
}

function explode(x, y) {
  const total = 36;
  for (let i = 0; i < total; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    p.style.left = x + "px";
    p.style.top = y + "px";
    p.style.setProperty("--angle", `${(360 / total) * i}deg`);
    p.style.setProperty("--distance", `${80 + Math.random() * 40}px`);
    fireworkContainer.appendChild(p);
    setTimeout(() => p.remove(), 1500);
  }
}

function startFireworks() {
  launchFirework(200, 200);
  setTimeout(() => launchFirework(500, 180), 700);
  setTimeout(() => launchFirework(350, 120), 1400);
}

/* ======================
   PAINTBALL LOVE
====================== */
const area = document.querySelector(".paintball-container");

const points = [
  { x:190,y:60},{x:210,y:70},{x:230,y:85},{x:250,y:105},{x:260,y:130},
  { x:250,y:155},{x:230,y:175},{x:205,y:195},
  { x:180,y:215},{x:150,y:230},{x:120,y:215},
  { x:95,y:195},{x:70,y:175},{x:50,y:155},{x:40,y:130},
  { x:50,y:105},{x:70,y:85},{x:90,y:70},{x:110,y:60},
  { x:130,y:55},{x:150,y:55},{x:170,y:55},{x:160,y:65}
];

function shootPaint(point, index) {
  const ball = document.createElement("div");
  ball.className = "ball";
  ball.style.left = point.x + "px";
  ball.style.setProperty("--drop", point.y + "px");
  area.appendChild(ball);

  setTimeout(() => {
    ball.remove();

    const paint = document.createElement("div");
    paint.className = "paint";
    paint.style.left = point.x - 11 + "px";
    paint.style.top = point.y - 11 + "px";
    area.appendChild(paint);

    setTimeout(() => paint.classList.add("pink"), index * 80);
  }, 400);
}

function startPaintLove() {
  points.forEach((p, i) => {
    setTimeout(() => shootPaint(p, i), i * 200);
  });
}

/* ======================
   TIMELINE UTAMA
====================== */
showScene(0);          // FIREWORK
startFireworks();

setTimeout(() => {
  showScene(1);        // PAINTBALL
  startPaintLove();
}, 3500);

setTimeout(() => {
  showScene(2);        // CARRIAGE
}, 8500);

setTimeout(() => {
  showScene(3);        // CINDERELLA
}, 12000);
