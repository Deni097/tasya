// =============================
// PERSONALISASI
// =============================
const whatsappNumber = "6281998505353"; // GANTI nomor WA kamu
const whatsappText = "Yes... I'm yours ❤️";
// =============================

let page=1;

function go(n){
  document.querySelectorAll(".screen").forEach(x=>x.classList.remove("active"));
  document.getElementById("s"+n).classList.add("active");
  page=n;
  document.getElementById("counter").textContent=String(n).padStart(2,"0")+" / 05";
  document.getElementById("bar").style.width=(n/5*100)+"%";
}

function yes(){
  document.querySelectorAll(".screen").forEach(x=>x.classList.remove("active"));
  document.getElementById("yes").classList.add("active");
  document.getElementById("counter").textContent="05 / 05";
  document.getElementById("bar").style.width="100%";
  document.getElementById("wa").href="https://wa.me/"+whatsappNumber+"?text="+encodeURIComponent(whatsappText);
  celebrate();
}

function nope(){
  const b=document.getElementById("no");
  b.style.position="fixed";
  b.style.left=(8+Math.random()*76)+"vw";
  b.style.top=(18+Math.random()*64)+"vh";
  b.textContent=["Yakin? 🥺","Pikir lagi...","Masa nggak?","Hehe 😭","Coba klik yang satunya"][Math.floor(Math.random()*5)];
}

function celebrate(){
  for(let i=0;i<55;i++){
    const e=document.createElement("i");
    e.style.cssText=`position:fixed;z-index:20;left:50%;top:52%;width:7px;height:7px;border-radius:50%;background:hsl(${Math.random()*360} 80% 72%);pointer-events:none`;
    document.body.appendChild(e);
    const x=(Math.random()-.5)*innerWidth*1.25,y=(Math.random()-.6)*innerHeight*1.15;
    e.animate([{transform:"translate(-50%,-50%) scale(1)",opacity:1},{transform:`translate(${x}px,${y}px) rotate(${Math.random()*720}deg)`,opacity:0}],{duration:900+Math.random()*1000,easing:"cubic-bezier(.2,.7,.2,1)"}).onfinish=()=>e.remove();
  }
}
