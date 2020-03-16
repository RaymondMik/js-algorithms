// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

const testArr = [97, 10, 0, 5, -30, 11, 123];

function bubbleSort(arr) {
   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < (arr.length - i); j++) {
         if (arr[j] > arr[j + 1]) {
            const higher = arr[j];
            const lower = arr[j +1];
            arr[j] = lower;
            arr[j + 1] = higher;
         }
      }
   }

   return arr;
}

function selectionSort(arr) {
   for (let i = 0; i < arr.length; i++) {
      let indexOfMin = i;
      for (let j = i + 1; j < arr.length; j++) {
         if (arr[j] < arr[indexOfMin]) {
            indexOfMin = j;
         }
      }
 
      if (i !== indexOfMin) {
         const higher = arr[i];
         arr[i] = arr[indexOfMin]
         arr[indexOfMin] = higher;
      }
   }

   return arr;
}

function mergeSort(arr) {
   if (arr.length === 1) {
      return arr;
   }

   console.log(111, arr);

   const center = Math.floor(arr.length / 2);
   const left = arr.slice(0, center);
   const right = arr.slice(center);

   console.log(222, left, right);

   return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
   let results = [];
   console.log(333, results, left, right);
   while (left.length && right.length) {
      if (left[0] < right[0]) {
         results.push(left.shift());
      } else {
         results.push(right.shift());
      }
   }

  

   return [...results, ...left, ...right];
}
const testArr1 = [1, 4, 16, 5];
mergeSort(testArr1);

module.exports = { bubbleSort, selectionSort, mergeSort, merge };