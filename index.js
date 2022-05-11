// A MEMORY FOR OUR CALCULATOR
// This is the memory where we store the previous results.
let lastResult = null;
let lastOperation = null;
// These variables are declared outside every function.
// This means that:
// -- They will be visible, available, for the entire program
// -- We can read them and modify them from any function

function addNumberToResult(event) {
  let clickedNode = event.target

  let numberPressed = clickedNode.innerText
  let result = document.getElementById('result')

  if (result.value === "0") {
    // First number we press
    result.value = numberPressed
  } else {
    result.value += numberPressed // We appen the char numberpressed to the output
  }
}

function clearMemory() {
  lastOperation = null;
  lastResult = null;
}

function clearResult() {
  document.getElementById('result').value = "0"
}

function clearAll() {
  clearMemory()
  clearResult()
}

function saveOperationAndValue(event) {
  let clickedButton = event.target

  lastOperation = clickedButton.innerText

  if(lastResult === null) {
    lastResult = document.getElementById('result').value
  } else {
    executeLastOperation()
  }

  clearResult()
}

function executeLastOperation() {
  let resultNode = document.getElementById('result')
  let currentResult = resultNode.value
  // We have:
  // lastResult -- the first number
  // lastOperation -- operation to perform
  // currentResult -- the second number
  // THEY ARE ALL STRINGS

  let firstNumber = parseFloat(lastResult)
  let secondNumber = parseFloat(currentResult)

  switch(lastOperation) {
    case "+":
      // Do something
      lastResult = firstNumber + secondNumber
      break

    case "-":
      // Do something
      lastResult = firstNumber - secondNumber
      break

    case "*":
      lastResult = firstNumber * secondNumber
      // Do something
      break

    case "/":
      // Do
      lastResult = firstNumber / secondNumber
      break
  }
}

function showResult() {
  executeLastOperation()
  let resultNode = document.getElementById('result')
  resultNode.value = lastResult

  // After clicking equals ans showing the result
  // we want to restart, no saved operations/results
  clearMemory()
}
