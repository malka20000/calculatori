let currentInput = '';
let previusInput = '';
let operation = null;

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

function setOperation(op) {
    operation = op;
    previusInput = currentInput;
    currentInput = ''
}

function calculate() {
    let result;
    const num1 = parseFloat(previusInput);
    const num2 = parseFloat(currentInput);

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;

        case '-':
            result = num1 - num2;
            break;
            
        case '*':
            result = num1 * num2;
            break;

        case '/':
            result = num1 / num2;
            break;

        default:
            return;    

      

           
            

                





    }

    currentInput = result.toString();
    operation = null;
    previusInput = '';
    document.getElementById('display').value = currentInput;
}

function clearDisplay(){
    currentInput = '';
    previusInput = '';
    operation = null;
    document.getElementById('display').value = '';
}
