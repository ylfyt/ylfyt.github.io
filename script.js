function navLinkColl() {
    // var bungkus = document.getElementById("navbarNavAltMarkup");
    // var button = document.getElementById("buttonNavbar");
    // if (bungkus.classList.contains("show"))
    // {
    //         button.classList.add("collapsed");
    //         button.setAttribute("aria-expanded", false);
    //         bungkus.classList.remove("show");
    //         alert("dsad");
    // }

    var bungkuss = document.getElementsByClassName("navbar-collapse");
    var buttons = document.getElementsByClassName("navbar-toggler");
    if (bungkuss[0].classList.contains("show")) {
        for (let i = 0; i < buttons.length; i++) {
            const element = buttons[i];
            element.classList.add("collapsed");
            element.setAttribute("aria-expanded", false);
        }

        for (let i = 0; i < bungkuss.length; i++) {
            const element = bungkuss[i];
            element.classList.remove("show");
        }
    }
}

function getRandomColor() {
    var colors = [
        ["#ff9a9e", "#f6416c"],
        ["#9ef7f1", "#03eeff"],
        ["#fce5c7", "#f7a33b"],
        ["#ffc4fc", "#ff4af6"],
        // ["#f8fab9", "#f9ff45"], // Yellow
    ];
    var idx = Math.floor(Math.random() * colors.length);
    var color = colors[idx];

    return color;
}

function setBackgroundColor() {
    var color = getRandomColor();

    document.getElementById("main").style.backgroundImage = "linear-gradient(to right bottom, " + color[0] + " 10%" + ", " + color[1] + " 100%" + ")";
    // document.getElementById("circle1").style.background = color[1];
    // document.getElementById("circle2").style.background = color[1];
}
