/**
 *  Write a JavaScript program to display the current day and time in the following format.
    Sample Output : Today is : Tuesday.
                    Current time is : 10 PM : 30 : 38 
 */

const date = new Date();

const day = date.getDay();
const dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(`Today is : ${dayList[day]}.`);

let hour = date.getHours();
const minute = date.getMinutes(),
  second = date.getSeconds();

let prepand = hour >= 12 ? "PM" : "AM";
hour = hour >= 12 ? hour - 12 : hour;

if (hour === 0 && prepand === "PM") {
  if (minute === 0 && seconds === 0) {
    hour = 12;
    prepand = "Noon";
  } else {
    hour = 12;
    prepand = "PM";
  }
}

if (hour === 0 && prepand === "AM") {
  if (minute === 0 && seconds === 0) {
    hour = 12;
    prepand = "Midnight";
  } else {
    hour = 12;
    prepand = "AM";
  }
}

console.log(`Current time is : ${hour} ${prepand} : ${minute} : ${second} `);
