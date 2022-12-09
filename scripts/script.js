// JavaScript Document
console.log("hi");

const deMenuButton = document.querySelector("header button");
const deNav = document.querySelector("header nav");

deMenuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
	deNav.classList.toggle("open");
}

