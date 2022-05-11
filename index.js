
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
