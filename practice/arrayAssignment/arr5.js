//Question: Return an array of perfect cube

function cubeArray(arr) {
    return arr.filter(cube);
}

function cube(element) {
    let $cbrt = Math.cbrt(element);
    return $cbrt === Math.floor($cbrt);
}
let arr = [1, 4, 64, 16, 25, 216, 7, 8, 49];
cubeArray(arr);