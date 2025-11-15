// === High Score Leaderboard System ===
// Stores top results by accuracy difference

const LB_KEY = "pixelArcadeHighScores";

function leaderboard_load(){
    const raw = localStorage.getItem(LB_KEY);
    if(!raw) return [];
    try {
        return JSON.parse(raw);
    } catch {
        return [];
    }
}

function leaderboard_save(list){
    localStorage.setItem(LB_KEY, JSON.stringify(list));
}

function leaderboard_pushScore(finalCount,target,diff){
    const list = leaderboard_load();

    list.push({
        final: finalCount,
        target: target,
        diff: diff,
        when: Date.now()
    });

    // Sort by BEST accuracy (smallest diff)
    list.sort((a,b)=>a.diff - b.diff);

    // Keep top 10 only
    if(list.length > 10) list.length = 10;

    leaderboard_save(list);
}

function leaderboard_show(){
    const panel=document.getElementById("leaderboardPanel");
    const listEl=document.getElementById("leaderboardList");

    const list = leaderboard_load();

    listEl.innerHTML="";

    if(list.length===0){
        listEl.innerHTML="<li>No scores yet – be the first!</li>";
    } else {
        list.forEach(entry=>{
            const li=document.createElement("li");
            const date=new Date(entry.when).toLocaleString();
            li.textContent=
                `Final: ${entry.final} | Target: ${entry.target} | Diff: ${entry.diff}  (${date})`;
            listEl.appendChild(li);
        });
    }

    panel.style.display="flex";
}

document.getElementById("closeLeaderboard").addEventListener("click",()=>{
    document.getElementById("leaderboardPanel").style.display="none";
});

// Export
window.leaderboard_pushScore=leaderboard_pushScore;
window.leaderboard_show=leaderboard_show;

