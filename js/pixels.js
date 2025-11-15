// === Pixel Engine ===
// Spawns glowing neon pixel diamonds across the game area

function pixel_spawn(gameArea){
    const px=document.createElement("div");
    px.className="pixel-dot";

    const w=window.innerWidth;
    const h=window.innerHeight;

    const x=Math.random()*w;
    const y=Math.random()*h;

    px.style.left=x+"px";
    px.style.top=y+"px";

    // neon colors
    const colors=["#00ffea","#ff00c8","#fff700","#00ff88","#ffaa00","#66aaff"];
    const c=colors[Math.floor(Math.random()*colors.length)];

    px.style.background=c;
    px.style.boxShadow=`0 0 12px ${c},0 0 28px ${c}`;

    gameArea.appendChild(px);

    // smooth fade
    setTimeout(()=>px.style.opacity="1",20);

    // cleanup to avoid lag
    setTimeout(()=>px.remove(),6000);
}

// base style injected programmatically
(function(){
    const s=document.createElement("style");
    s.innerHTML=`
        .pixel-dot{
            position:fixed;
            width:14px;
            height:14px;
            opacity:0;
            transform:rotate(45deg);
            transition:opacity 0.4s ease-out;
            z-index:50;
        }
    `;
    document.head.appendChild(s);
})();

