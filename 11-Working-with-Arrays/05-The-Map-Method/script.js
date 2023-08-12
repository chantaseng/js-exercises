'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
// Simple array methods

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE only diff is that it MUTATE the array. Take part of the original array and the original array loses the extracted part
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE also MUTATE the array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT does not mutate
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));
*/

/*
// AT method
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

// at method also works in string
console.log('jonas'.at(0));
console.log('jonas'.at(-1));
*/

/*
// Looping arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('------ FOREACH ------');
movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
});
// 0: function(200);
// 1: function(450);
// 2: function(400);
// ...
*/

/*
// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Sets
const currenciesUnique = new Set(['USD', 'GBP', 'EUR', 'GBP', 'USD']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/

/*
Challenge #1


Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy.

A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Your tasks:

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the first and the last two dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)

2. Create an array with both Julia's(corrected)and Kate's data

3. For each remaining dog, log to the console whether it's an adult("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy")

4. Run the function for both test data sets

Test data:

Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

Hints: Use tools from all lectures in this section so far 😉
*/

/*
const dogJulia = [3, 5, 2, 12, 7];
const dogKate = [4, 1, 15, 8, 3];

const dogJulia1 = [9, 16, 6, 8, 3];
const dogKate1 = [10, 5, 6, 1, 4];

// Data 1
const juliaCopy = dogJulia.slice(1, 3);
const combinedData = juliaCopy.concat(dogKate);

//Data 2
const juliaCopy1 = dogJulia1.slice(1, 3);
const combinedData1 = juliaCopy1.concat(dogKate1);

const checkDogs = function (arr) {
  arr.forEach(function (dog, i) {
    const isAdult =
      dog >= 3
        ? console.log(
            `Dog number ${i + 1} is still a adult, and is ${dog} years old`
          )
        : console.log(
            `Dog number ${i + 1} is still a puppy, and is ${dog} years old`
          );
  });
};

checkDogs(combinedData);
console.log('-----');
checkDogs(combinedData1);
*/

/*
// Jonas method
const checkDogs = function (dogJulia, dogKate) {
  const dogJuliaCorrected = dogJulia.slice();
  dogJuliaCorrected.splice(0, 1);
  dogJuliaCorrected.splice(2);

  const dogs = dogJuliaCorrected.concat(dogKate);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(
        `Dog number ${i + 1} is still a adult, and is ${dog} years old`
      );
    } else {
      console.log(
        `Dog number ${i + 1} is still a puppy, and is ${dog} years old`
      );
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log('-----------');
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

// the map method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUs = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUs;
// });

// Refactor into arrow function
const movementsUSD = movements.map(mov => mov * eurToUs);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUs);

console.log(movementsUSDfor);

const movementsDescription = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescription);