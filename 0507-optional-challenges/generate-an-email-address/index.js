console.clear();

const generateEmail = (person) =>
  `${person.firstName.toLowerCase()}.${person.lastName.toLowerCase()}@example.com`;

const getUserFromEmail = (email) => {
  if (!email.includes("@")) {
    return null;
  } else {
    const splittedEmail = email.split("@");
    if (!splittedEmail[0].includes(".")) {
      return null;
    } else {
      const splittedName = splittedEmail[0].split(".");
      const firstName =
        splittedName[0].charAt(0).toUpperCase() + splittedName[0].slice(1);
      const lastName =
        splittedName[1].charAt(0).toUpperCase() + splittedName[1].slice(1);
      const user = { firstName: firstName, lastName: lastName };
      return user;
    }
  }
};

const emailForm = document.querySelector('[data-js="email-generator-form"]');
const userForm = document.querySelector('[data-js="user-finder-form"]');
const generatedEmail = document.querySelector('[data-js="generated-email"]');
const guessedUser = document.querySelector('[data-js="guessed-user"]');
const emailResult = document.querySelector('[data-js="email-result"]');
const userResult = document.querySelector('[data-js="user-result"]');

emailForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameObject = {
    firstName: event.target.elements.firstName.value,
    lastName: event.target.elements.lastName.value,
  };
  generatedEmail.textContent = generateEmail(nameObject);
  emailResult.classList.add("visible");
});

userForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInput = event.target.elements.email.value;
  console.log("email.value: ", event.target.elements.email.value);
  const userObject = getUserFromEmail(emailInput);
  guessedUser.textContent = userObject.firstName + " " + userObject.lastName;
  userResult.classList.add("visible");
});
