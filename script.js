let num1;
let num2;
let operator;

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

function isInteger(num) {
    const parsed = parseInt(num, 10);
    return !isNaN(parsed) && Number.isInteger(parsed);
}

const btnNodeList = document.querySelectorAll('button');

const buttons = Array.from(btnNodeList);

const numberButtons = buttons.filter(item => isInteger(item.textContent));

const numbers = numberButtons.map(item => parseInt(item.textContent, 10));
numbers.sort((a, b) => a - b);

console.log(numbers);