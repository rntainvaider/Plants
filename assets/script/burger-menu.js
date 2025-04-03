const burgerMenu = document.querySelector(".burger__menu");
const headerMenu = document.querySelector(".header__menu");

burgerMenu.addEventListener("click", () => {
    headerMenu.classList.toggle("burger__active");
});
