
function addNumberToResult(event) {
  let numberPressed = event.target.innerText
  let result = document.getElementById('result')

  if (result.value === "0") {
    result.value = numberPressed
  } else {
    result.value += numberPressed // We appen the char numberpressed to the output
  }
}

function clearResult() {
  document.getElementById('result').value = "0"
}
