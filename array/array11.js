/**
 * Write a JavaScript program to find the sum of squares of a numeric vector.
 */

let sum = (arr) => {
  return arr.reduce((total, n) => total + Math.pow(n, 2), 0);
};

console.log(sum([1, 2, 3, 4, 5]));
