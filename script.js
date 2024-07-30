let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    secondOperand = '';
    display.innerText = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || '0';
}

function appendNumber(number) {
    currentInput += number;
    display.innerText = currentInput;
}

function appendOperator(op) {
    if (currentInput === '' && firstOperand === '') return;
    if (firstOperand === '') {
        firstOperand = currentInput;
        operator = op;
        currentInput = '';
    } else {
        if (currentInput !== '') {
            calculate();
            operator = op;
        }
    }
}

function calculate() {
    if (firstOperand === '' || currentInput === '') return;
    secondOperand = currentInput;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            return;
    }
    display.innerText = result;
    currentInput = result;
    firstOperand = '';
    secondOperand = '';
    operator = '';
}
