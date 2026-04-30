herelet coins = 0;
let miss = 0;
let time = 180;

document.getElementById("coins").innerText = coins;

// spawn fish
function spawnFish(){
    let fish = document.createElement("div");
    fish.className = "fish";

    fish.style.top = Math.random()*80 + "%";
    fish.style.left = "100%";

    fish.onclick = ()=>{
        coins++;
        document.getElementById("coins").innerText = coins;
        fish.remove();
    };

    document.getElementById("gameArea").appendChild(fish);

    let move = setInterval(()=>{
        fish.style.left = (parseFloat(fish.style.left)-2)+"%";

        if(parseFloat(fish.style.left) < -10){
            fish.remove();
            miss++;
            document.getElementById("miss").innerText = miss;

            if(miss >= 3){
                alert("Game Over!");
                location.href = "index.html";
            }

            clearInterval(move);
        }
    },100);
}

setInterval(spawnFish, 1200);

// timer
setInterval(()=>{
    time--;
    document.getElementById("time").innerText = time;

    if(time <= 0){
        alert("Round Finished!");
        location.href = "index.html";
    }
},1000);
