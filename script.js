



let screen = document.getElementById('screen');
let screenValue = '';

function appendNumber(number) {
    screenValue += number;
    screen.value = screenValue;
}

function appendOperator(operator) {
    screenValue += ` ${operator} `;
    screen.value = screenValue;
}

function calculateResult() {
    try {
        screen.value = eval(screenValue.replace(/×/g, '*').replace(/÷/g, '/'));
        screenValue = screen.value;
    } catch {
        screen.value = 'Error';
        screenValue = '';
    }
}

function clearScreen() {
    screenValue = '';
    screen.value = '';
}
