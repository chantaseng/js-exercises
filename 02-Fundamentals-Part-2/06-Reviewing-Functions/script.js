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
