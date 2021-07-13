/*const containerSettings = document.querySelector(".container-settings");
buttonProfile.addEventListener("click", function () {
	containerProfile.classList.add("open");
	containerSite2.classList.remove("open");
});
let imgId = ["courir", "kith", "solebox", "supreme", "zalando"];zz&
document.getElementById("day").innerHTML = day;
for (i = 0; i < imgId.length; i++) {}
*/

const button_open = document.getElementById("button_open");
const button_cancel = document.getElementById("button_cancel");
const nav_White = document.querySelector(".bgWhite");
const mess_left = document.querySelector(".mess_left");
const mess_right = document.querySelector(".mess_right");
const container_home = document.querySelector(".container_home");
const body = document.querySelector("body");

button_open.addEventListener("click", () => {
	nav_White.classList.add("open");
	mess_left.classList.add("left_Open");
	mess_right.classList.add("right_Open");
	container_home.style.backgroundColor = "#f75d6e";
	body.style.backgroundColor = "#f4354a";
});

button_cancel.addEventListener("click", () => {
	nav_White.classList.remove("open");
	mess_left.classList.remove("left_Open");
	mess_right.classList.remove("right_Open");
	container_home.style.backgroundColor = "#36bbf7";
	body.style.backgroundColor = "#04a8f4";
});

/*************tilt js************ */
VanillaTilt.init(document.querySelectorAll(".card"), {
	max: 25,
	speed: 400,
});
