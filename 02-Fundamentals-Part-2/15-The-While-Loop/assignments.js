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

/*
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
*/

/*
// Basic Array Operations

const neighbours = ['Spain', 'Germany', 'Italy'];
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (neighbours.includes('Canada') === false) {
  console.log('Probably not a north American country');
}

neighbours[1] = 'Republic of Sweden';
console.log(neighbours);
*/

/*
// Intro to Objects

const myCountry = {
  country: 'Canada',
  capital: 'Ottawa',
  language: 'English',
  population: '38.25',
  neighbours: ['USA', 'Mexico', 'Japan']
};

console.log(myCountry);
console.log(myCountry['neighbours']);
console.log(myCountry['neighbours'].length);
console.log(myCountry['neighbours'][1]);
myCountry['neighbours'].push = 'China';
console.log(myCountry['neighbours']);
console.log(myCountry);
*/

/*
// Dot vs brackets notation

const myCountry = {
  country: 'Canada',
  capital: 'Ottawa',
  language: 'English',
  population: '38.25',
  neighbours: ['USA', 'Mexico', 'Japan']
};

// 'Finland has 6 million finnish-speaking people,
// 3 neighbouring countries and a capital called Helsinki.

console.log(`${myCountry.country} has ${
  myCountry.population} million ${
  myCountry.language}-speaking people, ${
  myCountry.neighbours.length} neighbouring countries and the capital is ${myCountry.capital}`);

myCountry.population += 2;
console.log(myCountry);
myCountry['population'] -= 2;
console.log(myCountry);
*/

/*
// Object Methods

const myCountry = {
  country: 'Canada',
  capital: 'Ottawa',
  language: 'English',
  population: '38.25',
  neighbours: ['USA', 'Mexico', 'Japan'],

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    return this.isIsland;
  },

  // checkIsland: function () {
  //   // console.log(this);
  //   this.isIsland = !Boolean(this.neighbours.length);
  // },

  describe: function () {
    // console.log(this);
    return `${this.country} has ${
      this.population} million ${
      this.language}-speaking people, ${
      this.neighbours.length} neighbouring countries and the capital is ${this.capital}`;
  }
};

// dont forget the () after the property because it will log the function and not the string
console.log(myCountry.describe());
console.log(myCountry.checkIsland());
console.log(myCountry.isIsland);
*/

/*
// For loop

// Use a for loop to simulate the 50 people voting,
// by logging a string like this to the console
// (for numbers 1 to 50):
// 'Voter number 1 is currently voting'

for(let vote = 1; vote <= 50; vote++) {
  console.log(`Voter number ${vote} is currently voting`);
}
*/

/*
// Looping arrays, breaking and continuing

const populations = [38.25, 6, 28.92, 67.75];
const percentages2 = [];

const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100;
};

for (let i = 0; i < populations.length; i++) {
  // have to save new element in a variable and then push it into empty array
  const perc = percentageOfWorld1(populations[i]);
  console.log(perc);
  percentages2.push(perc);
}

console.log(percentages2);
*/

/*
// Looping backwards and loop inside of looop

const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia']
];

// console.log(listOfNeighbours);

for (let i = 0; i < listOfNeighbours.length; i++) {
  // console.log(listOfNeighbours);
  console.log(listOfNeighbours[i]);
  for (let y = 0; y < listOfNeighbours[i].length; y++)
  console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
}
*/

// While loop

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`--- Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}!`);
//   }
// }

let exercise = 1;
while (exercise < 4) {
  console.log(`WHILE LOOP--- Starting exercise ${exercise}`);
  let rep = 1;
  while (rep < 6) {
    console.log(`WHILE LOOP - Exercise ${exercise}: Lifting weight repetition ${rep}!`);
    rep++;
  }
  exercise++;
}
