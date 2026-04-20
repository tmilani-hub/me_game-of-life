/*
const $ = document.querySelector("");
*/
const $game = document.querySelector("#theGame");
const $start = document.querySelector("#startbtn");
const $h2 = document.querySelector("h2");
const $speed = document.querySelector("#speed");
const $speedlog = document.querySelector("#speedlog");
const $zoom = document.querySelector("#zoom");
const $zoomlog = document.querySelector("#zoomlog");

let gameOn = false;

let cols = 80;
document.documentElement.style.setProperty("--game-cols", 80);
let rows = 30;
document.documentElement.style.setProperty("--game-rows", 30);
let width = parseInt($game.offsetWidth);
let cellsize = width / cols - 1;

let zoom = parseInt($zoom.value);
let probaset = 4;

let thegame = [];

const resizeInter = setInterval(resize, 2500);

document.documentElement.style.setProperty("--game-cell-size", cellsize + "px");

for (let i = 0; i < rows * cols; i++) {
	let cell = createCell()[0];
	$game.appendChild(cell);
}

document.addEventListener("DOMContentLoaded", () => {
	width = window.innerWidth;
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

$speed.addEventListener("input", () => {
	$speedlog.textContent = $speed.value;
});

$zoom.addEventListener("input", () => {
	$zoomlog.textContent = $zoom.value;
	zoom = parseInt($zoom.value);
});

function createCell() {
	const div = document.createElement("div");
	const div2 = document.createElement("div");

	div.classList.add("pixel");

	let islife = Math.floor(Math.random() * probaset) == 0 ? true : false;
	islife ? div.classList.add("on") : div.classList.add("off");

	div.appendChild(div2);

	div.addEventListener("click", () => {
		if (islife == true) {
			div.classList.remove("on");
			div.classList.add("off");
			islife = false;
		} else {
			div.classList.remove("off");
			div.classList.add("on");
			islife = true;
		}
	});

	return [div, islife == 0 ? true : false];
}

function resize() {
	width = parseInt($game.offsetWidth);
	cellsize = Math.floor(width / cols - 2);
	cellsize *= zoom;
	document.documentElement.style.setProperty(
		"--game-cell-size",
		cellsize + "px",
	);

}
