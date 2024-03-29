'use strict';
// without strict mode, we dont get errors message on the webpage console

/*
let hasDriversLicense =  false;
const passTest = true;

// if (passTest) hasDriverLicense = true;
// With strcit mode, i have an Uncaught ReferenceError: hasDriverLicense is not define in line 7
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive!');

// const interface = 'Audio'; // Unexpected strict mode reserved word, because JS reserved this word for a feature that we might use in the future
// const private = 534; // strict mode reserved those words so we cant use it as a variables
*/

/*
// Functions

function logger() {
  console.log('My name is William');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${
    oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
// Function declarations vs expressions

// line 47 to 52 is a function declaration

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1994);
console.log(age1);

// line 56 to 62 is a function expression

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(1994);
console.log(age2);


// Main dif between function declaration and expression
// is you can call function declaration before they are
// defined in the code.
*/

/*
// Arrow functions
const calcAge3 = birthYear => 2037 - birthYear; // => what we want to return and store it in a variable to be able to use the function
const age3 = calcAge3(1994);
console.log(age3);

// More than 1 line of code? {} and return keyword are re-introduced
// multiple parameters, put parameters in ()

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1994, 'William'));
console.log(yearsUntilRetirement(1974, 'Bob'));
*/

/*
// Function calling other functions

function cutFruitPieces(fruit) {
  return fruit * 4;
};

function fruitProcessor(apples, oranges) {

  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${
    orangePieces} pieces of orange.`;
  return juice;
};

console.log(fruitProcessor(2,3));
*/

/*
//Reviewing functions

const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

// Even tho we have the parameters birthYear in two dif function, they are totally different from each other
const yearsUntilRetirement = function (birthYear,
  firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired!`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1994, 'William'));
console.log(yearsUntilRetirement(1950, 'Bob'));
*/

/*
// Intro to Arrays

const friends = ['William', 'Bob', 'Flo'];
console.log(friends);

const y = new Array(1994, 1940, 2000, 2010);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]); // same thing as line 144

// updating index 2, Flo will be replaced by hally
friends[2] = 'Hally';
console.log(friends);

// Arrays are not a primitive value, thus we can mutate element in the array
// friends = ['Joe', 'Johny']; but you cannot replace the entire array

const firstName = 'Will'
const will = [firstName, 'Chan', 2037 - 1994, 'dev', friends];
console.log(will); // ['Will', 'Chan', 43, 'dev', Array(3)]
console.log(will[4]); // ['Will', 'Bob', 'Hally']
console.log(will[4][1]); // Bob

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

// you cant subtract a whole array with a number.
console.log(calcAge(years)); // NaN

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]),
calcAge(years[years.length - 1])];
console.log(ages);
*/

/*
// Basic Array Operations

// Add element
const friends = ['Will', 'Flo', 'Tom'];
// push function returns a value, it returns the length of the new array
const newLength = friends.push('Bob');
console.log(friends);
console.log(newLength);

// Adds element at the beginning of the array
friends.unshift('John');
console.log(friends);

// Remove element
const popped = friends.pop();
console.log(friends);
console.log(popped); // pop function returns the removed element

// Remove element at the beginning of the array
friends.shift();
console.log(friends);

// Tells of the position of a certain element
console.log(friends.indexOf('Flo'));
console.log(friends.indexOf('Bob'));

// Returns a boolean if the element is in the array
friends.push(23);
console.log(friends);
console.log(friends.includes('Will'));
console.log(friends.includes('Wills'));
// This method uses strict equality, so it doesnt do type coercion
console.log(friends.includes('23'));

if (friends.includes('Will')) {
  console.log('You have a friend names Will!')
}
*/

/*
// Intro to Objects

// No way of giving element a name in arrays
const willArray = [
  'Will',
  'Chan',
  2037 - 1994,
  'dev',
  ['Hally', 'Flo', 'Tom']
];

// Object is another data structure, where we can name a property for our value
const will = {
  firstName: 'Will',
  lastName: 'Chan',
  age: 2037 - 1994,
  job: 'dev',
  friends: ['Hally', 'Flo', 'Tom']
};
*/

/*
// DOT vs Bracket notation

const will = {
  firstName: 'Will',
  lastName: 'Chan',
  age: 2037 - 1994,
  job: 'dev',
  friends: ['Hally', 'Flo', 'Tom']
};

console.log(will);
console.log(will.lastName);
console.log(will['lastName']);

const nameKey = 'Name';
console.log(will['first' + nameKey]);
console.log(will['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Will? Choose between firstName, lastName, age, job and friends');
console.log(will[interestedIn]);

if (will[interestedIn]) {
  console.log(will[interestedIn]);
} else {
  console.log('Wrong request! What do you want to know about Will? Choose between firstName, lastName, age, job and friends ')
}

will.location = 'Spain';
will['twitter'] = '@chantaseng';
console.log(will);

// Challenge
// Will has 3 friends, and his best friend is called Hally

console.log(`${will.firstName} has ${will.friends.length} friends, and his best friend is called ${will.friends[0]}`);
*/

/*
// Object methods

const will = {
  firstName: 'Will',
  lastName: 'Chan',
  birthYear: 1994,
  job: 'dev',
  friends: ['Hally', 'Flo', 'Tom'],
  hasDriversLicense: true,

  // property that holds a function value
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // }

  // What if we want to use THIS keyword!
  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // }

  // Calculate the age and create a new property on the current object
  calcAge: function () {
    console.log(this);
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${
      this.calcAge()} years old ${this.job}, and he as ${
      this.hasDriversLicense ? 'a' : 'no'} driver's license`
  }
};

console.log(will.calcAge());
console.log(will.age);

// Challenge
// "Will is a 43 years old dev, and he has a/no
// driver's license."

console.log(will.getSummary());
*/

/*
// Iteration: the for loop

// How to repeat this line 10 times?
console.log('Lifting weights repetition 1 🏋🏻‍♂️');

// For loop keeps running while condition is TRUE
for(let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋🏻‍♂️`);
}
*/

/*
// Looping arrays, breaking and continuing

const will = [
  'Will',
  'Chan',
  2037 - 1994,
  'dev',
  ['Hally', 'Flo', 'Tom'],
  true
];

const types = [];

for (let i = 0; i < will.length; i++) {
  console.log(will[i], typeof will[i]);

  // filling types array
  // types[i] = typeof will[i];
  types.push(typeof will[i]);
}

console.log(types);

// with a for loop, calculate ages and store it in the ages array
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break statement

// we only want to print elements that are strings
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < will.length; i++) {
  if (typeof will[i] !== 'string') continue;

  console.log(will[i], typeof will[i]);
}

// after a number is found, nothing else should be printed
console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < will.length; i++) {
  if (typeof will[i] === 'number') break;

  console.log(will[i], typeof will[i]);
}
*/

// Looping backward and loops in loops

const will = [
  'Will',
  'Chan',
  2037 - 1994,
  'dev',
  ['Hally', 'Flo', 'Tom']
];

for (let i = will.length - 1; i >= 0; i--) {
  console.log(i, will[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}!`);
  }
}
