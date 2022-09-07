// DECLARATIONS

const hamburger =
	document.querySelector("#hamburger");

const menu = document.querySelector("#menu");
const hLinks = document.querySelectorAll("#menu");

hamburger.addEventListener("click", () => {
	menu.classList.toggle("hidden");
	hamburger.classList.toggle("bg-white");
});

hLinks.forEach((link) => {
	link.addEventListener("click", () => {
		menu.classList.toggle("hidden");
		hamburger.classList.toggle("bg-white");
	});
});
