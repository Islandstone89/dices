
/* SELECTORS */

let themeToggle = document.querySelector(".js-btn");

themeToggle.addEventListener("click", () => {
    if (themeToggle.getAttribute("data-theme" ,"light")) {
        themeToggle.setAttribute("data-theme", "dark")
        console.log("success");
    }

    else {
        themeToggle.setAttribute("data-theme", "light")
        console.log("success again");
    }
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