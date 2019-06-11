


let calcButton = document.getElementById('calcButton');
let buttonStyle = document.querySelector('.btn-primary')
let formOutput = document.getElementById('formCalculate');
let resultInput = document.getElementById('resultInputField');
let inputError = document.getElementById('inpusterror');

let errorStyle = function(){
  inputError.style.color = 'red';
  inputError.style.display = 'block';
}
let removeError = function () {
  inputError.style.display = 'none';
}

let calcInput1Value = formOutput.elements['calcInputfield1'].value;
let calcInput2Value = formOutput.elements['calcInputfield2'].value;
let chosenOperator = formOutput.elements['selectOperator'].value;


function VarOperator(op) { //you object containing your operator
    this.operation = op;

    this.evaluate = function evaluate(param1, param2) {
        switch(this.operation) {
            case "+":
                return param1 + param2;
            case "-":
                return param1 - param2;
            case "*":
                return param1 * param2;
            case "/":
                return param1 / param2;
            case '%':
                return param1 % param2
        }
    }
}


let vo = new VarOperator(chosenOperator); //initial operation: addition
let sum1and2 = vo.evaluate(parseFloat(calcInput1Value),parseFloat(calcInput2Value));

console.log(chosenOperator)

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

//print result
let resultEvent = function () {
  let printResult = function () {
  resultInput.innerHTML = '<p class="text-success">Your result:</p><span class="text-primary"> ' + calcInput1Value + ' ' +chosenOperator + ' ' + calcInput2Value + ' = ' + sum1and2 + '</span>' ;
  calcInput1Value = "";
  calcInput2Value = "";
  }
  eventTimer(printResult);
}
buttonEvent(resultEvent);




//costum error event
let costumError = function() {
  if (isNaN(sum1and2)) {
  inputError.textContent = 'Empty inputfield';
  errorStyle();
  }
  eventTimer(removeError);
}
buttonEvent(costumError);

let divideZero = function () {
  if (calcInput2Value == 0 && chosenOperator == '/') {
    inputError.textContent = 'Divide by 0 is illegal';
    errorStyle();
  }
  eventTimer(removeError);
}
buttonEvent(divideZero);
