const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

let decimalCount = 0;



buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            if (display.textContent === '0') {
                display.textContent = '';
                display.textContent += button.textContent
            } else {
                display.textContent += button.textContent;
            }
        }

        if (button.classList.contains('delete')) {
            if (display.textContent.length === 1) {
                display.textContent = 0;
                decimalCount = 0;
            } else {
                display.textContent = display.textContent.slice(0,-1);
            }
        }

        if (button.classList.contains('all-clear')) {
            display.textContent = 0;
            decimalCount = 0;
        }

        if (button.classList.contains('decimal')) {
            if (decimalCount === 0) {
                display.textContent += '.';
                decimalCount++
            }
        }
    })
})

console.log(display.textContent.length)