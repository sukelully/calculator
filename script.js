document.addEventListener('DOMContentLoaded', () => {
    // Calculator variables.
    let num1;
    let num2;
    let operator;

    // Check if a string is an integer.
    function isInteger(str) {
        const parsed = parseInt(str, 10);
        return !isNaN(parsed) && Number.isInteger(parsed);
    }

    // Arithmetic functions.
    const percent = (a, b) => (a / 100) * b;
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

    // References to various calculator elements.
    const btnNodeList = document.querySelectorAll('button');
    const display = document.querySelector('.display');
    const decimalBtn = document.querySelector('.decimal-btn');

    // Create array of number buttons and sort it, push decimal button.
    const buttons = Array.from(btnNodeList);
    const numbers = buttons.filter(item => isInteger(item.textContent));
    const actions = buttons.filter(item => !isInteger(item.textContent));
    numbers.sort((a, b) => parseInt(a.textContent, 10) - parseInt(b.textContent, 10));
    numbers.push(decimalBtn);

    // Do X when a number button is pressed.
    numbers.forEach((btn) => {
        btn.addEventListener('click', function() {
            display.textContent = btn.textContent;
        });
    });

    // Create array of action buttons and remove decimal button.
    actions.splice(-2, 1);
    actions.forEach((item) => console.log(item));

    // AC button pressed, clear display.
    actions[0].addEventListener('click', function() {
        display.textContent = '';
    });

    // Plus-minus pressed, change sign of current number on display.
    actions[1].addEventListener('click', function() {
        if (display.textContent) {
            display.textContent = parseInt(display.textContent, 10) * -1;
        } else {
            display.textContent = 'ERROR';
        }
    });
    
    // Percent pressed, run percent().
    actions[2].addEventListener('click', function() {
        console.log('percent');
    });

    // Plus pressed, run add().
    actions[3].addEventListener('click', function() {
        console.log('plus');
    });

    // Minus pressed, run subtract().
    actions[4].addEventListener('click', function() {
        console.log('minus');
    });

    // Times pressed, run multiply().
    actions[5].addEventListener('click', function() {
        console.log('multiply');
    });

    // Divide pressed, run divide().
    actions[6].addEventListener('click', function() {
        console.log('divide');
    });
    
    // Equals pressed, run equals().
    actions[7].addEventListener('click', function() {
        console.log('equals');
    });
});
