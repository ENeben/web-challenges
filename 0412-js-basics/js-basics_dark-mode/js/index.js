console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const buttonDark = document.querySelector('[data-js="dark-mode-button"]');
const buttonLight = document.querySelector('[data-js="light-mode-button"]');
const buttonToggle = document.querySelector('[data-js="toggle-button"]');

buttonDark.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

buttonLight.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

buttonToggle.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
