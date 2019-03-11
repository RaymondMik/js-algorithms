// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// -- Solution 1
// reverse the str passed to this function and check if it is === to the original str 
// const isPalindrome = (str) => {
//    const parsedStr = str.trim().split(' ').join('')
//    const reverseStr = parsedStr.split('').reverse().join('');
//    return reverseStr == parsedStr;
// }

// -- Solution 2
// use array.every to compare each element in the passed string
const isPalindrome = (str) => {
   const parsedStr = str.trim().split(' ').join('')
   return parsedStr.split('').every((char, i) => char === parsedStr[parsedStr.length - i - 1])
}

module.exports = isPalindrome;