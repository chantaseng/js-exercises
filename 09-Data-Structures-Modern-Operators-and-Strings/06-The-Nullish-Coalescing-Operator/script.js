"use strict";

/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
*/

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    mainIndex = 0,
    starterIndex = 1,
    time = "20;00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}!`
    );
  },

  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

restaurant.numGuests = 0;
const guest2 = restaurant.numGuests || 10;
console.log(guest2);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

/*
////////////////////////////////////
// OR operator and AND operator
console.log("----- OR operator -----");
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || "Jonas");
console.log("" || "Jonas");
console.log(true || 0);
console.log(undefined || null); // no short-circuiting

console.log(undefined || 0 || "" || "Hello" || 23 || null);

// restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log("----- AND operator -----");
console.log(0 && "Jonas");
console.log(7 && "Jonas");

console.log(7 && "Jonas" && null && "jonas");

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
*/

/*
//////////////////////////////////
// Rest pattern and parameters
// 1) Destructuring

// SPREAD, because on the RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on the LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// Combine spread and rest
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(4, 42, -10, 7);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("mushrooms", "onions", "spinach", "pineapple");
restaurant.orderPizza("mushrooms");
*/

/*
//////////////////////////////////////
// Spread operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: array, string, maps, sets. Not objects
const str = "Jonas";
const letters = [...str, "", "S."];
console.log(...str);
console.log(letters);
// console.log(`${...str} chan`); template literal does not expect spread operator

// Real world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Ingredient 2?"),
  // prompt("Ingredient 3?"),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

restaurant.orderPasta(...ingredients);

// Objects
const restaurantCopy = { foundedIn: 1998, ...restaurant, founded: "Will" };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*
////////////////////////////////////////
// Destructuring objects
restaurant.orderDelivery({
  time: "22:30",
  address: "123 via del Sol",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "123 via del Sol",
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables while destructuring object
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/*
/////////////////////////////////
// Destructuring arrays
// Old way to assign variable to element in an array
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring array!
const [x, y, z] = arr;
console.log(x, y, z);
console.log(x);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Main is now switch to secondary and secondary switched to main

// Old way before destructuring
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); -> Vegetarian Italian

// Destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

// console.log(restaurant.order(2, 0));

// Recieve 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nesting destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default value
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
