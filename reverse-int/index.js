// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// -- Solution 
// cast n to string, reverse it and use Math.sign() to check if it is negative or positive 
const reverseInt = (n) => parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);

// OR 
// const reverseInt = (n) => parseInt((Math.sign(n) === -1 ? '-' : 0) + n.toString().split('').reverse().join(''));

module.exports = reverseInt;