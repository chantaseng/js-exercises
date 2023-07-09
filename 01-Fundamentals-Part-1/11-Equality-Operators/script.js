/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Matilda';

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415

let myFirstJob = 'Welder';
let myCurrentJob = 'Programmer';

console.log(myCurrentJob);
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!'
console.log(typeof javascriptIsFun);
// console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1994;
console.log(typeof year);

console.log(typeof null);
*/

/*
let age = 28;
age = 29;

const birthYear = 1994;
// birthYear = 1993;

// const job;

var job = 'programmer';
// console.log(job);

job = 'teacher';
// console.log(job);

lastName = 'Chan';
console.log(lastName);
*/

/*
// Math operators
const now = 2037;
const ageWill = now - 1994;
const ageKhaliun = now - 2018;
console.log(ageWill, ageKhaliun);

console.log(ageWill * 2, ageWill / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3; 2 * 2 * 2

const firstName = "William";
const lastName = "Chan";
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageWill > ageKhaliun); // >, <, >=, <=
console.log(ageKhaliun >= 18);

const isFullAge = ageKhaliun >= 18;

console.log(now - 1994 > now - 2018);
*/

/*
const now = 2037;
const ageWill = now - 1994;
const ageKhaliun = now - 2018;

console.log(now - 1994 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 -5; // x = y = 10 so x = 10
console.log(x, y);

const averageAge = ageWill + ageKhaliun / 2;
console.log(ageWill, ageKhaliun, averageAge);
*/

/*
const firstName = 'William';
const job = 'Programmer';
const birthYear = 1994;
const year = 2037

const william = "I'm " + firstName + ', a ' + (year - birthYear) +
' years old ' + job + '!';
console.log(william);

const williamNew = `I'm ${firstName}, a ${year -
  birthYear} years old ${job}!`;
console.log(williamNew);

console.log(`Hello, just trying things out...`)

// before ES6 and back ticks
console.log('String with \n\
multiple \n\
lines');

// Template literals!!!
console.log(`String with
multiple
lines`);
*/

// If/Else Statement
/*
const age = 15;

if (age >= 18) {
  console.log('Will can start his driving license!');
} else {
  const yearsLeft = 18 - age;
  console.log(`Will is too young. Wait another $
  {yearsLeft} years.`);
}

const birthYear = 1994;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

/*
// Type conversion
const inputYear = "1994";
// console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

// cannot convert a string that doesnt contain a number
console.log(Number('William'));
console.log(typeof NaN);

// converting Number to a String
console.log(String(23));

// Type coercion
// Convert 23 into a String and concatenate
console.log('I am ' + 23 + ' years old');
// Converts 23 and 10 to Numbers cuz thats how minus operator works
console.log('23' - '10' - 3);
// Converts 3 into a String and will concatenate
console.log('23' + '10' + 3);
// Multiplier and division operator will convert Strings to Number
console.log('23' * '2');

let n = '1' + 1; // '11' turns 1(Number) into a String
n = n - 1;
console.log(n);
*/

/*
// Truthy and Falsy Values

// 5 falsy values: 0, ' ', undefined, null, NaN

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Jonas')); //  string true
console.log(Boolean({})); // empty object true
console.log(Boolean('')); // empty string false

const money = 0;
// const money = 10;

if (money) {
  console.log("Don't spend it all!");
} else {
  console.log('You should get a job!'); // money = 0, so the the else block was executed
}

let height;
if (height) {
  console.log('Yay! Height is defined');
} else {
  console.log('Height is UNDEFINED')
}
*/

// Equality Operators

// const age = 18;
const age = '18';
if (age === 18) console.log('You just became and adult! (strict)');

if (age == 18) console.log('You just became and adult! (loose)');
// == will do type coercion

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
  console.log('7 is also a cool number');
} else if (favourite === 9) {
  console.log('9 is also a cool number');
} else {
  console.log('Number is not 23 or 7 or 9');
}

if (favourite !== 23) console.log('Why not 23?');
