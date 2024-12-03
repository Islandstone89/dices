
let body = document.querySelector("body")
let themeToggle = document.querySelector(".js-btn");

function switchTheme() {
    body.classList.toggle("dark");
}

themeToggle.addEventListener("click", switchTheme);