var num1;
var num2;
var operator;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

function operate(a, b, operator) {
    return operator(a, b);
}

// console.log(operate(2, 2 add));