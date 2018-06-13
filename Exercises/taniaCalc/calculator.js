//when reset is pressed = clear all
var Arr = [];
var number = 0;
var temptTotal = 0;
var lastOperator = "";

//As long as there is no operator used or an equal sign, keep adding numbers to Arr
//When operators are being used => add info to a var (string?), use Number to turn into a nr 
//=>empty array or new one?
document.getElementById("0").addEventListener("click", function () {
  //checking if the zero is a leading zero
  //it is not a leading zero so we need to store it
  InputNumber("0");
});
var One =document.getElementById("1");
One.addEventListener("click", function () {
  InputNumber("1");
});

var Two = document.getElementById("2");
Two.addEventListener("click", function () {
  InputNumber("2");
});

var Three = document.getElementById("3");
document.getElementById("3").addEventListener("click", function () {
  InputNumber("3");
});

var Four = document.getElementById("4");
document.getElementById("4").addEventListener("click", function () {
  InputNumber("4");
});

var Five = document.getElementById("5");
document.getElementById("5").addEventListener("click", function () {
  InputNumber("5");
});

var Six = document.getElementById("6");
document.getElementById("6").addEventListener("click", function () {
  InputNumber("6");
});

var Seven = document.getElementById("7");
document.getElementById("7").addEventListener("click", function () {
  InputNumber("7");
});

var Eight = document.getElementById("8");
document.getElementById("8").addEventListener("click", function () {
  InputNumber("8");
});

var Nine = document.getElementById("9");
Nine.addEventListener("click", function () {
  InputNumber("9");
});

// =========OPERATORS===========

var Plus = document.getElementById("+");
Plus.addEventListener("click", function () {
  RegisterOperator("+");
});

var Minus = document.getElementById("-");
Minus.addEventListener("click", function () {
  RegisterOperator("-");
});

var Divide = document.getElementById(":");
Divide.addEventListener("click", function () {
  RegisterOperator("/");
});

var Multiply = document.getElementById("x");
Multiply.addEventListener("click", function () {
  RegisterOperator("*");
});

var Equal = document.getElementById("=");
Equal.addEventListener("click", function () {
  //no need to stack this on the array we just need to calculate if possible
  // Arr.push("=");
  ExecuteCalculation(number, Number(Arr.join('')), lastOperator, "=")
  //display the calculated value
  var Display = document.getElementById("Display");
  Display.textContent = number;
  //clearing the array
  Arr = [];
  //write to log for debugging purposes
  console.log(number);
});

var ResetAll = document.getElementById("reset");
ResetAll.addEventListener("click", function () {
  //clearing the display
  Display.textContent = 0;
  //clearing the input that is being entered right now
  Arr = [];
  //clearing global variables for operator an number as well
  number = 0;
  lastOperator = "";
});


//the functions that will handle the heavy lifting
function RegisterOperator(operator) {
  //if there was no operator entered yet no need to do a calculation. Storing the operator for a later point when we have the second number
  switch (lastOperator) {
    case "":
      lastOperator = operator;
      number = Number(Arr.join(''));
      console.log(lastOperator);
      break;
    case "=":
      ExecuteCalculation(number, Number(Arr.join('')), operator, lastOperator);
      lastOperator = operator;
      console.log(lastOperator);
      break;
    case "+":
    case "-":
    case "*":
    case "/":
      if (Arr.length > 0) {
        ExecuteCalculation(number, Number(Arr.join('')), operator, operator);
      }
      lastOperator = operator;
      console.log(lastOperator);
      break;
  }
  //clear the array to receive a new number
  Arr = [];
  //display the calculated value
  var Display = document.getElementById("Display");
  Display.textContent = number;
  //write to log for debugging purposes
  console.log(number);
}

function ExecuteCalculation(firstNumber, secondNumber, operator, lastOperatorEntered) {
  switch (operator) {
    case "+":
      number = firstNumber + secondNumber;
      break;
    case "-":
      number = firstNumber - secondNumber;
      lastOperator = lastOperatorEntered;
      break;
    case "*":
      if (lastOperator != "=") {
        number = firstNumber * secondNumber;
      }
      break;
    //this one will still return an error if you try to div by 0 but whatever
    case "/":
      if (lastOperator != "=") {
        number = firstNumber / secondNumber;
      }
      break;
    case "=":
      lastOperator = lastOperatorEntered;
      break;
    //no operator was entered before result = input
    default:
      number = firstNumber + secondNumber;
      break;
  }
}

function InputNumber(input) {
  if (input == "0" && Arr.length == 0) {
    console.log("leading zero no need to store it");
  } else {
    //adding number to array
    Arr.push(input);
    //prepping display output
    var NumStr = (Arr.join(''));
    //selecting display output
    var Display = document.getElementById("Display");
    //changing display output
    Display.textContent = NumStr;
    console.log(NumStr);
  }
}