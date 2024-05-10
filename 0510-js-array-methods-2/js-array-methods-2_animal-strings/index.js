console.clear();

const animalStrings = [
  "cat",
  "dog",
  "elephant",
  "rabbit",
  "lion",
  "tiger",
  "horse",
  "giraffe",
  "zebra",
  "penguin",
  "polar bear",
  "panda",
  "koala",
  "kangoroo",
  "monkey",
  "sloth",
  "hippo",
  "rhino",
];

const hippoExists = animalStrings.includes("hippo");
console.log("hippoExists: ", hippoExists);

// Hint: You can pass the starting index as second parameter.
const catStartingFromIndexFiveExists = animalStrings.includes("cat", 5);
console.log("catStartingFromIndexFiveExists: ", catStartingFromIndexFiveExists);

// Hint: Besides the array method, check out the string method `startsWith()`.
const firstAnimalStartingWithLetterP = animalStrings.find((animal) =>
  animal.startsWith("p")
);
console.log("firstAnimalStartingWithLetterP: ", firstAnimalStartingWithLetterP);

const indexOfGiraffe = animalStrings.findIndex(
  (animal) => animal === "giraffe"
);
console.log("indexOfGiraffe: ", indexOfGiraffe);

// Note:
// - Sorting strings is slightly more complicated than sorting numbers.
// - You will need if-statements and return values of -1, 1, and 0.
// - Check out MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted

// Hint: There is no need to upper-/lowercase the strings before sorting them.
// Hint: sort() mutates the original array, which is bad.
// That's why we use toSorted()

// Option 1, more simple:
const animalsSortedAlphabetically = animalStrings.toSorted();
console.log("animalsSortedAlphabetically: ", animalsSortedAlphabetically);

//Option 2, with if and return:
const animalsSortedAlphabeticallyWithReturn = animalStrings.toSorted((a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
});
console.log(
  "animalsSortedAlphabeticallyWithReturn: ",
  animalsSortedAlphabeticallyWithReturn
);

// Hint: Guess what? There is a string method called `endsWith()`.
const anyAnimalEndsWithLetterZ = animalStrings.some((animal) =>
  animal.endsWith("z")
);
console.log("anyAnimalEndsWithLetterZ: ", anyAnimalEndsWithLetterZ);

const everyAnimalHasMoreThanTwoLetters = animalStrings.every(
  (animal) => animal.length > 2
);
console.log(
  "everyAnimalHasMoreThanTwoLetters: ",
  everyAnimalHasMoreThanTwoLetters
);

// Hint: There are several ways to go here. Let's focus on two options:
// Option 1: Concatenate all characters with `reduce()` and check for the `length` property of the result.
// Option 2: Use `map()` to create an array with the length values of all strings,
// 				then sum them up with `reduce()` (keyword: method chaining)

//Option 1:
const sumOfAllAnimalCharacters = animalStrings.reduce(
  (accumulator, currentValue) => accumulator + currentValue
).length;
console.log("sumOfAllAnimalCharacters: ", sumOfAllAnimalCharacters);

//Option 2:
const sumOfAllAnimalCharactersOptionTwo = animalStrings
  .map((animal) => animal.length)
  .reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(
  "sumOfAllAnimalCharactersOptionTwo: ",
  sumOfAllAnimalCharactersOptionTwo
);

export {
  hippoExists,
  catStartingFromIndexFiveExists,
  firstAnimalStartingWithLetterP,
  indexOfGiraffe,
  animalsSortedAlphabetically,
  anyAnimalEndsWithLetterZ,
  everyAnimalHasMoreThanTwoLetters,
  sumOfAllAnimalCharacters,
};
