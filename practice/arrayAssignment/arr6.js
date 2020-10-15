//Question: Return an array of armstrong number

function armstrongArray(arr) {
    return arr.filter(armstrong);
}

function armstrong(element) {
    let digits = element.toString();
    let sum = 0;
    let temp = element;

    while (temp > 0) {
        let remainder = temp % 10;
        sum += Math.pow(remainder, digits.length);
        temp = Math.floor(temp / 10);
    }

    return sum === element;
}

let arr = [371, 64, 1634, 25, 216, 153, 9, 8, 14];
armstrongArray(arr);