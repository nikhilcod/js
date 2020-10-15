/**
 * Write a JavaScript function to get nth largest element from an unsorted array.
 */

let nthLargest = (arr, n) => {
  let x = 0,
    y = 0,
    z = 0,
    temp = 0;

  let flag = false,
    result = false;

  while (x < arr.length) {
    y = x + 1;

    if (y < arr.length) {
      for (z = y; z < arr.length; z++) {
        if (arr[x] < arr[z]) {
          temp = arr[z];
          arr[z] = arr[x];
          arr[x] = temp;
          flag = true;
        } else {
          continue;
        }
      }
    }

    if (flag) {
      flag = false;
    } else {
      x++;
      if (x === n) {
        result = true;
      }
    }
    if (result) {
      break;
    }
  }

  return arr[n - 1];
};

console.log(nthLargest([43, 56, 23, 89, 88, 90, 99, 652], 3));
