herelet coins = 0;
let miss = 0;
let time = 180;

function updateUI(){
document.getElementById("coins").innerText = coins;
document.getElementById("miss").innerText = miss;
document.getElementById("time").innerText = time;
}

function spawnFish(){
let fish = document.createElement("div");
fish.className = "fish";

fish.style.top = Math.random()*80 + "%";
fish.style.left = "100%";

fish.onclick = ()=>{
coins++;
updateUI();
fish.remove();
};

document.getElementById("gameArea").appendChild(fish);

let move = setInterval(()=>{
fish.style.left = (parseFloat(fish.style.left)-2)+"%";

if(parseFloat(fish.style.left) < -10){
fish.remove();
miss++;
updateUI();

if(miss >= 3){
alert("Game Over! Score: " + coins);
location.href = "index.html";
}

clearInterval(move);
}
},100);
}

setInterval(spawnFish, 1200);

setInterval(()=>{
time--;
updateUI();

if(time <= 0){
alert("Time Up! Score: " + coins);
location.href = "index.html";
}
},1000);
