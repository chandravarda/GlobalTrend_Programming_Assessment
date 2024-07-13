function areAnagrams(str1, str2) {
    function sortString(str) {
        return str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    }

    // Sort both strings and compare them
    return sortString(str1) === sortString(str2);
}


console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world")); // Output: false
console.log(areAnagrams("Dormitory", "Dirty room")); // Output: true
console.log(areAnagrams("School master", "The classroom")); // Output: true
console.log(areAnagrams("Astronomer", "Moon starer")); // Output: true

