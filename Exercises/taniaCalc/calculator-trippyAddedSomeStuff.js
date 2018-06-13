//var array = [] => array.join(' ') => Number(array)
//when reset is pressed = clear all

var Arr = [];
var number = 0;
var temptTotal = 0;
var lastOperator = "";

//As long as there is no operator used or an equal sign, keep adding numbers to Arr
//When operators are being used => add info to a var (string?), use Number to turn into a nr 
//=>empty array or new one?
var Zero = document.getElementById("0");
Zero.addEventListener("click", function () {
  //checking if the zero is a leading zero
  if (Arr.length != 0) {
    //it is not a leading zero so we need to store it
    Arr.push("0");
    //joining the array for the display
    var NumStr = (Arr.join(''));
    var Display = document.getElementById("Display");
    Display.textContent = NumStr;
    //writing to debug log
    console.log(NumStr);
  } else {
    //no need to store leading zeroes
    console.log("leading zero no need to store it")
  }
});

var One = document.getElementById("1");
One.addEventListener("click", function () {
  Arr.push("1");
  var NumStr = (Arr.join(''));
  var Display = document.getElementById("Display");
  Display.textContent = NumStr;
  console.log(NumStr);
});

var Two = document.getElementById("2");
Two.addEventListener("click", function () {
  Arr.push("2");
  var NumStr = (Arr.join(''));
  var Display = document.getElementById("Display");
  Display.textContent = NumStr;
  console.log(NumStr);
});

var Three = document.getElementById("3");
Three.addEventListener("click", function () {
  Arr.push("3");
  var NumStr = (Arr.join(''));
  var Display = document.getElementById("Display");
  Display.textContent = NumStr;
  console.log(NumStr);
});

var Four = document.getElementById("4");
Four.addEventListener("click", function () {
  Arr.push("4");
  var NumStr = (Arr.join(''));
  var Display = document.getElementById("Display");
  Display.textContent = NumStr;
  console.log(NumStr);
});

var Five = document.getElementById("5");
Five.addEventListener("click", function () {
  Arr.push("5");
  var NumStr = (Arr.join(''));
  var Display = document.getElementById("Display");
  Display.textContent = NumStr;
  console.log(NumStr);
});

var Six = document.getElementById("6");
Six.addEventListener("click", function () {
  Arr.push("6");
  var NumStr = (Arr.join(''));
  var Display = document.getElementById("Display");
  Display.textContent = NumStr;
  console.log(NumStr);
});

var Seven = document.getElementById("7");
Seven.addEventListener("click", function () {
  Arr.push("7");
  var NumStr = (Arr.join(''));
  var Display = document.getElementById("Display");
  Display.textContent = NumStr;
  console.log(NumStr);
});

var Eight = document.getElementById("8");
Eight.addEventListener("click", function () {
  Arr.push("8");
  var NumStr = (Arr.join(''));
  var Display = document.getElementById("Display");
  Display.textContent = NumStr;
  console.log(NumStr);
});

var Nine = document.getElementById("9");
Nine.addEventListener("click", function () {
  Arr.push("9");
  var NumStr = (Arr.join(''));
  var Display = document.getElementById("Display");
  Display.textContent = NumStr;
  console.log(NumStr);
});

// =========OPERATORS===========

var Plus = document.getElementById("+");
Plus.addEventListener("click", function () {
  //if there was no operator entered yet no need to do a calculation. Storing the operator for a later point when we have the second number
  if (lastOperator == "") {
    //store this operators input
    lastOperator = "+";
    //no operator was entered yet so we can assume that there wasn't any number in memory writing to number
    number = Number(Arr.join(''));
  } else {
    //store this operators input
    lastOperator = "+";
    //we need to do some calculations
    number += Number(Arr.join(''));
  }
  //clear the array to receive a new number
  Arr = [];
  //display the calculated value
  var Display = document.getElementById("Display");
  Display.textContent = number;
  //write to log for debugging purposes
  console.log(number);
});

var Minus = document.getElementById("-");
Minus.addEventListener("click", function () {
  Arr.push("-");
});

var Divide = document.getElementById(":");
Divide.addEventListener("click", function () {
  Arr.push("/");
});

var Multiply = document.getElementById("x");
Multiply.addEventListener("click", function () {
  Arr.push("*");
});

var Equal = document.getElementById("=");
Equal.addEventListener("click", function () {
  //no need to stack this on the array we just need to calculate if possible
  // Arr.push("=");
  switch (lastOperator) {
    case "+": number = number + Number(Arr.join('')); lastOperator = ""; break;
    //enter other operators here
    //no operator was entered before result = input
    default: number = Number(Arr.join('')); break;
  }
  //display the calculated value
  lastOperator = "=";
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



// ==== playing around with switch ====

// for (i=0; i<Arr.length;i++){
//     var TotalTemp = "";
//     var CurrentArrEl = Arr[i]; 
//     var TempNum = '';
//     var Result = TempNum;

//     switch (CurrentArrEl) {
//         case  '+':
//           TotalTemp = TotalTemp + TempNum;
//           break;
//         case '-':
//           TotalTemp = TotalTemp - TempNum;
//           break;
//         case ':':
//           TotalTemp = TotalTemp / TempNum;
//           break;
//         case 'x':
//           TotalTemp = TotalTemp * TempNum;
//           break;
//         default : 
//         
//       }
// }


// === other strat lol ===
// for (var i=0; i<=5; i++) {
//     var CurrentArrEl = Arr[i];
//     console.log(Arr[i]); }
//     var TempTot = 0;
//     if (CurrentArrEl <= 9) {
//         var NewArr = []; 
//         NewArr = NewArr.push(CurrentArrEl);
//         JoinedArr = NewArr.join('');
//         console.log(DisplayTemp);
//     } else if (CurrentArrEl === "-") {
//         TempTot = TempTot - JoinedArr;
//         console.log(TempTot);
//     }
// }
