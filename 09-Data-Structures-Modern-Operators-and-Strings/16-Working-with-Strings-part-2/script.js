'use strict';

/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
*/

const weekday = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
//Destructuring
const [a, b, c, d, e, f, g] = weekday;

const openingHours = {
  [d]: {
    open: 12,
    close: 22,
  },
  [e]: {
    open: 11,
    close: 23,
  },
  [f]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ mainIndex = 0, starterIndex = 1, time = '20;00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}!`
    );
  },

  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAs'; // should be Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Function to fix capitalization
const firstLetterCapital = function (word) {
  // index 0 should be capital
  if (word[0] !== word[0].toUpperCase())
    console.log(word[0].toUpperCase() + word.slice(1));
  else console.log(word);
};

// firstLetterCapital('william');
// firstLetterCapital('Khaliun');

// Comparing email
const email = 'hello@jonas.io';
const loginEmail = '    HelLo@Jonas.io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizeEmail = loginEmail.toLowerCase().trim();
console.log(normalizeEmail);
console.log(email === normalizeEmail);

// replacing
const priceGB = '289,99£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to the door 23. Boarding at door 23.';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
// Pre-replaceAll
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW AIRBUS family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun'))
    console.log('You are not allowed to board!');
  else console.log('Welcome aboard');
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Some snacks and a gun for protection');

/*
// Working with strings - part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

// slice(): the begin parameter, position at which the extraction will start
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

// Want to extract the first word but we dont know the length 0 is the begin para and ' ' (empty space is the end para)
console.log(airline.slice(0, airline.indexOf(' ')));
// Extract last word
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seat
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log("You've got a middle seat. 😕");
  } else {
    console.log('You are lucky! 😎');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23D');
checkMiddleSeat('3E');

// What JS does behind the scene(method called 'boxing')
console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(-1));
*/

/*
// Map iteration
const question = new Map([
  ['question', 'What is the best programmin language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'Try again'],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz map
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));
// if (answer === 3) console.log('correct');
// else console.log('Try again');

// Convert map to array
console.log([...question]);
// console.log([question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/

/*
// Maps
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are close');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1', 'Heading'));
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
*/

/*
////////////////////////////
// Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);

console.log(new Set('Jonas'));
console.log(new Set(''));
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// If i want to convert new set back to an array
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
// wannna know how many different position
console.log(

  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
// How many diff letters in my name
console.log(new Set('WilliamChan').size);
*/

/*
///////////////////////////////////////////////
// Looping Objects: object, keys, values and entries

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  // console.log(day);
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day}, we open at ${open} and close at ${close}.`);
}
*/

/*
/////////////////////////////
// Optional Chaining

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// With optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(
    open === 'closed'
      ? `On ${day}, we are closed`
      : `On ${day}, we open at ${open}`
  );
}

// Jonas way
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open;

//   console.log(
//     open
//       ? `On ${day}, we open at ${open} `
//       : open === 0
//       ? `On ${day} we open at ${open}`
//       : `On ${day}, we are closed`
//   );
// }

// Method
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Array
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
const users = [];

console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('User empty array');
*/

/*
///////////////////////////////////
// Looping arrays: For of loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// We want to loop the entire menu
for (const item of menu) console.log(item);

// We also want the current index with the current item

// Old way to manually take element 0 and element 1

// for (const item of menu.entries()) {
//   // console.log(item);
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// Lets use the destructure assignment since we know that item is an array of 2 elements
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/

/*
//////////////////////////////////
// Logical assignment operator
const rest1 = {
  restaurant: "Capri",
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  restaurant: "La Piazza",
  owner: "Giovanni",
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// And operator
// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest2.owner = rest2.owner && "<ANONYMOUS>";

// and assignment operator
rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1);
console.log(rest2);
*/

/*
////////////////////////////////////
// Nullish operator
restaurant.numGuests = 0;
const guest2 = restaurant.numGuests || 10;
console.log(guest2);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

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
