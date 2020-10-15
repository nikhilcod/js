/**
 * Write a JavaScript function to get the last element of an array.
 * Passing a parameter 'n' will return the last 'n' elements of the array.
 */

let last = (arr, n) => {
  if (arr == null) {
    return void 0;
  }

  if (n == null) {
    return arr.slice(-1);
  }

  if (n < 0) {
    return [];
  }

  return arr.slice(arr.length - n, arr.length);
};

console.log(last([2, 4, 5]));
console.log(last([], 3));
console.log(last([2, 4, 5], -1));
console.log(last([2, 4, 5], 2));
