//var array = [] => array.join(' ') => Number(array)
//when reset is pressed = clear all
var lastOperator="";
var Arr = [];
var total = 0;
//As long as there is no operator used or an equal sign, keep adding numbers to Arr
//When operators are being used => add info to a var (string?), use Number to turn into a nr 
//=>empty array or new one?

var Zero = document.getElementById("0");
Zero.addEventListener("click", function () {
  Arr.push("0");
  console.log(Arr);
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
  //voegen array samen en een nummer van maken
  var Num = Number(Arr.join(''));

  //de bereking maken
  //total = total + Num;
  //als het gelijk is aan nul

  //uitschrijven
  var Display = document.getElementById("Display");
  Display.textContent = total;
  console.log.total;




});

var Minus = document.getElementById("-");
Minus.addEventListener("click", function () {
  var num = 0;
  //als we een cijfer ingeven en de waarde is nog nul en dan een operator ingeven dan moeten we dit als initiele waarde opslagen
  //voegen array samen en een nummer van maken
  num = Number(Arr.join(''));

  //indien er een operator al voordien ingegeven was dan de bereking maken
  if(lastOperator==""){
    //waarde wegschrijven naar geheugen om later er een berekening mee te doen
    total=num;
  }else{
    //er is al een operator vooraf ingegeven dus doen we de bewerking,berekening of whatevah
    switch(lastOperator){
      case "+":total=total+num;break;
      case "-":total=total-num;break;
      case "x":total=total*num;break;
      case "/":total=total/num;break;
      case "=":;break;
    }
  }
  //we schrijven de operator weg voor de volgende bewerking
  lastOperator="-";
  Arr = [];
  
  //uitschrijven
  var Display = document.getElementById("Display");
  Display.textContent = total;
  console.log(total);
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
  Arr.push("=");
});

var ResetAll = document.getElementById("reset");
ResetAll.addEventListener("click", function () {
  Display.textContent = 0;
  Arr = [];
});



// ==== playing around with switch ====

// for (i=0; i<Arr.length;i++){
//     var totalTemp = "";
//     var CurrentArrEl = Arr[i]; 
//     var TempNum = '';
//     var Result = TempNum;

//     switch (CurrentArrEl) {
//         case  '+':
//           totalTemp = totalTemp + TempNum;
//           break;
//         case '-':
//           totalTemp = totalTemp - TempNum;
//           break;
//         case ':':
//           totalTemp = totalTemp / TempNum;
//           break;
//         case 'x':
//           totalTemp = totalTemp * TempNum;
//           break;
//         default : 
//         
//       }
// }


// === other strat lol ===
// for (var i=0; i<=5; i++) {
//     var CurrentArrEl = Arr[i];
//     console.log(Arr[i]); }
//     var total = 0;
//     if (CurrentArrEl <= 9) {
//         var NewArr = []; 
//         NewArr = NewArr.push(CurrentArrEl);
//         JoinedArr = NewArr.join('');
//         console.log(DisplayTemp);
//     } else if (CurrentArrEl === "-") {
//         total = total - JoinedArr;
//         console.log(total);
//     }
// }
