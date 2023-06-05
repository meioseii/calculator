const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

let decimalCount = 0;
let firstOperand = 0;
let secondOperand = 0;
let currentOperation = null;
let resetDisplay = false;

function evaluate() {
    if (currentOperation === '%') {
        display.textContent = (firstOperand / secondOperand) * 100;
    } else if (currentOperation === '/') {
        display.textContent = firstOperand / secondOperand;
    } else if (currentOperation === 'x') {
        display.textContent = firstOperand * secondOperand;
    } else if (currentOperation === '-') {
        display.textContent = firstOperand - secondOperand;
    } else if (currentOperation === '+') {
        display.textContent = firstOperand + secondOperand;
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            if (display.textContent === '0' || resetDisplay) {
                display.textContent = '';
                display.textContent += button.textContent;
                resetDisplay = false;
            } else {
                display.textContent += button.textContent;
            }

        }

        if (button.classList.contains('delete')) {
            if (display.textContent.length === 1 || resetDisplay) {
                display.textContent = '0';
                decimalCount = 0;
            } else {
                display.textContent = display.textContent.slice(0,-1);
            }
        }

        if (button.classList.contains('all-clear')) {
            display.textContent = 0;
            decimalCount = 0;
            firstOperand = 0;
            secondOperand = 0;
            currentOperation = null;
        }

        if (button.classList.contains('decimal')) {
            if (display.textContent.includes('.')) {
                decimalCount = 1;
            }
            if (decimalCount === 0) {
                display.textContent += '.';
                decimalCount++
            }
        }

        if (button.classList.contains('operator')) {
            firstOperand = parseFloat(display.textContent);
            decimalCount = 0;
            currentOperation = button.textContent;
            resetDisplay = true;
        }

        if (button.classList.contains('equal')) {
            secondOperand = parseFloat(display.textContent);
            decimalCount = 0;
            resetDisplay = true;
            let result = evaluate();
            result = secondOperand;
            firstOperand = result;
            if (secondOperand === 0 && currentOperation === '/') {
                alert("You cannot divide by 0!");
                display.textContent = '0';
                firstOperand = 0;
                secondOperand = 0;
                decimalCount = 0;
                currentOperation = null;
                resetDisplay = false;
            }
        }

        
    })
})

