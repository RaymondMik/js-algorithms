// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

const pyramid = (n) => {
   let i = 1;
   let outputStr = '';
   const fullSpace = '#';
   const emptySpace = ' ';

   while (i <= n) {
      if (i === 1) {
         outputStr = 
               `${emptySpace.repeat(n - i)}${fullSpace.repeat(i)}${emptySpace.repeat(n - i)}`;
      } else if (i === n) {
         outputStr = 
               `${emptySpace.repeat(n - i)}${fullSpace.repeat(i + n -1)}${emptySpace.repeat(n - i)}`;
         
      } else {
         outputStr = 
               `${emptySpace.repeat(n - (i + (i - 1)) / 2)}${fullSpace.repeat(i + (i - 1))}${emptySpace.repeat(n - (i + (i - 1)) / 2)}`;
      }

      console.log(outputStr);
      i++;
   }
}

module.exports = pyramid;
