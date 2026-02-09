const scenes = document.querySelectorAll(".scene");
let current = 0;

function showScene(index) {
  scenes.forEach(s => s.classList.remove("active"));
  scenes[index].classList.add("active");
}

/* FIREWORK GENERATOR */
const fw = document.querySelector(".firework-container");

for (let i = 0; i < 80; i++) {
  const dot = document.createElement("span");
  dot.style.setProperty("--x", `${Math.random()*400 - 200}px`);
  dot.style.setProperty("--y", `${Math.random()*400 - 200}px`);
  dot.style.left = "50%";
  dot.style.top = "50%";
  fw.appendChild(dot);
}

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