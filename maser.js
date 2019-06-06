


let calcButton = document.getElementById('calcButton');
let buttonStyle = document.querySelector('.btn-primary')
let formInput = document.getElementById(formCalculate);


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
  calcButton.innerHTML = '<i class="fas fa-spinner"></i> Calculating... ';
  let activteText = function () {
    calcButton.innerHTML = 'Calculate!';
  }
  eventTimer(activateText);
}
buttonEvent(btnSpinnerIcon);



//calculate input
let calcEvent = function () {
  let calcInput1 = document.getElementById("formCalculate").elements[0].value;
  let calcInput2 = document.getElementById("formCalculate").elements[1].value;

  let sum1and2 = parseFloat(calcInput1) + parseFloat(calcInput2);

  let printResult = function () {
    document.getElementById("calcBoard").innerHTML = 'here is your result: <br>   ' + sum1and2;
  }
  eventTimer(printResult);
}
buttonEvent(calcEvent);
