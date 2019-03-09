// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello ') === ' olleh'

// -- Solution 1
// we can use the reverse() method available on the Array prototype. Hence we need to convert the string into an array, 
// reverse it, and cast it to string
//const reverseString = (str) => str.split('').reverse().join('')

// -- Solution 2
// avoid using reverse(), use a for loop instead
// const reverseString = (str) => {
//    let reversed = '';

//    for (let character of str) {
//        reversed = character + reversed
//    }

//    return reversed;
// }

// -- Solution 3
// avoid using reverse(), use reduce() instead
const reverseString = (str) => str.split('').reduce((acc, character) => character + acc, '')

module.exports = reverseString;