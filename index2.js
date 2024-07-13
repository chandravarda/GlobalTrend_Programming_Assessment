function evaluateExpression(expression) {
    // Remove any spaces from the expression
    expression = expression.replace(/\s+/g, '');

    // Use a regular expression to split the expression into numbers and operators
    let numbers = expression.split(/[\+\-]/).map(Number);
    let operators = expression.replace(/[0-9]|\./g, '').split('');

    // Initialize the result with the first number
    let result = numbers[0];

    // Iterate through the operators and perform the corresponding arithmetic operations
    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === '+') {
            result += numbers[i + 1];
        } else if (operators[i] === '-') {
            result -= numbers[i + 1];
        }
    }

    return result;
}

// Example usage:
console.log(evaluateExpression("3 + 5 - 2")); 
console.log(evaluateExpression("10 + 20 - 5 + 3")); 
console.log(evaluateExpression("100 - 50 + 25")); 

