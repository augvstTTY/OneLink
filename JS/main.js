const html=document.documentElement;
const island=document.getElementById('island');
const btn=document.getElementById('themeBtn');

const saved=localStorage.getItem('theme')||
(window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');
html.dataset.theme=saved;

btn.onclick=()=>{
  const dark=html.dataset.theme==='dark';
  html.dataset.theme=dark?'light':'dark';
  localStorage.setItem('theme',dark?'light':'dark');
};

// Dynamic island behavior
let expanded=false,timeout;
const expand=()=>{
  if(expanded)return;
  island.classList.replace('compact','expanded');
  expanded=true;
  clearTimeout(timeout);
};
const compact=()=>{
  if(!expanded)return;
  clearTimeout(timeout);
  timeout=setTimeout(()=>{
    island.classList.replace('expanded','compact');
    expanded=false;
  },3000);
};
island.addEventListener('mouseenter',expand);
island.addEventListener('mouseleave',compact);
island.addEventListener('touchstart',expand);

// Subtle tilt
island.addEventListener('mousemove',e=>{
  const r=island.getBoundingClientRect();
  const x=(e.clientX-r.left)/r.width-.5;
  const y=(e.clientY-r.top)/r.height-.5;
  island.style.transform=`translateX(-50%) rotateY(${x*4}deg) rotateX(${y*-4}deg)`;
});
island.addEventListener('mouseleave',()=>island.style.transform='translateX(-50%)');

setTimeout(()=>{expand();compact();},1000);
