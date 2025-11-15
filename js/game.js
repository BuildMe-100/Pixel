// === Pixel Count Arcade - Core Engine ===
// Clean + corrected version

let gameRunning = false,
    spawnInterval = 900,
    pixelCount = 0,
    target = 0,
    spawnTimer = null,
    speedMultiplier = 1;

// DOM
const gameArea       = document.getElementById("gameArea"),
      targetBox      = document.getElementById("targetBox"),
      targetNumber   = document.getElementById("targetNumber"),
      finalNumber    = document.getElementById("finalNumber"),
      resultBox      = document.getElementById("resultBox"),
      stopBtn        = document.getElementById("stopBtnArcade"),
      speedBtn       = document.getElementById("speedBtnArcade"),
      hud            = document.getElementById("hud"),
      tenXFlash      = document.getElementById("tenXFlash"),
      startBtn       = document.getElementById("startBtn"),
      resetBtn       = document.getElementById("resetBtn"),
      insertCoin     = document.getElementById("insert-coin"),
      goTime         = document.getElementById("goTime");

// === Reset ===
function resetGame() {
    clearInterval(spawnTimer);
    pixelCount = 0;
    speedMultiplier = 1;
    spawnInterval = 900;
    gameRunning = false;

    finalNumber.classList.add("hidden");
    resultBox.classList.add("hidden");
    stopBtn.classList.add("hidden");
    speedBtn.classList.add("hidden");
    tenXFlash.classList.add("hidden");
    targetBox.classList.add("hidden");

    gameArea.innerHTML = "";
    insertCoin.classList.remove("hidden");
}

resetBtn.addEventListener("click", resetGame);

// === START ===
startBtn.addEventListener("click", () => {
    if (gameRunning) return;

    audio_insertCoin();
    insertCoin.classList.add("hidden");

    target = Math.floor(Math.random() * 3630) + 69;
    targetNumber.textContent = target;

    // Border animation → then game starts
    setTimeout(() => border_startAnimation(() => {
        goTime.classList.remove("hidden");
        setTimeout(() => goTime.classList.add("hidden"), 1800);

        gameRunning = true;
        targetBox.classList.remove("hidden");
        stopBtn.classList.remove("hidden");
        speedBtn.classList.remove("hidden");

        startPixelSpawn();
    }), 200);
});

// === Pixel Spawning ===
function startPixelSpawn() {
    spawnTimer = setInterval(() => {
        pixelCount++;
        pixel_spawn(gameArea);
        if (pixelCount % 12 === 0) audio_tick();
    }, spawnInterval / speedMultiplier);
}

// === STOP BUTTON ===
stopBtn.addEventListener("click", () => {
    if (!gameRunning) return;
    gameRunning = false;
    clearInterval(spawnTimer);

    stopBtn.classList.add("stop-shockwave");
    setTimeout(() => stopBtn.classList.remove("stop-shockwave"), 350);

    audio_stop();
     // HIDE STOP + SPEED BUTTONS
    stopBtn.classList.add("hidden");
    speedBtn.classList.add("hidden");


    // Show final number
    finalNumber.textContent = pixelCount;
    finalNumber.classList.remove("hidden");

    const diff = Math.abs(pixelCount - target);

    const funnyLines = [
        "You were lightyears off!",
        "Nice try, arcade warrior!",
        "Pixel chaos achieved!",
        "Your thumbs have power!",
        "You got this next time!",
        "The pixels fear you!",
        "Respect. That was bold!",
        "Chaotic and beautiful!",
        "Your instincts are wild!",
        "Pixels bow to you!",
        "You're cracked at this!",
        "You are a pixel master!",
        "One day… perfection.",
        "That was spicy!",
        "Brutal. I respect it.",
        "Glorious attempt!",
        "Arcade energy rising!",
        "You're unpredictable!",
        "A true challenger!",
        "You came close…ish!",
        "You're in the zone!",
        "This game LOVES you.",
        "Pixels are terrified.",
        "Legend in progress!",
        "Close enough for glory!",
        "Pixel storm rising!",
        "RNG blesses you!",
        "Confidence is power!",
        "That was WILD!",
        "Your timing is crazy!",
        "This run = heat!",
        "Big gamer energy!",
        "Top-tier chaos!",
        "You almost ascended!",
        "Respectful miss.",
        "Pixel gods smile.",
        "This run goes hard!",
        "Arcade destiny awaits!",
        "Fate was not aligned…",
        "You tapped with spirit!"
    ];

    resultBox.innerHTML =
        `${funnyLines[Math.floor(Math.random() * funnyLines.length)]}<br><br>You were <b>${diff}</b> away.`;
    resultBox.classList.remove("hidden");

    leaderboard_pushScore(pixelCount, target, diff);
    leaderboard_show();
});

// === SPEED UP ===
speedBtn.addEventListener("click", () => {
    if (!gameRunning) return;

    audio_speedup();

    speedMultiplier *= 10;

    tenXFlash.classList.remove("hidden");
    setTimeout(() => tenXFlash.classList.add("hidden"), 800);

    clearInterval(spawnTimer);
    startPixelSpawn();
});

resetGame();
