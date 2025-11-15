// === UI Controller ===
// Handles dynamic placement for STOP, SPEED UP, 10X flash, HUD priority

(function(){

const stopBtn=document.getElementById("stopBtnArcade");
const speedBtn=document.getElementById("speedBtnArcade");
const tenX=document.getElementById("tenXFlash");
const hud=document.getElementById("hud");

/* ========== POSITION ELEMENTS CENTRALLY ========== */
function positionArcadeButtons(){
    const cx=window.innerWidth/2;
    const cy=window.innerHeight/2;

    // STOP button centered
    stopBtn.style.position="fixed";
    stopBtn.style.left=cx+"px";
    stopBtn.style.top=cy+"px";
    stopBtn.style.transform="translate(-50%, -50%)";

    // SPEED UP positioned below STOP
    speedBtn.style.position="fixed";
    speedBtn.style.left=cx+"px";
    speedBtn.style.top=(cy+130)+"px";
    speedBtn.style.transform="translate(-50%, -50%)";

    // 10X flash sits under SPEED UP
    tenX.style.position="fixed";
    tenX.style.left=cx+"px";
    tenX.style.top=(cy+230)+"px";
    tenX.style.transform="translate(-50%, -50%)";
}

/* ========== KEEP HUD ALWAYS ON TOP ========== */
function promoteHUD(){
    hud.style.zIndex="3000";
    document.getElementById("title").style.zIndex="3000";
}

/* ========== EVENT LISTENERS ========== */
window.addEventListener("resize",positionArcadeButtons);

/* ========== INITIALIZE ========== */
positionArcadeButtons();
promoteHUD();

})();

