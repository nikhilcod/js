//Question: Return an array of perfect square

function squareArray(arr) {
    return arr.filter(square);
}

function square(element) {
    let $sqrt = Math.sqrt(element);
    return $sqrt === Math.floor($sqrt);
}
let arr = [1, 4, 3, 16, 25, 6, 7, 8, 49];
squareArray(arr);