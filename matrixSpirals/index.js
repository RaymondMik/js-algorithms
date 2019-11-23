// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
   let counter = 1;
   let startRow = 0 
   let startColumn = 0;
   let endRow = n - 1;
   let endColumn = n - 1;
   let matrixArr = [];

   for(let j = 0; j < n; j++) {
      matrixArr.push([]);
   }

   // build the matrix
   while(startRow <= endRow && startColumn <= endColumn) {
       // create first row going throug columns
       for (let i = startColumn; i <= endColumn; i++) {
         matrixArr[startRow][i] = counter;
         counter++;
       }
       startRow++

       // create last column going through rows
       for (let i = startRow; i <= endRow; i++) {
         matrixArr[i][endColumn] = counter;
         counter++;
       }
       endColumn--

       // create last row going backwards through columns
       for (let i = endColumn; i >= startColumn; i--) {
         matrixArr[endRow][i] = counter;
         counter++;
       }
       endRow--

       // create remaining part of first column going up through rows
       for (let i = endRow; i >= startRow; i--) {
         matrixArr[i][startColumn] = counter;
         counter++;
       }
       startColumn++;
   }

   return matrixArr;

}

module.exports = matrix;