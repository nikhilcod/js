/* Write a JavaScript function that accepts a string as a parameter and converts 
   the first letter of each word of the string in uppercase*/

function uppercase(str) {
    let words = str.split(" ");
    return (words.map(
        word => word[0].toUpperCase() +
            word.substring(1)).join(" ")
    );
}

uppercase("the quick brown fox");
