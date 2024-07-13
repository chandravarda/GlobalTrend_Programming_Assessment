function areAnagrams(str1, str2) {
    // Helper function to sort the characters in a string
    function sortString(str) {
        return str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    }

    // Sort both strings and compare them
    return sortString(str1) === sortString(str2);
}


console.log(areAnagrams("listen", "silent")); 
console.log(areAnagrams("hello", "world"));
console.log(areAnagrams("Dormitory", "Dirty room")); 
console.log(areAnagrams("School master", "The classroom")); 
console.log(areAnagrams("Astronomer", "Moon starer")); 
