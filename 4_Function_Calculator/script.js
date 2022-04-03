const operands = ["/", "*", "-", "+"];

function appendToDisplay(val) {
  var displayElement = document.querySelector("#display");
  if (
    hasOperand(val) &&
    hasOperand(
      displayElement.innerText.substring(displayElement.innerText.length - 1)
    )
  )
    return alert("Error: Connot chain operands.");
  if (hasOperand(val)) return (displayElement.innerText += ` ${val} `);
  if (displayElement.innerText == "0") return (displayElement.innerText = val);
  if (
    hasOperand(
      displayElement.innerText.substring(displayElement.innerText.length - 1)
    )
  )
    return (displayElement.innerText += ` ${val}`);
  displayElement.innerText += val;
}

function press(val) {
  appendToDisplay(val);
}

function clr() {
  var displayElement = document.querySelector("#display");
  displayElement.innerText = "0";
}

function hasOperand(val) {
  return operands.includes(val);
}

function calculate() {
  var displayElement = document.querySelector("#display");

  var calculation = displayElement.innerText.split(" ");

  while (calculation.indexOf("*") != -1) {
    let index = calculation.indexOf("*");
    let subcalc =
      parseFloat(calculation[index - 1]) * parseFloat(calculation[index + 1]);
    calculation.splice(index - 1, 3, subcalc);
  }
  while (calculation.indexOf("/") != -1) {
    let index = calculation.indexOf("/");
    let subcalc =
      parseFloat(calculation[index - 1]) / parseFloat(calculation[index + 1]);
    calculation.splice(index - 1, 3, subcalc);
  }
  while (calculation.indexOf("+") != -1) {
    let index = calculation.indexOf("+");
    let subcalc =
      parseFloat(calculation[index - 1]) + parseFloat(calculation[index + 1]);
    calculation.splice(index - 1, 3, subcalc);
  }
  while (calculation.indexOf("-") != -1) {
    let index = calculation.indexOf("-");
    let subcalc =
      parseFloat(calculation[index - 1]) - parseFloat(calculation[index + 1]);
    calculation.splice(index - 1, 3, subcalc);
  }

  displayElement.innerText = calculation[0];
}
