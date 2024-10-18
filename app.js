// Part 4: Importing and Using the Modules
import multiply, { add, subtract, addAndLogUpper } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';


console.log('Add: ', add(5, 3));

// Subtract function
console.log('Subtract: ', subtract(10, 4));

// Multiply function
console.log('Multiply: ', multiply(4, 5));

// string manipulation
console.log('Uppercase: ', toUpperCase('hello'));
console.log('Lowercase: ', toLowerCase('HELLO'));

// Combined function
addAndLogUpper(10, 20);
