here// Save coins locally
function saveCoins(value){
    localStorage.setItem("coins", value);
}

function getCoins(){
    return localStorage.getItem("coins") || 0;
}

// example usage
let coins = getCoins();
