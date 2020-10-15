//Write a JavaScript function to get the first non-null / undefined argument

function getArgument(...args) {
    for (let value of args) {
        if (value !== undefined && value !== null) {
            return value;
        }
    }
    return false;
}
getArgument(null, undefined, 'nikhil', NaN, 'abcd');