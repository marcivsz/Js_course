const defaultResult = 0;
let currentReuslt = defaultResult;

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(opertor, resultBefore, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentReuslt;
    currentReuslt = currentReuslt + enteredNumber;
    createAndWriteOutput("+", initialResult, enteredNumber);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentReuslt;
    currentReuslt = currentReuslt - enteredNumber;
    createAndWriteOutput("-", initialResult, enteredNumber);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentReuslt;
    currentReuslt = currentReuslt / enteredNumber;
    createAndWriteOutput("/", initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentReuslt;
    currentReuslt = currentReuslt * enteredNumber;
    createAndWriteOutput("*", initialResult, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

outputResult(currentReuslt, calculationDescripion);
