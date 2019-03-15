// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = (str) => {
   let parsedStr = {}
   let max = 0;
   let maxChar = '';
   for (let i of str) {
      // if (!parsedStr[i]) {
      //    parsedStr[i] = 1;
      // } else {
      //    parsedStr[i] = parsedStr[i] + 1;
      // }
      // the if statement above can be condensed in this way:
      parsedStr[i] = parsedStr[i] + 1 || 1;
      // get most commonly used character
      if (parsedStr[i] > max) {
         max = parsedStr[i]
         maxChar = i;
      }
   }

   return maxChar;
}


module.exports = maxChar;