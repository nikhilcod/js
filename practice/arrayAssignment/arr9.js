//Question: Return an array of positive numbers

function positiveArray(arr) {
    return arr.filter(positive);
}

function positive(element) {
    return element >= 0;
}
let arr = [1, -2, -3, 4, -5, 6, 0, 7, 8, -9];
positiveArray(arr);