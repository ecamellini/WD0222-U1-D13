// A MEMORY FOR OUR CALCULATOR
// This is the memory where we store the previous results.
let lastResult;
let lastOperation;
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

function clearResult() {
  document.getElementById('result').value = "0"
}

function saveOperationAndValue(event) {
  let clickedButton = event.target

  lastOperation = clickedButton.innerText
  lastResult = document.getElementById('result').value

  clearResult()
}

function showNextResult() {
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
      resultNode.value = firstNumber + secondNumber
      break

    case "-":
      // Do something
      resultNode.value = firstNumber - secondNumber
      break

    case "*":
      resultNode.value = firstNumber * secondNumber
      // Do something
      break

    case "/":
      // Do
      resultNode.value = firstNumber / secondNumber
      break
  }
}
