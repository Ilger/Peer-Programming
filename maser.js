


let calcButton = document.getElementById('calcButton');
let buttonStyle = document.querySelector('.btn-primary')
<<<<<<< HEAD
let formOutput = document.getElementById('formCalculate');
let resultInput = document.getElementById('resultInputField');


let buttonEvent = function (executeFn) {
  calcButton.addEventListener('click', executeFn);
}
let eventTimer = function (timerCode) {
  setTimeout(timerCode, 5000);
}

=======
let formInput = document.getElementById(formCalculate);
let sum1and2;
>>>>>>> refs/stash

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


<<<<<<< HEAD
=======
calcButton.addEventListener('click' , function () {
  let calcInput1 = document.getElementById("formCalculate").elements[0].value;
  let calcInput2 = document.getElementById("formCalculate").elements[1].value;
  let sum1and2 = parseFloat(calcInput1) + parseFloat(calcInput2);
  return sum1and2;
  setTimeout(function () {
    document.getElementById("calcBoard").innerHTML = 'here is your result: <br>   ' + sum1and2;
  }, 5000);
>>>>>>> refs/stash


//calculate input
let calcEvent = function () {
  let calcInput1 = formOutput.elements[0].value;
  let calcInput2 = formOutput.elements[1].value;

  let sum1and2 = parseFloat(calcInput1) + parseFloat(calcInput2);

  let printResult = function () {
    resultInput.innerHTML = '<p class="text-success">Your result =</><p class="text-primary"> ' + sum1and2 + '</p>' ;
  }

  eventTimer(printResult);
}
buttonEvent(calcEvent);
