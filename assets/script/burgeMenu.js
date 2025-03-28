const burgerMenu = document.querySelector(".burger__menu");
const headerMenu = document.querySelector(".header__list");

burgerMenu.addEventListener("click", () => {
    headerMenu.classList.toggle("header__menu-checked");
});
