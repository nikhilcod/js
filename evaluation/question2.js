//Write a JavaScript function to perform a deep comparison between two values to determine if they are equivalent.

const deepEquals = (a, b) => {
    if (a === b) return true;

    if (a instanceof Date && b instanceof Date)
        return a.getTime() === b.getTime();

    if (!a || !b || (typeof a !== "object" && typeof b !== "object"))
        return a === b;

    if (a === null || a === undefined || b === null || b === undefined)
        return false;

    if (a.prototype !== b.prototype) return false;

    let keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length)
        return false;

    return keys.every((k) => deepEquals(a[k], b[k]));
};

const obj1 = {
    a: [2, { e: 23 }],
    b: [4],
    c: "nikhil"
};

const obj2 = {
    a: [2, { e: 23 }],
    b: [4],
    c: "nikhil"
};

deepEquals(obj1, obj2);