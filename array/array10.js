/**
 * Write a JavaScript program which prints the elements of the following array.
 * Sample array : let arr = [[1, 2, 1, 24], 
 *                          [8, 11, 9, 4], 
 *                          [7, 0, 7, 27], 
 *                          [7, 4, 28, 14],
 *                          [3, 10, 26, 7]];
 * Sample Output :
                    "row 0"
                    " 1"
                    " 2"
                    " 1"
                    " 24"
 */

let printArray = (arr) => {
  for (let i in arr) {
    console.log(`row ${i}`);
    for (let j in arr[i]) {
      console.log(` ${arr[i][j]}`);
    }
  }
};

console.log(
  printArray([
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7],
  ])
);
