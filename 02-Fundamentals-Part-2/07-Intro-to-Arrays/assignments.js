/*
// Functions

function describeCountry(country, population, capitalCity) {
  const input = `${country} has ${population} million people and its capital city is ${
    capitalCity}.`;
  return input;
}

const canada = describeCountry('Canada', 38.25, 'Ottawa');
const madagascar = describeCountry('Madagascar', 28.92, 'Antananarivo');
const france = describeCountry('France', 67.75, 'Paris');
console.log(canada);
console.log(madagascar);
console.log(france);
*/

/*
// Function declarations vs expression

// Declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percCanada1 = percentageOfWorld1(380.25);
const percMadagascar1 = percentageOfWorld1(2800.92);
const percFrance1 = percentageOfWorld1(670.75);
console.log(percCanada1);
console.log(percMadagascar1);
console.log(percFrance1);

// Expression
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
}

const percCanada2 = percentageOfWorld1(38.25);
const percMadagascar2 = percentageOfWorld1(28.92);
const percFrance2 = percentageOfWorld1(67.75);
console.log(percCanada2);
console.log(percMadagascar2);
console.log(percFrance2);
*/

/*
// Arrow function
const percentageOfWorld3 = (population, country) => {
  const percentage = (population / 7900) * 100;
  return `${country} has ${population}, so it is ${
    percentage}% of the world population.`
}
const percCanada3 = percentageOfWorld3(38.25, 'Canada');
const percMadagascar3 = percentageOfWorld3(1400, 'Madagascar');
const percFrance3 = percentageOfWorld3(640, 'France');
console.log(percCanada3);
console.log(percMadagascar3);
console.log(percFrance3);
*/

/*
// Functions calling other functions
const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100;
};

const describePopulation = function (country, population) {

  const percentage = percentageOfWorld1(population);
  const description = `${country} has a ${population} million people, which is about ${
    percentage}% of the world.`;
  console.log(description);
};

describePopulation('Canada', 38.25);
describePopulation('Madagascar', 380.25);
describePopulation('France', 3800.25);
*/

//Intro to Arrays
const populations = [38.25, 6, 28.92, 67.75];
console.log(populations);
console.log(populations.length === 4);

const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100;
};

const percentages = [percentageOfWorld1(populations[0]),
percentageOfWorld1(populations[1]),
percentageOfWorld1(populations[2]),
percentageOfWorld1(populations[3])];
console.log(percentages);
