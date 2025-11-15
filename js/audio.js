// === Arcade Audio System ===
// Uses external MP3 files stored in /assets/sfx/

// Preload audio for smoother playback
const SFX = {
    insertCoin: new Audio("assets/sfx/insert-coin.wav"),
    tick:       new Audio("assets/sfx/tick.wav"),
    speed:      new Audio("assets/sfx/speedup.wav"),
    stop:       new Audio("assets/sfx/stop.wav")
};


// Adjust latency + allow overlapping playback
for (const key in SFX) {
    SFX[key].preload = "auto";
    SFX[key].volume = 0.9;
}

// --- PUBLIC AUDIO API ---
function audio_insertCoin(){
    SFX.insertCoin.currentTime = 0;
    SFX.insertCoin.play();
}

function audio_tick(){
    SFX.tick.currentTime = 0;
    SFX.tick.play();
}

function audio_speedup(){
    SFX.speed.currentTime = 0;
    SFX.speed.play();
}

function audio_stop(){
    SFX.stop.currentTime = 0;
    SFX.stop.play();
}

// Export globally
window.audio_insertCoin = audio_insertCoin;
window.audio_tick = audio_tick;
window.audio_speedup = audio_speedup;
window.audio_stop = audio_stop;

