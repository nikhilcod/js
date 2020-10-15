/**
 * Write a JavaScript program to get the current date.
 */

const date = new Date();

let day = date.getDay();
if (day < 10) {
  day = "0" + day;
}
let month = date.getMonth() + 1;
if (month < 10) {
  month = "0" + month;
}

const year = date.getFullYear();

console.log(day + "/" + month + "/" + year);
