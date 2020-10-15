//Question: Return an array of pallindrome numbers

function pallindromeArray(arr) {
    return arr.filter(pallindrome);
}

function pallindrome(element) {
    let str = element.toString();
    let len = str.length;
    
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i])
            return false;
    }
    return true;
}

let arr = [121, 223, 323, 445, 5555];
pallindromeArray(arr);