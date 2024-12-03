
/* SELECTORS */

let themeToggle = document.querySelector(".js-btn1");
let themeToggle2 = document.querySelector(".js-btn2");

/* themeToggle.addEventListener("click", () => {
    if (themeToggle.getAttribute("data-theme" ,"light")) {
        themeToggle.setAttribute("data-theme", "dark")
        console.log("success");
    }

    else if (themeToggle.getAttribute("data-theme" ,"dark")) {
        themeToggle.setAttribute("data-theme", "light")
        console.log("success again");
    }
}) */

themeToggle.addEventListener("click", () => {
    themeToggle.setAttribute("data-theme", "dark")
})


themeToggle2.addEventListener("click", () => {
    themeToggle2.setAttribute("data-theme", "light")
})





/* 
function changeTheme () {
    if (themeToggle.getAttribute("data-theme" ,"light")) {
        themeToggle.setAttribute("data-theme", "dark")
        console.log("success");
    }

    else {
        themeToggle.setAttribute("data-theme", "light")
        console.log("success again");
    }
}



themeToggle.addEventListener("click", changeTheme); */