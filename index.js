const calculator = document.querySelector(".calculator");
const display = document.querySelector(".display");
let operation = "";
let previousOperation = "";
let runningTotal = "0";
let currentNum = "0";

display.innerText = "0";

calculator.addEventListener("click", function (event) {
  if (event.target.classList.contains("display")) return;
  if (event.target.classList.contains("calculator")) return;

  if (isOp(event)) {
    switch (getText(event)) {
      case "C":
        display.innerText = "0";
        runningTotal = "0";
        operation = "";
        currentNum = "0";
        break;
      case "←":
        currentNum = Math.trunc(+display.innerText / 10);
        display.innerText = currentNum;
        break;
      case "+":
        previousOperation = operation;
        operation = "+";
        runningTotal = op(runningTotal, currentNum, previousOperation);
        currentNum = "0";
        break;
      case "–":
        previousOperation = operation;
        operation = "–";
        runningTotal = op(runningTotal, currentNum, previousOperation);
        currentNum = "0";
        break;
      case "×":
        previousOperation = operation;
        operation = "×";
        runningTotal = op(runningTotal, currentNum, previousOperation);
        currentNum = "0";
        break;
      case "÷":
        previousOperation = operation;
        operation = "÷";
        runningTotal = op(runningTotal, currentNum, previousOperation);
        currentNum = "0";
        break;
      case "=":
        runningTotal = op(runningTotal, currentNum, operation);
        display.innerText = runningTotal;
        currentNum = runningTotal;
        previousOperation = "";
        operation = "";
    }
  } else {
    currentNum += getText(event);
    display.innerText = +currentNum;
  }
  console.log(runningTotal);
});

function op(a, b, op) {
  if (op === "") return b; // first op is with only one number so just return it.
  a = Number.parseInt(a);
  b = Number.parseInt(b);
  if (op === "+") return a + b;
  if (op === "–") return a - b;
  if (op === "×") return a * b;
  if (op === "÷") return a / b;
}

function isOp(event) {
  return event.target.classList.contains("operation");
}

function getText(event) {
  return event.target.innerText;
}
