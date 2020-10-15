//Question: Return an array of odd numbers

function oddArray(arr) {
    return arr.filter(odd);
}

function odd(element) {
    return (element % 2 === 1);
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
oddArray(arr);