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

if (population >= 33) {
  console.log(`${country}'s population is above average`);
} else {
  const average = 33 - population
  console.log(`${country}'s population is ${average} million below average`);
}
