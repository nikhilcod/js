/**
 * Write a JavaScript program to compute the sum and product of an array of integers.
 */

let sum = (arr) => {
  return arr.reduce((total, n) => total + n, 0);
};

let product = (arr) => {
  return arr.reduce((total, n) => total * n, 1);
};

console.log(
  "Sum : " + sum([1, 2, 3, 4, 5]) + "\nProduct : " + product([1, 2, 3, 4, 5])
);
