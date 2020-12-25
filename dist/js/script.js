

let burgerBtn = document.querySelector(".header-burger"),
burgerAction = document.querySelector(".header-burger-inner"),
headerLink  = document.querySelectorAll(".header-link");

let menu = document.querySelector(".header-menu");

burgerBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    burgerAction.classList.toggle("active");
});


headerLink.forEach((el) => el.addEventListener("click", () => {
    headerLink.forEach((el) => el.classList.remove("active"));
    el.classList.add("active");
}));



