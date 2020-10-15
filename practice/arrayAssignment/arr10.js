//Question: Return an array of numbers which are multiple of 3 0r 5

function multipleArray(arr) {
    return arr.filter(multiple);
}

function multiple(element) {
    return (element % 3 === 0 || element % 5 === 0);     
}
let arr = [1, -2, -3, 4, -5, 6, 7, 8, -9, 10];
multipleArray(arr);