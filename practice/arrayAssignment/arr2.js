//Question: Return an array of even numbers

function evenArray(arr) {
    return arr.filter(even);
}

function even(element) {
    return (element % 2 === 0);
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
evenArray(arr);