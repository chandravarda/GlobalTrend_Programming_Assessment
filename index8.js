function generateFibonacci(n) {
    if (n <= 0) return [];

    let fibSequence = [0];
    if (n > 1) {
        fibSequence.push(1);
    }

    for (let i = 2; i < n; i++) {
        let nextFib = fibSequence[i - 1] + fibSequence[i - 2];
        fibSequence.push(nextFib);
    }

    return fibSequence;
}


console.log(generateFibonacci(5));  
console.log(generateFibonacci(10)); 
console.log(generateFibonacci(0)); 
console.log(generateFibonacci(1)); 
console.log(generateFibonacci(2));  
