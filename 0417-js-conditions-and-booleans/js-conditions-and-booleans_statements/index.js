console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (SUPER_SECRET_PASSWORD === receivedPassword) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;

if (number % 2) {
  console.log("odd number");
} else {
  console.log("even number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;

if (numberOfHotdogs < 5) {
  console.log(numberOfHotdogs * 2 + " euros");
} else if (numberOfHotdogs < 100) {
  console.log(numberOfHotdogs * 1.5 + " euros");
} else if (numberOfHotdogs < 1000000) {
  console.log(numberOfHotdogs * 1 + " euros");
} else {
  console.log(numberOfHotdogs * 0.1 + " euros");
}

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + (userName === "Andrea" ? "Coach" : userName) + "!";

console.log(greeting);
