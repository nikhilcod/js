/**
 * Write a JavaScript function to get the first element of an array.
 * Passing a parameter 'n' will return the first 'n' elements of the array.
 */

let first = (arr, n) => {
  if (arr == null) {
    return void 0;
  }

  if (n == null) {
    return arr.slice(0,1);
  }

  if (n < 0) {
    return [];
  }

  return arr.slice(0, n);
};

console.log(first([2,4,5]));
console.log(first([],3));
console.log(first([2,4,5],-1));
console.log(first([2,4,5],2));