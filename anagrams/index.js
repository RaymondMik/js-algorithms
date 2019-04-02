// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// SOLUTION 1 - better performance, sort strings and compare them
const anagrams = (stringA, stringB) => {
   return cleanString(stringA) === cleanString(stringB)
}

const cleanString = (str) => 
   str.replace(/[^\w]/g, '')
      .toLowerCase()
         .split('')
            .sort()
               .join('')

// SOLUTION 2 - less performant!
// const anagrams = (stringA, stringB) => {
//    const mapA = mapChar(stringA)
//    const mapB = mapChar(stringB)

//    if (Object.keys(mapA).length !== Object.keys(mapB).length) return false

//    for (let char in mapA) {
//        if (mapA[char] !== mapB[char]) return false
//    }
   
//    return true
// }

// const mapChar = (str) => {
//    const mapChar = {}
//    const parsedStr = str.replace(/[^\w]/g, '').trim().toLowerCase()

//    for (let char of parsedStr) {
//        mapChar[char] = mapChar[char] + 1 || 1
//    }

//    return mapChar
// }

module.exports = anagrams;