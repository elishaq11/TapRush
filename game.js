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
let coins = 0;
let miss = 0;
let time = 180;

function updateUI(){
document.getElementById("coins").innerText = coins;
document.getElementById("miss").innerText = miss;
document.getElementById("time").innerText = time;
}

// 🎵 simple sound
function popSound(){
let ctx = new (window.AudioContext || window.webkitAudioContext)();
let osc = ctx.createOscillator();
osc.frequency.value = 500;
osc.connect(ctx.destination);
osc.start();
setTimeout(()=>osc.stop(),80);
}

// 🐟 spawn fish (NORMAL + GOLD)
function spawnFish(){

let fish = document.createElement("div");

// 20% chance gold fish
let isGold = Math.random() < 0.2;

fish.className = isGold ? "fish gold" : "fish";

fish.style.top = Math.random()*80 + "%";
fish.style.left = "100%";

fish.onclick = ()=>{
popSound();

if(isGold){
coins += 5;
fish.style.background = "orange";
}else{
coins += 1;
}

updateUI();
fish.remove();
};

document.getElementById("gameArea").appendChild(fish);

// movement
let move = setInterval(()=>{

fish.style.left = (parseFloat(fish.style.left)-2.5)+"%";

if(parseFloat(fish.style.left) < -10){
fish.remove();
miss++;
updateUI();

if(miss >= 3){
alert("💀 Game Over! Score: " + coins);
localStorage.setItem("coins", coins);
location.href = "index.html";
}

clearInterval(move);
}
},50);
}

setInterval(spawnFish, 900);

// ⏱ timer
setInterval(()=>{
time--;
updateUI();

if(time <= 0){
alert("⏱ Time Up! Score: " + coins);
localStorage.setItem("coins", coins);
location.href = "index.html";
}
},1000);
