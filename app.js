/*
const $ = document.querySelector("");
*/
const $game = document.querySelector("#theGame");
const $start = document.querySelector("#startbtn");
const $h2 = document.querySelector("h2");

let gameOn = false;

let cols = 100;
document.documentElement.style.setProperty("--game-cols", 100);
let rows = 40;
document.documentElement.style.setProperty("--game-rows", 40);
let width = parseInt($game.offsetWidth);
//                                                               to fix
//                                                                 ||     
//                                                                 \/    
document.documentElement.style.setProperty("--game-cell-size", "13.43px");

for (let i = 0; i < rows * cols; i++) {
    const div = document.createElement("div");
    const div2 = document.createElement("div");
    div.classList.add("pixel");
    if (Math.round(Math.random() * 3) == 0) {
        div.classList.add("on");
    }
    div.appendChild(div2);
    $game.appendChild(div);
}


document.addEventListener("DOMContentLoaded", () => {
    width = window.innerWidth;
    console.log("js on");
    console.log(width);
});

$start.addEventListener("click", () => {
    if (gameOn) {
        $h2.textContent = "START";
        gameOn = false;
    } else {
        $h2.textContent = "STOP/";
        gameOn = true;
    }
});