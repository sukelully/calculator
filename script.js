document.addEventListener('DOMContentLoaded', () => {
    // Calculator variables.
    let num1 = 0;
    let num2 = 0;
    let operator;
    let operatorChain = 0;
    let operatorOn = false;

    // Check if a string is an integer.
    function isInteger(str) {
        const parsed = parseInt(str, 10);
        return !isNaN(parsed) && Number.isInteger(parsed);
    }

    // Arithmetic functions.
    const percent = (a, b) => (a / b) * 100;
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const multiply = (a, b) => a * b;

    const divide = (a, b) => {
        if (b === 0) {
            console.error("ERROR: Division by zero is not allowed.");
            return 'ERROR';
        }
        return a / b;
    };

    function operate(a, b, operator) {
        return operator(a, b);
    }

    // References to various calculator elements.
    const btnNodeList = document.querySelectorAll('button');
    const display = document.querySelector('.display');
    const decimalBtn = document.querySelector('.decimal-btn');

    // Create array of number buttons and sort it, push decimal button.
    const buttons = Array.from(btnNodeList);
    const numbers = buttons.filter((btn) => isInteger(btn.textContent));
    numbers.sort((a, b) => parseInt(a.textContent, 10) - parseInt(b.textContent, 10));
    numbers.push(decimalBtn);

    // Do X when a number button is pressed.
    numbers.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (display.textContent === '0') {
                display.textContent = btn.textContent;
                num1 = btn.textContent.toString();
            } else {
                if (!operatorOn) {
                    console.log('test');
                    if (operatorChain > 0) {
                        num2 += btn.textContent.toString();
                        // display.textContent = num2;
                        runEquals();
                    }
                    num1 += btn.textContent.toString();
                    display.textContent = num1;
                } else {
                    num2 += btn.textContent.toString();
                    display.textContent = num2;
                    operatorChain++;
                }
            }
        });
    });

    // Create array of action buttons and remove decimal button.
    const actions = buttons.filter((btn) => !isInteger(btn.textContent));
    actions.splice(-2, 1);

    // AC button pressed, clear display.
    actions[0].addEventListener('click', () => {
        display.textContent = '0';
        num1 = num2 = operatorChain = operatorOn = 0;
    });

    // Plus-minus pressed, change sign of current number on display.
    actions[1].addEventListener('click', () => {
        if (display.textContent !== '0') {
            display.textContent = num1 = parseInt(display.textContent, 10) * -1;
        } else {
            display.textContent = 'ERROR';
        }
    });

    // Percent pressed, run percent().
    actions[2].addEventListener('click', () => {
        checkChain();
        num2 = '';
        operator = 'percent';
        operatorOn = true;
    });

    // Divide.
    actions[3].addEventListener('click', () => {
        checkChain();
        num2 = '';
        operator = 'divide';
        operatorOn = true;
    });

    // Multiply.
    actions[4].addEventListener('click', () => {
        checkChain();
        num2 = '';
        operator = 'multiply';
        operatorOn = true;
    });

    // Subtract.
    actions[5].addEventListener('click', () => {
        checkChain();
        num2 = '';
        operator = 'subtract';
        operatorOn = true;
    });

    // Add.
    actions[6].addEventListener('click', () => {
        checkChain();
        num2 = '';
        operator = 'add';
        operatorOn = true;
    });

    // Runs equals if this not the first time an operator has been used.
    function checkChain() {
        if (operatorChain > 0) {
            runEquals();
            operatorChain = 0;
        }
    }

    function runEquals() {
        if (operator === 'percent') {
            display.textContent = operate(parseInt(num1, 10), parseInt(num2, 10), percent);
        } else if (operator === 'add') {
            display.textContent = operate(parseInt(num1, 10), parseInt(num2, 10), add);
        } else if (operator === 'subtract') {
            display.textContent = operate(parseInt(num1, 10), parseInt(num2, 10), subtract);
        } else if (operator === 'multiply') {
            display.textContent = operate(parseInt(num1, 10), parseInt(num2, 10), multiply);
        } else if (operator === 'divide') {
            display.textContent = operate(parseInt(num1, 10), parseInt(num2, 10), divide);
        } else {
            display.textContent = 'ERROR';
            console.log('ERROR: Unknown operator.')
        }
        operatorOn = false;
        num1 = display.textContent;
        operatorChain = 0;
        console.log(operatorChain);
    }

    // Equals pressed, run equals().
    actions[7].addEventListener('click', () => {
        runEquals();
    });
});
