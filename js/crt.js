// === CRT Screen Filter ===
// Adds scanlines + glow + subtle flicker for retro arcade feel

(function(){

const crt=document.getElementById("crt-filter");

// Scanline flicker
function flicker(){
    const intensity = 0.17 + Math.random()*0.05;
    crt.style.opacity = intensity.toFixed(2);
}

// Bloom pulse
function bloom(){
    const strength = 0.015 + Math.random()*0.015;
    crt.style.filter = `blur(${strength}px)`;
}

// Slight RGB shift (very subtle)
function rgbShift(){
    const shift = Math.random()*0.7;
    crt.style.backdropFilter = `contrast(1.03) saturate(1.12)`;
}

setInterval(flicker, 120);
setInterval(bloom, 220);
setInterval(rgbShift, 400);

})();

