/**
 * Write a JavaScript function to get a random item from an array.
 */

 let randomItem = (arr) => arr[Math.floor(Math.random()*arr.length)];

 console.log(randomItem([1,2,3,4,5,6,7,8,9]));