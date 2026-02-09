const scenes = document.querySelectorAll(".scene");

function showScene(i) {
  scenes.forEach(s => s.classList.remove("active"));
  scenes[i].classList.add("active");
}

/* FIREWORK */
const fw = document.querySelector(".firework-container");

function fire(x) {
  const r = document.createElement("div");
  r.className = "rocket";
  r.style.left = x + "px";
  fw.appendChild(r);

  setTimeout(() => {
    r.remove();
    for (let i = 0; i < 24; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      p.style.left = x + "px";
      p.style.top = "200px";
      p.style.setProperty("--angle", `${i * 15}deg`);
      p.style.setProperty("--distance", "80px");
      fw.appendChild(p);
      setTimeout(() => p.remove(), 1500);
    }
  }, 1200);
}

/* PAINTBALL */
const area = document.querySelector(".paintball-container");
const points = [
  {x:150,y:60},{x:190,y:90},{x:210,y:130},{x:190,y:170},
  {x:150,y:210},{x:110,y:170},{x:90,y:130},{x:110,y:90}
];

function shoot(p,i) {
  const b = document.createElement("div");
  b.className = "ball";
  b.style.left = p.x + "px";
  b.style.setProperty("--drop", p.y + "px");
  area.appendChild(b);

  setTimeout(() => {
    b.remove();
    const c = document.createElement("div");
    c.className = "paint";
    c.style.left = p.x - 11 + "px";
    c.style.top = p.y - 11 + "px";
    area.appendChild(c);
    setTimeout(()=>c.classList.add("pink"),i*80);
  },400);
}

/* TIMELINE */
showScene(0);
fire(200); fire(400);

setTimeout(()=>{
  showScene(1);
  points.forEach((p,i)=>setTimeout(()=>shoot(p,i),i*200));
},3000);

setTimeout(()=>showScene(2),8000);
setTimeout(()=>showScene(3),11000);
