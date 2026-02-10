const scenes = document.querySelectorAll(".scene");
const bgm = document.getElementById("bgm");

function showScene(i){
  scenes.forEach(s=>s.classList.remove("active"));
  scenes[i].classList.add("active");
}

/* FIREWORK */
const fw = document.querySelector(".firework-container");

function launch(x){
  const r = document.createElement("div");
  r.className = "rocket";
  r.style.left = x + "px";
  fw.appendChild(r);

  setTimeout(()=>{
    r.remove();
    explode(x,200);
  },1300);
}

function explode(x,y){
  for(let i=0;i<32;i++){
    const p=document.createElement("div");
    p.className="particle";
    p.style.left=x+"px";
    p.style.top=y+"px";
    p.style.setProperty("--a",`${i*11}deg`);
    p.style.setProperty("--d",`${80+Math.random()*40}px`);
    fw.appendChild(p);
    setTimeout(()=>p.remove(),1500);
  }
}

/* LAUNCH FIREWORK */
launch(200);
launch(400);
launch(600);

/* PAINTBALL LOVE */
const area=document.querySelector(".paintball-container");
const text=document.querySelector(".love-text");
const points=[];

for(let t=0;t<Math.PI*2;t+=0.25){
  points.push({
    x:150+80*Math.sin(t)**3,
    y:150-70*(Math.cos(t)-Math.cos(2*t)/2)
  });
}

function shoot(p,i){
  const b=document.createElement("div");
  b.className="ball";
  b.style.left=p.x+"px";
  b.style.setProperty("--y",p.y+"px");
  area.appendChild(b);

  setTimeout(()=>{
    b.remove();
    const c=document.createElement("div");
    c.className="paint";
    c.style.left=p.x-10+"px";
    c.style.top=p.y-10+"px";
    area.appendChild(c);
    setTimeout(()=>c.classList.add("show"),50);
  },400);
}

/* TIMELINE */
setTimeout(()=>{
  document.body.classList.remove("grayscale");
  showScene(1);
  points.forEach((p,i)=>setTimeout(()=>shoot(p,i),i*120));
  setTimeout(()=>text.style.opacity=1,points.length*120);
},3500);

setTimeout(()=>showScene(2),9000);

document.getElementById("nextBtn").onclick=()=>{
  bgm.play();
  showScene(3);
};
