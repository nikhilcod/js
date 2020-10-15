/**
 *  We have the following arrays : 
    color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
    o = ["th","st","nd","rd"]
    Write a JavaScript program to display the colors in the following way :
    "1st choice is Blue ."
    "2nd choice is Green."
    "3rd choice is Red."
 */

let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

let ordinal = (n) => {
  let o = ["th", "st", "nd", "rd"],
    x = n % 100;
  return x + (o[(x - 20) % 10] || o[x] || o[0]);
};

for (let n = 0; n < color.length; n++) {
  console.log(ordinal(n + 1) + " choice is " + color[n] + ".");
}
