function flattenArray(nestedArray) {
    // Use recursion to handle nested arrays
    function flatten(arr) {
        return arr.reduce((acc, val) => 
            Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
    }
    return flatten(nestedArray);
}

// Example usage:
console.log(flattenArray([1, [2, [3, [4]], 5]])); 
console.log(flattenArray([[1, 2, [3]], 4, [5, 6]]);
console.log(flattenArray([[[[1], 2], 3], 4])); 

