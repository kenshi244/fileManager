// Toggle burger
const burger = document.querySelector(".hamburger");

burger.addEventListener("click", () => {
  !burger.classList.contains("is-active")
    ? burger.classList.add("is-active")
    : burger.classList.remove("is-active");
});

// File manager
const firstLevel = document.querySelectorAll(".menu__first-level");
const secondLevel = document.querySelectorAll(".menu__second-level");

firstLevel.forEach((el) => {
  el.querySelector(".menu__item > div").addEventListener("click", (e) => {
    if (
      !e.target
        .closest(".menu__item")
        .querySelectorAll("div")[4]
        .classList.contains("active")
    ) {
      e.target
        .closest(".menu__item")
        .querySelectorAll("div")[4]
        .classList.add("active");
      e.target
        .closest(".menu__item")
        .querySelector(".arrow-icon")
        .classList.add("active");
    } else {
      e.target
        .closest(".menu__item")
        .querySelectorAll("div")[4]
        .classList.remove("active");
      e.target
        .closest(".menu__item")
        .querySelector(".arrow-icon")
        .classList.remove("active");
    }
  });
});

secondLevel.forEach((el) => {
  el.querySelectorAll(".menu__item > div").forEach((div) => {
    div.addEventListener("click", (e) => {
      if (
        !e.target
          .closest(".menu__item")
          .querySelectorAll("div")[4]
          .classList.contains("active")
      ) {
        e.target
          .closest(".menu__item")
          .querySelectorAll("div")[4]
          .classList.add("active");
        e.target
          .closest(".menu__item")
          .querySelector(".arrow-icon")
          .classList.add("active");
      } else {
        e.target
          .closest(".menu__item")
          .querySelectorAll("div")[4]
          .classList.remove("active");
        e.target
          .closest(".menu__item")
          .querySelector(".arrow-icon")
          .classList.remove("active");
      }
    });
  });
});
