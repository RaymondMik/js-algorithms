// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// -- Solution 1
// Use array methods
function findVowels(str) {
   const vowels = ['a', 'e', 'i', 'o', 'u'];
   // includes() works on strings too
   let vowelsNumber = 0;

   [...str].forEach((letter) => {
      if (vowels.includes(letter.toLowerCase())) {
         vowelsNumber += 1;
      }
   })

   return vowelsNumber;
}

module.exports = findVowels;