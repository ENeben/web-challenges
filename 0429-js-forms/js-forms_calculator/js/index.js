console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;
  const A = Number(event.target.numberA.value);
  const B = Number(event.target.numberB.value);

  // --v-- write your code here --v--
  if (event.target.operator.value === "addition") {
    result = add(A, B);
  } else if (event.target.operator.value === "subtraction") {
    result = subtract(A, B);
  } else if (event.target.operator.value === "multiplication") {
    result = multiply(A, B);
  } else {
    result = divide(A, B);
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
