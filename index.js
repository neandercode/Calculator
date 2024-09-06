const display = document.getElementById("display");
const button = document.querySelectorAll("button");

let currentInput = "";
let operator = "";
let firstNumber = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (button.classList.contains("number")) {
      //handle number input
      currentInput += value;
      display.textContent = currentInput;
    } else if (button.classList.contains("operator")) {
      //handle operator input (check this line for current chatgpt code)
      operator = value;
      firstNumber = currentInput;
      currentInput = "";
    } else if (button.id === "equals") {
      //handle equals button
      const result = evaluate(firstNumber, operator, currentInput);
      display.textContent = result;
      currentInput = result;
    } else if (button.id === "clear") {
      //handle clear button
      currentNumber = "";
      firstNumber = "";
      operator = "";
      display.textContent = "";
    }
  });
});

function evaluate(num1, operator, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Error";
  }
}
