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
  const A = Number(event.target.elements.numberA.value);
  const B = Number(event.target.elements.numberB.value);

  console.log("A:", A, "B:", B);

  if (event.target.operator.value === "addition") {
    result = add(A, B);
  } else if (event.target.operator.value === "subtraction") {
    result = subtract(A, B);
  } else if (event.target.operator.value === "multiplication") {
    result = multiply(A, B);
  } else {
    result = divide(A, B);
  }

  resultOutput.textContent = result;
});
