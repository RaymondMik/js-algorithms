// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// -- Solution
// we can use the reverse() method available on the Array prototype. Hence we need to convert the string to array, 
// reverse it, and cast it to a string again
const reverseString = (str) => str.split('').reverse().join('')

module.exports = reverseString;