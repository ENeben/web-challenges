console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--

const title = "When you accidentally send a message to the wrong group chat";
const text =
  "I wanted to ask my boot camp fellow students something about JavaScript and accidentally sent it to my grandma. Grandma is confused...";
let numberOfLikes = 5;
const user = "JavaScriptLearner42";
const isReported = false;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--

console.log(title);
console.log(text);
console.log(numberOfLikes);
console.log(user);
console.log(isReported);

numberOfLikes++;
console.log(numberOfLikes);

// --^-- write your code here --^--
