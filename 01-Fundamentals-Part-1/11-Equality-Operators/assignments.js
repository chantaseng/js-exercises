// Values and Variables assignment

const country = "Canada";
let continent = "North America";
let population = 38.25;

// console.log(country);
// console.log(continent);
// console.log(population);

// Data Types assignment

const isIsland = false;
const language = "English";

// console.log(isIsland);
// console.log(population);
// console.log(country);
// console.log(language);

// language = "French";

// Basic Operators assignment

// population = population / 2;
// console.log(population);

// population ++;
// console.log(population);

// const finlandPopulation = 6
// console.log(population > finlandPopulation);

// const avgPopulation = 33;
// console.log(population < avgPopulation);

// const description = country + ' is in ' + continent
// + ', and its ' + population + ' million people speak ' + language
// console.log(description);

// Strings and Template Literals assignment

const description = `${country} is in ${continent}, and its ${
  population} million speak ${language}`;
// console.log(description);

// If/Else Statement exercise

population = 38.25;
// population = 13;
// population = 130;

/*
if (population >= 33) {
  console.log(`${country}'s population is above average`);
} else {
  const average = 33 - population
  console.log(`${country}'s population is ${average} million below average`);
}
*/

/*
// Type conversion and coercion
'9' - '5'; // 4 - Minus Operator converts String to Number
'19' - '13' + '17'; // '617'
'19' - '13' + 17; // 23
'123' < 57; // false
5 + 6 + '4' + 9 - 4 - 2; // 1143
// 5 + 6 + '4' + 9 - 4 - 2;
// (5 + 6) + ('4') + (9 - 4 - 2);
// (11) + ('4') + (3);
// 1143 - Converts the string to a Number
*/

// Equality Operators

const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbours === 1) {
  console.log('Only 1 border!');
} else if (numNeighbours > 1) {
  console.log('More than 1 border');
} else {
  console.log('No borders');
}
