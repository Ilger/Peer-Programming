


let calcButton = document.getElementById('calcButton');
let buttonStyle = document.querySelector('.btn-primary')
let formOutput = document.getElementById('formCalculate');
let resultInput = document.getElementById('resultInputField');
let inputError = document.getElementById('inpusterror');

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


var vo = new VarOperator(chosenOperator); //initial operation: addition
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
  resultInput.innerHTML = '<p class="text-success">Your result =</p><span class="text-primary"> ' + sum1and2 + '</span>' ;
  }
  eventTimer(printResult);
}
buttonEvent(resultEvent);




//costum error event
let costumError = function() {
  if (isNaN(sum1and2)) {
  inputError.textContent = 'empty inputfield';
  inputError.style.color = 'red';
  inputError.style.display = 'block';
  }
  let removeErrorStyle = function () {
    document.getElementById('inpusterror').style.display = 'none';
  }
  eventTimer(removeErrorStyle);
}
buttonEvent(costumError);
