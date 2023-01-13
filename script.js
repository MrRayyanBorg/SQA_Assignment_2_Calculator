// Get the display element and the buttons
const display = document.getElementById("display");

// Define variables for the display value, pending value, and current operation
let displayValue = "0";
let pendingValue;
let evaluation;

// Function to append value to the display
function appendToDisplay(value) {
  if (displayValue === "0") {
    displayValue = value;
  } else {
    displayValue += value;
  }
  display.value = displayValue;
}

// Function to perform the operation
function performOperation(value) {
  switch (value) {
    case "+":
      pendingValue = add(pendingValue, displayValue);
      displayValue = "0";
      evaluation = "+";
      break;
    case "-":
      pendingValue = subtract(pendingValue, displayValue);
      displayValue = "0";
      evaluation = "-";
      break;
    case "*":
      pendingValue = multiply(pendingValue, displayValue);
      displayValue = "0";
      evaluation = "*";
      break;
    case "/":
      pendingValue = divide(pendingValue, displayValue);
            displayValue = "0";
      evaluation = "/";
      break;
    case "=":
      if (pendingValue && evaluation) {
        displayValue = String(eval(pendingValue + evaluation + displayValue));
        pendingValue = undefined;
        evaluation = undefined;
      }
      break;
    case "c":
      displayValue = "0";
      pendingValue = undefined;
      evaluation = undefined;
      break;
    default:
      break;
  }
  display.value = displayValue;
}

// Function to perform the operations
function add(pending, current) {
  if (pending) {
    return String(Number(pending) + Number(current));
  } else {
    return current;
  }
}

function subtract(pending, current) {
  if (pending) {
    return String(Number(pending) - Number(current));
  } else {
    return current;
  }
}

function multiply(pending, current) {
  if (pending) {
    return String(Number(pending) * Number(current));
  } else {
    return current;
  }
}

function divide(pending, current) {
  if (pending) {
    // Handle the divide by zero case
    if(current == 0){
      return "error";
    }else{
      return String(Number(pending) / Number(current));
    }
  } else {
    return current;
  }
}

// Function to perform clear the display
function clearDisplay() {
  displayValue = "0";
  pendingValue = undefined;
  evaluation = undefined;
  display.value = displayValue;
}

if (typeof module !== 'undefined') {
  module.exports = {   
    appendToDisplay,
    performOperation,
    add,
    subtract,
    multiply,
    divide,
    clearDisplay 
  };
}