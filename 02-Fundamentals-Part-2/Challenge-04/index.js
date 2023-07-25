/*
// Challenge #1

// Back to the two gymnastics teams, the Dolphins
// and the Koalas! There is a new gymnastics discipline,
// which works differently.
// Each team competes 3 times, and then the average of
// the 3 scores is calculated (so one average score per
// team).
// A team only wins if it has at least double the average
// score of the other team. Otherwise, no team wins!

// Your tasks:

// 1. Create an arrow function 'calcAverage' to
// calculate the average of 3 scores

// 2. Use the function to calculate the average for
// both teams

// 3. Createa function 'checkWinner' that takes the
// average score of each team as parameters
// ('avgDolhins' and 'avgKoalas'), and then logs the
// winner to the console, together with the victory
// points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"

// 4. Use the 'checkWinner' function to determine the
// winner for both Data 1 and Data 2

// 5. Ignore draws this time

// Test Data:

// Data 1: Dolphins score 44, 23 and 71.
// Koalas score 65, 54 and 49

// Data 2: Dolphins score 85, 54 and 41.
// Koalas score 23, 34 and 27

// Arrow function
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// console.log(calcAverage(3, 3, 9));

// Data 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);


const checkWinner = function (avgDolphins, avgKoalas) {

  if (avgDolphins > avgKoalas && (avgDolphins >= 2 * avgKoalas)) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas > avgDolphins && (avgKoalas >= 2 * avgDolphins)) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No ones win...');
  }
}

checkWinner(scoreDolphins, scoreKoalas);

// Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

/*
// Challenge #2
// Steven is still building his tip calculator,
// using the same rules as before: Tip 15% of the bill
// if the bill value is between 50 and 300, and if the
// value is different, the tip is 20%.

// Your Tasks:

// 1. Write a function 'calcTip' that takes any bill value as
// an input and returns the corresponding tip, calculated
// based on the rules above (you can check out the code
// from first tip calculator challenge if you need to).
// Use the function type you like the most. Test the
// function using a bill value of 100

// 2. And now let's use arrays! So create an array 'bills'
// containing the test data below

// 3. Create an array 'tips' containing the tip value for
// each bill, calculated from the function you created
// before

// 4. BONUS: Create an array 'total' containing the total
// values, so the bill + tip

// Test data: 125, 555, 44

// const calcTip = function (bill) {
//   if (bill > 50 && bill <= 300) {
//     return (bill * 0.15);
//   } else {
//     return (bill * 0.2);
//   }
// }

// use of ternary operator instead of if/else statement
const calcTip = function (bill) {
  return bill > 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

console.log(calcTip(100));

const bills = [125, 555, 44];

const tips = [];
console.log(tips);

tips.push((calcTip(bills[0])), calcTip(bills[1]), calcTip(bills[2]));
console.log(tips);

const total = [];
total.push((bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2]));
console.log(total);
*/

/*
// Challenge #3

// Let's go back to Mark and John comparing their BMIs!
// This time, let's use objects to implement the
// calculations!
// Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

// You tasks:

// 1. For each of them, create an object with properties
// for their fullname, mass, and height
// (Mark Miller and John Smith)

// 2. Create a 'calcBMI' method on each object to
// calculate the BMI (the same method on both objects).
// Store the BMI value to a property, and also return it
// from the method

// 3. Log to the console who has the higher BMI, together
// with the full name and the respective BMI.
// Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

// Test data: Marks weights 78 kg and is 1.69 m tall.
// John weights 92 kg and is 1.95 m tall.

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    // console.log(this);
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

mark.calcBMI();
console.log(mark.bmi);

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    // console.log(this);
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

john.calcBMI();
console.log(john.bmi);

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
}
*/

// Challenge #4

// Let's improve Steven's tip calculator even more,
// this time using loops!

// Your tasks:

// 1. Create an array 'bills' containing all 10 test
// bill values
// 2. Create empty arrays for the tips and the
// totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before
// (no need to repeat) to calculate tips and total values
// (bill + tip) for every bill value in the bills array.
// Use a for loop to perform the 10 calculations!

// Test data:
// 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

// Hints: Call ‘calcTip ‘in the loop and use the push
// method to add values to the tips and totals arrays 😉

// Bonus:
// 4. Write a function 'calcAverage' which takes an array
// called 'arr' as an argument. This function calculates
// the average of all numbers in the given array. This is
// a difficult challenge (we haven't done this before)!
// Here is how to solve it:

// 4.1 First, you will need to add up all values in
// the array. To do the addition, start by creating a
// variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the
// current value to the 'sum' variable. This way, by
// the end of the loop, you have all values added
// together

// 4.2 To calculate the average, divide the sum you
// calculated before by the length of the array
// (because that's the number of elements)

// 4.3 Call the function with the 'totals' array

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill > 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  // console.log(tip);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

// BONUS
let sum = 0;
const calcAverage = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  // console.log(sum);
  return sum / arr.length; // when you return a function, you have to log it
}
// console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));