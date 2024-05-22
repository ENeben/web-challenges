console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");
const errorElement = document.querySelector(".error");

// OPTION 1, schlechter, weil try-catch schon bei Definition der Funktion eingefügt:

// const operations = {
//   add: (a, b) => a + b,
//   subtract: (a, b) => a - b,
//   multiply: (a, b) => a * b,
//   divide: (a, b) => {
//     try {
//       if (b === 0) {
//         throw new Error("Cannot divide by zero!");
//       }
//       return a / b;
//     } catch (error) {
//       errorElement.innerText = `Unfortunately an error occured. ${error}`;
//     }
//   },
// };

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const firstNumber = Number(event.target.firstNumber.value);
//   const secondNumber = Number(event.target.secondNumber.value);
//   const operation = event.target.operation.value;
//   output.innerText = operations[operation](firstNumber, secondNumber);
// });

// OPTION 2 - besser, weil try-catch bei Aufruf der Funktion eingefügt:

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return a / b;
  },
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);
  const operation = event.target.operation.value;
  try {
    output.innerText = operations[operation](firstNumber, secondNumber);
    errorElement.innerText = "";
    form.reset();
  } catch (error) {
    errorElement.innerText = `Unfortunately an error occured. ${error.message}`;
    form.reset();
  }
});
