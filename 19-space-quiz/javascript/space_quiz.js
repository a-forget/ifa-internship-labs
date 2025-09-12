/* 
 Aaron
 Lab 19
 September 10, 2025
*/

alert("Welcome to our Space Quiz!");

// Question 3-1
let response1 = prompt("Is the Sun a star? yes/no");
response1 = response1.toLowerCase();

if (response1 == "yes") {
  alert("'" + response1 + "' is correct!");
  console.log(
    "Q1: That's one small step for a quiz taker, one giant leap for knowledge!"
  );
} else if (response1 == "no") {
  alert("'" + response1 + "' is incorrect!");
  console.log(
    "Q1: The user has answered incorrectly: '" +
      response1 +
      "'. \n The correct answer is 'yes'."
  );
} else {
  alert("'" + response1 + "' is an invalid answer.");
  console.log("Q1: The user entered an invalid answer: '" + response1 + "'.");
}

// Second if statement:
// if (response1 != "yes") {
//   alert("'" + response1 + "' is incorrect!");
//   console.log(
//     "Q1: The user has answered incorrectly: '" +
//       response1 +
//       "'. \n The correct answer is 'yes'."
//   );
// }

// Question 3-2
let response2 = prompt(
  "Which planet is known as the 'Red Planet'? (Mars or Jupiter)"
);

response2 = response2.toLowerCase();

if (response2 == "mars") {
  alert("'" + response2 + "' is correct!");
  console.log("Q2: The user has correctly answered '" + response2 + "'.");
} else if (response2 == "jupiter") {
  alert("'" + response2 + "' is incorrect!");
  console.log(
    "Q2: The user has answered incorrectly: '" +
      response2 +
      "'. \n The correct answer is 'Mars'."
  );
} else {
  alert("'" + response2 + "' is an invalid answer.");
  console.log("Q2: The user entered an invalid answer: '" + response2 + "'.");
}

// Question 3.3
let response3 = prompt(
  "What is the largest planet in our solar system? (Jupiter, Saturn, Uranus, Neptune)."
);

response3 = response3.toLowerCase();

if (response3 == "jupiter") {
  alert("'" + response3 + "' is correct!");
  console.log("Q3: The user has correctly answered '" + response3 + "'.");
} else if (
  response3 == "saturn" ||
  response3 == "uranus" ||
  response3 == "neptune"
) {
  alert("'" + response3 + "' is incorrect!");
  console.log(
    "Q3: The user has answered incorrectly: '" +
      response3 +
      "'. \n The correct answer is 'Jupiter'."
  );
} else {
  alert("'" + response3 + "' is an invalid answer.");
  console.log("Q3: The user entered an invalid answer: '" + response3 + "'.");
}

// Question 3.4
let response4 = prompt("How many planets are in our solar system?");

response4 = response4.toLowerCase();

// Extra:
// Desired behaviour:
// If user enters correct answer -> correct!
// If user enters incorrect number -> incorrect!
// If user enters anything else -> invalid answer!

// Help from Hans starts here
let value;
if (response4 == "true" || response4 == "false") {
  value = response4 === "true";
  console.log(value + " is a boolean!");
} else if (!isNaN(response4)) {
  value = Number(response4);
  console.log(value + " is a number!");
} else {
  value = response4;
  console.log(response4 + " is not a number or boolean!");
}
// Still needs to check for "null"
// Help from Hans ends here

if (value == 8) {
  alert("'" + value + "' is correct!");
  console.log("Q4: The user has correctly answered '" + value + "'.");
} else if (typeof value === "number") {
  alert("'" + value + "' is the wrong number!");
  console.log(
    "Q4: The user has answered incorrectly: '" +
      value +
      "'. \n The correct answer is '8'."
  );
} else {
  alert("'" + value + "' is an invalid answer.");
  console.log("Q4: The user entered an invalid answer: '" + value + "'.");
}

// Question 3.5
let response5 = prompt("True or False: The Earth is flat.");

response5 = response5.toLowerCase();

if (response5 == "true") {
  alert("'" + response5 + "' is correct!");
  console.log("Q5: The user has correctly answered '" + response5 + "'.");
} else if (response5 == "false") {
  alert("'" + response5 + "' is incorrect!");
  console.log(
    "Q5: The user has answered incorrectly: '" +
      response5 +
      "'. \n The correct answer is 'True'."
  );
} else {
  alert("'" + response5 + "' is an invalid answer.");
  console.log("Q5: The user entered an invalid answer: '" + response5 + "'.");
}
