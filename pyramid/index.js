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
        const charSpacing = fullSpace.repeat(i + (i - 1));
        // side spacing is equal to num of rows - charSpaces / 2
        const sideSpacing = emptySpace.repeat(Math.floor(n - (i + (i - 1)) / 2));
        outputStr = 
            `'${sideSpacing}${charSpacing}${sideSpacing}'`;

        console.log(outputStr);
        i++;
    }
}

module.exports = pyramid;
