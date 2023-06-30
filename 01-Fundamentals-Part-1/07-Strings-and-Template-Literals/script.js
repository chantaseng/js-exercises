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
