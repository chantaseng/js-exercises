'use strict';
// without strict mode, we dont get errors message on the webpage console

let hasDriversLicense =  false;
const passTest = true;

// if (passTest) hasDriverLicense = true;
// With strcit mode, i have an Uncaught ReferenceError: hasDriverLicense is not define in line 7
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive!');

// const interface = 'Audio'; // Unexpected strict mode reserved word, because JS reserved this word for a feature that we might use in the future
// const private = 534; // strict mode reserved those words so we cant use it as a variables
