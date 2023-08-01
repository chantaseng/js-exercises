'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW varaible with the same name as outer scope's variable
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT';

      const str = `Oh, you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); because const and let variable are block scope. So only available inside the block they were created
    console.log(millenial); // Var variables are function scope so they ignore the block, because they are not block scope
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Will';
calcAge(1994);
// console.log(age);
// printAge();
*/

/*
// Hoisting and Temporal dead zone(TDZ)

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Will';
let job = 'dev';
const year = 1994;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// Calling a var variable before its declaration is like calling undefined(2, 3)
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(numProducts);
// Why is it deleting all the product in my cart? Because var = undefined when we call the variable before it is declared
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

/*
// This Keyword

console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1994);

// In this function this keyword actually get its own this keyword but it is simply undefined

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

// arrow function does not have this keyword. Not this keyword of this function but actually this keyword of the paretn scope(global scope) and it happens to be the window object in this case

const will = {
  year: 1994,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
will.calcAge();

const khaliun = {
  year: 2017,
};

// Method borrowing
khaliun.calcAge = will.calcAge;
khaliun.calcAge();

const f = will.calcAge;
f();

// This happens because this f function is just now a regular function call. It is not attached to any object. There is no owner of this f function. Just a regular function called, so the this keyword is now undefined
*/

// Regular functions vs arrow functions

// var firstName = 'Mathilda';

const will = {
  firstName: 'Will',
  year: 1994,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
      // console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
will.greet();
will.calcAge();

// Argument keyword

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
