/*
CHALLENGE #1

Mark and John are trying to compare their BMI (Body Mass Index),
which is calculated using the formula: BMI = mass / (height * height)
(mass in kg and height in meters).

Your task is to write some code to help them:

1. Store Mark's and John's mass and height in variables called
massMark, he, massJohn and heightJohn.

2. Calculate both their BMIs using the formula, and store
the results in two variables called BMIMark and BMIJohn.

3. Log the value of BMIMark and BMIJohn to the console.

4. BONUS: Create a boolean variable markHigherBMI containing
information about whether Mark has a higher BMI than John.
Log it to the console too

TEST DATA: Marks weighs 78 kg and is 1.69 m tall.
John weighs 92 kg and is 1.95 m tall.
*/

// Storing Mark's and John's mass and height
let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

// Test Data 2
// massMark = 95;
// heightMark = 1.88;
// massJohn = 85;
// heightJohn = 1.76;

// Calculating BMI and logging the value
// const BMIMark = massMark / (heightMark * heightMark);
const BMIMark = massMark / heightMark ** 2;
console.log(BMIMark);

// const BMIJohn = massJohn / (heightJohn * heightJohn);
const BMIJohn = massJohn / heightJohn ** 2;
console.log(BMIJohn);

// Boolean
const markHigherBMI = (BMIMark > BMIJohn);
console.log(markHigherBMI);

// Challenge #2
// Use the BMI example from Challenge #1,
// and the code you already wrote, and improve it.

// Your tasks:

// 1. Print a nice output to the console, saying
// who has the higher BMI. The message is either
// "Mark's BMI is higher than John's!" or "John's BMI is higher
// than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs.
// Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

// if/else statment
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
