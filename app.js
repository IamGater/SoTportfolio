const burger = document.querySelector(".burger");
const list = document.querySelector(".header__list");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  list.classList.toggle("active");
});

const headerLinks = document.querySelectorAll(".header__link");

headerLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    list.classList.remove("active");
  });
});
