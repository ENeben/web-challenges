console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  const ageBadnessSum =
    Number(formElements.age.value) + Number(formElements.badness.value);

  console.log(
    "The age-badness-sum of " +
      formElements.firstName.value +
      " is " +
      ageBadnessSum
  );

  event.target.reset();
  event.target.elements.firstName.focus();
});
