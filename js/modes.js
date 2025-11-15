// === Bonus Modes / Challenge Modes ===
// Lightweight mode framework for future expansions

const Modes={
    accuracy:{
        name:"Accuracy Challenge",
        desc:"Try to stop within 100 pixels of the target!",
        active:false,
        start:function(){
            this.active=true;
        },
        end:function(finalCount,target){
            const diff=Math.abs(finalCount-target);
            return diff<=100;
        }
    },

    // Example placeholder for future expansion:
    // speedRage:{ ... },
    // megaBurst:{ ... },
    // timeAttack:{ ... },

    deactivateAll:function(){
        for(const m in this){
            if(typeof this[m]==="object" && this[m].active){
                this[m].active=false;
            }
        }
    }
};

// Export globally
window.Modes=Modes;

