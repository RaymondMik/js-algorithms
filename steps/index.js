// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// "regular" solution
const steps = (n) => {
   let i = 1;
   const fullSpace = '#';
   const emptySpace = ' ';

   while (i <= n) {
      const outputStr = `${fullSpace.repeat(i)}${emptySpace.repeat((n-i))}`;
      console.log(outputStr);

      i++;
   }
}

// recursive solution
// const steps = (n, i = 1) => {
//    const fullSpace = '#';
//    const emptySpace = ' ';

//    if (i <= n) {
//        const outputStr = `${fullSpace.repeat(i)}${emptySpace.repeat((n - i))}`;
//        console.log(outputStr);
//        i++
       
//        return steps(n, i)
//    }

//    return;
// }

module.exports = steps;