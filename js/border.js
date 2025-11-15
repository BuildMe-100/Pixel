// === Border Animation (Neon Snake Outline) ===
// Draws a glowing line around the viewport then triggers callback()

function border_startAnimation(done){
    const border=document.getElementById("borderLine");
    border.style.display="block";

    const w=window.innerWidth;
    const h=window.innerHeight;
    border.style.position="fixed";
    border.style.left="0px";
    border.style.top="0px";
    border.style.width="0px";
    border.style.height="0px";

    let phase=0;
    let progress=0;

    function step(){
        progress+=22;

        // top line
        if(phase===0){
            border.style.width=progress+"px";
            if(progress>=w){
                progress=0; phase=1;
            }
        }
        // right side
        else if(phase===1){
            border.style.height=progress+"px";
            if(progress>=h){
                progress=0; phase=2;
            }
        }
        // bottom line back to left
        else if(phase===2){
            border.style.width=(w-progress)+"px";
            border.style.left=progress+"px";
            if(progress>=w){
                progress=0; phase=3;
                border.style.left="0px";
            }
        }
        // left side up
        else if(phase===3){
            border.style.height=(h-progress)+"px";
            border.style.top=progress+"px";
            if(progress>=h){
                border.style.top="0px";
                border.style.height=h+"px";

                border.style.display="none";
                done(); // Animation complete — start the game
                return;
            }
        }

        requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}
