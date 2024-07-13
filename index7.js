function removeDuplicates(array) {
    return [...new Set(array)];
}

// Example usage:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 
console.log(removeDuplicates(['a', 'b', 'a', 'c', 'b'])); 
console.log(removeDuplicates([1, 1, 1, 1])); 
