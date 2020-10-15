// Write a JavaScript function to check whether an `input` is an array or not.

let isArray = (arr) => (toString.call(arr) === "[object Array]" ? true : false);

console.log(isArray([1, 2, "Nikhil", null]));
