//Question: Return an array of numbers whose square is even

function evenSquareArray(arr) {
    return arr.filter(even);
}

function even(element) {
    return (Math.pow(element,2) % 2 === 0);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
evenSquareArray(arr);