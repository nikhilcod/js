/**
 * Write a JavaScript function to find the unique elements from two arrays.
 */

let uniqueElements = (arr1, arr2) => {
  let uniqueArray = [...arr1, ...arr2];
  uniqueArray = [...new Set(uniqueArray)];
  return uniqueArray;
};

console.log(uniqueElements([1, 2, 3], [100, 2, 1, 10]));
