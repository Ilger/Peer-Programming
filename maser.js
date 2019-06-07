


let calcButton = document.getElementById('calcButton');
let buttonStyle = document.querySelector('.btn-primary')
let formOutput = document.getElementById('formCalculate');
let resultInput = document.getElementById('resultInputField');
let inputError = document.getElementById('inpusterror');

let calcInput1Value = formOutput.elements['calcInputfield1'].value;
let calcInput2Value = formOutput.elements['calcInputfield2'].value;



let buttonEvent = function (executeFn) {
  calcButton.addEventListener('click', executeFn);
}
let eventTimer = function (timerCode) {
  setTimeout(timerCode, 5000);
}

//log clicky event
let clicky = function () {
  console.log("Clicky!");
}
buttonEvent(clicky);


//style event
let stylesToggelBtn = function () {
  buttonStyle.classList.add('btn-success');
  buttonStyle.classList.remove('btn-primary');

  let removeStyling = function () {
    buttonStyle.classList.add('btn-primary');
    buttonStyle.classList.remove('btn-success');
  }

  eventTimer(removeStyling);
}
buttonEvent(stylesToggelBtn);

//add icon + text inside buton on click
let btnSpinnerIcon = function () {
  calcButton.innerHTML = '<i class="fas fa-spinner"></i> Calculating...';

  let endText = function () {
    calcButton.innerHTML = 'Calculate!';
  }

  eventTimer(endText);
}
buttonEvent(btnSpinnerIcon);

//calculate input
//print result
let printResult = function () {
  let sum1and2 = parseFloat(calcInput1Value) + parseFloat(calcInput2Value);

  resultInput.innerHTML = '<p class="text-success">Your result =</><pclass="text-primary"> ' + sum1and2 + '</p>' ;
  eventTimer(printResult);
}
buttonEvent(printResult);


// 
//
// //costum error event
// let costumError = function() {
//   if (isNaN(sum1and2)) {
//   inputError.textContent = 'empty inputfield';
//   inputError.style.color = 'red';
//   inputError.style.display = 'block';
//   let removeErrorStyle = (function () {
//     document.getElementById('inpusterror').style.display = 'none';
//   }
//   eventTimer(removeErrorStyle);
// }
// buttonEvent(costumError);
