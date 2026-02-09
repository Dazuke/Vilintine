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

/* lovereerrr */
const points = [
  // kanan atas
  { x: 190, y: 60  }, // 1
  { x: 210, y: 70  }, // 2
  { x: 230, y: 85  }, // 3
  { x: 250, y: 105 }, // 4
  { x: 260, y: 130 }, // 5
  { x: 250, y: 155 }, // 6
  { x: 230, y: 175 }, // 7
  { x: 205, y: 195 }, // 8

  // bawah
  { x: 180, y: 215 }, // 9
  { x: 150, y: 230 }, //10
  { x: 120, y: 215 }, //11

  // kiri bawah
  { x: 95,  y: 195 }, //12
  { x: 70,  y: 175 }, //13
  { x: 50,  y: 155 }, //14
  { x: 40,  y: 130 }, //15
  { x: 50,  y: 105 }, //16
  { x: 70,  y: 85  }, //17
  { x: 90,  y: 70  }, //18
  { x: 110, y: 60  }, //19

  // atas tengah (nutup kurva)
  { x: 130, y: 55  }, //20
  { x: 150, y: 55  }, //21
  { x: 170, y: 55  }, //22
  { x: 160, y: 65  }  //23
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

    // semua pelan-pelan jadi pink
    setTimeout(() => {
      paint.classList.add("pink");
    }, index * 120);

  }, 400);
}

points.forEach((p, i) => {
  setTimeout(() => shootPaint(p, i), i * 250);
});

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
