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
// console.log(BMIMark);

// const BMIJohn = massJohn / (heightJohn * heightJohn);
const BMIJohn = massJohn / heightJohn ** 2;
// console.log(BMIJohn);

// Boolean
const markHigherBMI = (BMIMark > BMIJohn);
// console.log(markHigherBMI);

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

/*
// if/else statment
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${
    BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${
    BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
*/

// Challenge #3
// There are two gymnastics teams, Dolphins
// and Koalas. They compete against each other
// 3 times. The winner with the highest average
// score wins a trophy!

// Your tasks:

// 1.Calculate the average score for each team,
// using the test data included below. The average
// score for Dolphins should be assigned to the
// scoreDolphins variable, and the average score
// of Koalas should be assigned to the scoreKoalas
// variable.

// Test data:

// - Data 1: Dolphins scores 96, 108 and 89.
// Koalas scores 88, 91 and 110.

/*
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins);
console.log(scoreKoalas);
*/

// 2. Compare the team's average scores to
// determine the winner of the competition, and
// print to the console:

/*
if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy");
} else {
  console.log("Koalas win the trophy");
}
*/

// "Dolphins win the trophy" if Dolphins win, or

// "Koalas win the trophy" if Koalas win, or

// "Both win the trophy" if their average scores
// are equal.

// 3. Bonus 1: Include a requirement for a minimum
// score of 100. With this rule, a team only wins if
// it has a higher score than the other team, and the
// same time a score of at least 100 points.
// Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉

// - Data Bonus 1: Dolphins scores 97, 112 and 101.
// Koalas scores 109, 95 and 123.

/*
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreDolphins);
console.log(scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy");
} else if (scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy")
} else {
  console.log("No one win");
}
*/

// 4. Bonus 2: Minimum score also applies to a
// draw! So a draw only happens when both teams
// have the same score and both have a score greater
//  or equal 100 points. Otherwise, no team wins the
//  trophy

// - Data Bonus 2: Dolphins scores 97, 112 and 101.
// Koalas scores 109, 95 and 106.

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins);
console.log(scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log("Both win the trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy")
} else {
  console.log("No one wins the trophy");
}
