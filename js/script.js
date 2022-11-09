// Toggle burger
const burger = document.querySelector(".hamburger");

burger.addEventListener("click", () => {
  !burger.classList.contains("is-active")
    ? burger.classList.add("is-active")
    : burger.classList.remove("is-active");
});
