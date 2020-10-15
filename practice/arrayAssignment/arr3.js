//Question: Return an array of prime numbers

function primeArray(arr) {
    return arr.filter(prime);
}

function prime(element) {
    if (element === 1 || element % 2 === 0)
        return false;

    for (let i = 3; i <= Math.sqrt(element); i += 2) {
        if (element % i === 0)
            return false;
    }
    return true;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
primeArray(arr);