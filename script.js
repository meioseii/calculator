const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

let decimalCount = 0;



buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            if (display.textContent[0] == 0) {
                display.textContent = '';
                display.textContent += button.textContent
            } else {
                display.textContent += button.textContent;
            }
        }


    })
})

console.log(display.textContent.length)