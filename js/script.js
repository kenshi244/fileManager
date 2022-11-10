// Toggle burger
const burger = document.querySelector(".hamburger");

burger.addEventListener("click", () => {
  !burger.classList.contains("is-active")
    ? burger.classList.add("is-active")
    : burger.classList.remove("is-active");
});

// File manager
const menu = document.querySelector(".menu");
const firstLevel = menu.querySelectorAll(".menu__first-level");
const secondLevel = menu.querySelectorAll(".menu__second-level");
const thirdLevel = menu.querySelectorAll(".menu__third-level");
const fourthLevel = menu.querySelectorAll(".menu__fourth-level");

firstLevel.forEach((el) => {
  el.querySelector("li div").addEventListener("click", (e) => {
    !e.target.closest("li").querySelector("ul").classList.contains("active")
      ? e.target.closest("li").querySelector("ul").classList.add("active")
      : e.target.closest("li").querySelector("ul").classList.remove("active");
  });
});

secondLevel.forEach((el) => {
  el.querySelectorAll("li div").forEach((div) => {
    div.addEventListener("click", (e) => {
      !e.target.closest("li").querySelector("ul").classList.contains("active")
        ? e.target.closest("li").querySelector("ul").classList.add("active")
        : e.target.closest("li").querySelector("ul").classList.remove("active");
    });
  });
});
