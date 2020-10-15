/**
 * Write a JavaScript program to remove duplicate items from an array. 
 * (ignore case sensitivity).
//  */

/**
 *  let arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3, "A"];
    let uniqueArray = [...new Set(arr)];
    console.log(uniqueArray.sort());
 */

let uniqueArray = (arr) =>
  arr.sort().filter((element, index, arr) => index == arr.indexOf(element));

console.log(uniqueArray([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3, "A"]));
