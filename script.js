document.addEventListener('DOMContentLoaded', () => {
    // Calculator variables.
    let num1;
    let num2;
    let operator;

    // Check if a string is an integer.
    function isInteger(num) {
        const parsed = parseInt(num, 10);
        return !isNaN(parsed) && Number.isInteger(parsed);
    }

    // Arithmetic functions.
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => {
        if (b === 0) {
            console.error("Division by zero is not allowed.");
            return NaN;
        }
        return a / b;
    };

    function operate(a, b, operator) {
        return operator(a, b);
    }

    // Button array.
    const btnNodeList = document.querySelectorAll('button');
    const buttons = Array.from(btnNodeList);

    // Numbers array.
    const numbers = buttons.filter(item => isInteger(item.textContent));
    numbers.sort((a, b) => parseInt(a.textContent, 10) - parseInt(b.textContent, 10));

    const decimalBtn = document.querySelector('#decimal-btn');
    numbers.push(decimalBtn);

    numbers.forEach((item) => {
        console.log(item.textContent);
    });
    // console.log(numbers);
});
