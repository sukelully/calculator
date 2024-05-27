document.addEventListener('DOMContentLoaded', () => {
    // Calculator variables.
    let num1 = 0;
    let num2 = 0;
    let operator;
    let operatorOn = false;

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
    const numbers = buttons.filter((btn) => isInteger(btn.textContent));
    numbers.sort((a, b) => parseInt(a.textContent, 10) - parseInt(b.textContent, 10));
    numbers.push(decimalBtn);

    // Do X when a number button is pressed.
    numbers.forEach((btn) => {
        btn.addEventListener('click', () => {
            // console.log(display.textContent);
            if (display.textContent === '0') {
                // console.log(btn.textContent);
                display.textContent = btn.textContent;
                num1 = btn.textContent.toString();
            } else {
                if (!operatorOn) {
                    num1 += btn.textContent.toString();
                    console.log(`num1 = ${num1}`);
                    display.textContent = num1;
                } else {
                    num2 += btn.textContent.toString();
                    console.log(`num2 = ${num2}`);
                    display.textContent = num2;
                }
            }
        });
    });

    // Create array of action buttons and remove decimal button.
    const actions = buttons.filter((btn) => !isInteger(btn.textContent));
    actions.splice(-2, 1);
    actions.forEach((item) => console.log(item));

    // AC button pressed, clear display.
    actions[0].addEventListener('click', () => {
        display.textContent = '0';
        num1 = num2 = 0;
    });

    // Plus-minus pressed, change sign of current number on display.
    actions[1].addEventListener('click', () => {
        if (display.textContent !== '0') {
            display.textContent = parseInt(display.textContent, 10) * -1;
        } else {
            display.textContent = 'ERROR';
        }
    });

    // Percent pressed, run percent().
    actions[2].addEventListener('click', () => {
        console.log('percent');
    });

    // Plus pressed, run add().
    actions[3].addEventListener('click', () => {
        operator = 'add';
        operatorOn = !operatorOn;
    });

    // Minus pressed, run subtract().
    actions[4].addEventListener('click', () => {
        console.log('minus');
    });

    // Times pressed, run multiply().
    actions[5].addEventListener('click', () => {
        console.log('multiply');
    });

    // Divide pressed, run divide().
    actions[6].addEventListener('click', () => {
        console.log('divide');
    });

    // Equals pressed, run equals().
    actions[7].addEventListener('click', () => {
        if (operator === 'add') {
            display.textContent = operate(parseInt(num1, 10), parseInt(num2, 10), add);
        }
    });
});
