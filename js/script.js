// Toggle burger
/* const burger = document.querySelector(".hamburger");

burger.addEventListener("click", () => {
  !burger.classList.contains("is-active")
    ? burger.classList.add("is-active")
    : burger.classList.remove("is-active");
}); */

// Local storage
// const ls = localStorage;
// if (localStorage.length !== 0) {
//   // check active state
// } else {
//   // add active state
// }

setTimeout(() => {
  const allActiveNodes = document.querySelectorAll(
    "div.active:not(div.arrow-icon)"
  );
  for (let i = 0; i < allActiveNodes.length; i++) {
    console.log(allActiveNodes[i]);
  }
}, 4000);

// File manager
const firstNode = document.querySelectorAll(".menu__first-node");
const secondNode = document.querySelectorAll(".menu__second-node");

firstNode.forEach((el) => {
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

secondNode.forEach((el) => {
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

const linkContainer = document.querySelectorAll(".link-container");
for (let i = 0; i < linkContainer.length; i++) {
  linkContainer[i].addEventListener("click", () => {
    !linkContainer[i].classList.contains("active")
      ? linkContainer[i].classList.add("active")
      : linkContainer[i].classList.remove("active");
  });
}
