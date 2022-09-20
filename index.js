const calculator = document.querySelector(".calculator");
const display = document.querySelector(".display");
let numA = "";
let numB = "";
let operation = "";
let currentNum = "";

display.innerText = "0";

calculator.addEventListener("click", function (event) {
  if (event.target.classList.contains("display")) return;
  if (event.target.classList.contains("calculator")) return;

  if (isOp(event)) {
    switch (getText(event)) {
      case "C":
        display.innerText = "0";
        currentNum = "";
        numA = "";
        numB = "";
        operation = "";
        break;
      case "←":
        currentNum = Math.trunc(+display.innerText / 10);
        display.innerText = currentNum;
        break;
      case "+":
        operation = "+";
        numA = currentNum;
        currentNum = "";
        break;
      case "–":
        operation = "–";
        numA = currentNum;
        currentNum = "";
        break;
      case "×":
        operation = "×";
        numA = currentNum;
        currentNum = "";
        break;
      case "÷":
        operation = "÷";
        numA = currentNum;
        currentNum = "";
        break;
      case "=":
        numB = currentNum;
        display.innerText = op(numA, numB, operation);
        operation = "";
        numA = "";
        numB = "";
        currentNum = display.innerHTML;
    }
  } else {
    currentNum += getText(event);
    display.innerText = +currentNum;
  }
});

function op(a, b, op) {
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
