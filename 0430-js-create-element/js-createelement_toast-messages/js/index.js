console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  const newToast = document.createElement("li");
  newToast.classList.add("toast-container__message");
  // newToast.textContent = "A cheer for all of us! :-)";
  //// trying things out ////
  const toastMessages = [
    "A cheer for all of us!",
    "Happy coding!",
    "Have a nice day.",
    "What the array",
    "Jippie :-)",
  ];
  const randomItem = Math.floor(Math.random() * toastMessages.length);
  newToast.textContent = toastMessages[randomItem];
  //////////////////////////////////
  toastContainer.append(newToast);
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = `<li class="toast-container__message">I'm a toast message.</li>`;
});
