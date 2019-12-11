// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// -- Solution 1
// Iterative 
// const fibonacci = (n) => {
//    let i = 1;
//    let fibonacciSeries = [0, 1];

//    if (n <= 1) {
//       return fibonacciSeries[n]
//    } 
   
//    while(fibonacciSeries.length <= n) {
//        if (i === 1) {
//            fibonacciSeries.push(i);
//        } else {
//            fibonacciSeries.push(fibonacciSeries[i - 1] + fibonacciSeries[i])
//        }
//        i++
//    }

//    return fibonacciSeries[n];
// }

// -- Solution 2
// Recursive
// const fibonacci = (n, fibonacciSeries = [0, 1]) => {
//    if (n <= 1) {
//      return fibonacciSeries[n]
//    } else if (fibonacciSeries.length <= n) {
//        fibonacciSeries.push(fibonacciSeries[fibonacciSeries.length - 2] + fibonacciSeries[fibonacciSeries.length - 1]);
//        return fibonacci(n, fibonacciSeries)
//    } else {
//        return fibonacciSeries[n];
//    }
// }

// Recursive improved with memoization
const memoize = (fn) => {
  const cache = {};

  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  }
};

function fibonacci(n) {
   if (n <= 1) {
     return n
   } 

   return fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacci = memoize(fibonacci)

module.exports = fibonacci;