/**
 * Write a JavaScript program to find the most frequent item of an array.
 */

let most = [undefined, 0],
  counter = 0;

let getMostFrequent = (arr) => {
  arr.sort().reduce((old, chr) => {
    (old == chr) ? (++counter > most[1] && (most = [chr, counter])) : (counter = 1);
    return chr;
  });

  console.log(most[0] + " ( " + most[1] + " times )");
};

console.log(getMostFrequent([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));
