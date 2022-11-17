
    const display = document.querySelector('.hesapMakinesi-input');
    const keys = document.querySelector('.hesapMakinesi-keys');

    let displayValue = '0';
    let firstValue = null;
    let operator = null;
    let waitingForSecondValue = false;
    

    updateDisplay();

            function updateDisplay() {
        display.value = displayValue;
            }

            keys.addEventListener('click', function (e) {
                const element = e.target;

                if (!element.matches('button')) return;

                if (element.classList.contains('operator')) {
                    var fir = firstValue;
                    var firs = displayValue;
                    var op = operator;
                    handleOperator(element.value);

                    updateDisplay();
                    if (element.value === '=') {
                        var his = [fir, op, firs, "=", displayValue];

                        return his;
                    }

                    return;
                }

                if (element.classList.contains('clear')) {
        clear();
                    updateDisplay();
                    return;
                }




                inputNumber(element.value);
                updateDisplay();
            });

            function handleOperator(nextOperator) {
                const value = parseFloat(displayValue);

                if (operator && waitingForSecondValue) {
        operator = nextOperator;
                    return;
                }

                if (firstValue === null) {
        firstValue = value;
                } else if (operator) {
                    const result = calculate(firstValue, value, operator);
                    const history1 = history(firstValue, value, operator);
                    displayValue = `${parseFloat(result.toFixed(7))}`;
                    firstValue = result;
                    let h = history1;
                }

                waitingForSecondValue = true;
                operator = nextOperator;

                console.log(displayValue, firstValue, operator, waitingForSecondValue);
            }

            function calculate(first, second, operator) {
                if (operator === '+') {

                    return first + second;
                } else if (operator === '-') {
                    return first - second;
                } else if (operator === '*') {
                    return first * second
                } else if (operator === '/') {
                    return first / second;
                }
                return second;
            }
            function history(first, second, operator) {
                return first;
            }

            function inputNumber(num) {
                if (waitingForSecondValue) {
        displayValue = num;
                    waitingForSecondValue = false;
                } else {
        displayValue = displayValue === '0' ? num : displayValue + num;
                }

                console.log(displayValue, firstValue, operator, waitingForSecondValue);
            }

            function clear() {
        displayValue = '0';
            }
        