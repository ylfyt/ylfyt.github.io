function navLinkColl() {
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
