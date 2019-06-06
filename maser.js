let calcButton = document.getElementById('calcButton');
let buttonStyle = document.querySelector('.btn-primary')
let formInput = document.getElementById(formCalculate);

let clicky = function () {
  console.log("Clicky!");

}
calcButton.addEventListener('click', clicky);

let stylesToggelBtn = function () {
  buttonStyle.classList.add('btn-success');
  buttonStyle.classList.remove('btn-primary');

  setTimeout(function () {
    buttonStyle.classList.add('btn-primary');
    buttonStyle.classList.remove('btn-success');
  }, 5000);

}
calcButton.addEventListener('click', stylesToggelBtn)

let btnSpinnerIcon = function () {
  calcButton.innerHTML = '<i class="fas fa-spinner"></i> Calculating... ';
  setTimeout(function (){
    calcButton.innerHTML = 'Calculate!';
  }, 5000)

}
calcButton.addEventListener('click', btnSpinnerIcon);

calcButton.addEventListener('click' , function () {
  let calcInput1 = document.getElementById("formCalculate").elements[0].value;
  let calcInput2 = document.getElementById("formCalculate").elements[1].value;
  sum1and2 = parseFloat(calcInput1) + parseFloat(calcInput2);
  setTimeout(function () {
    document.getElementById("calcBoard").innerHTML = 'here is your result: <br>   ' + sum1and2;
  }, 5000);

});


calcButton.addEventListener('click', function () {

  let calcInput1 = document.getElementById("formCalculate").elements[0].value;
  let calcInput2 = document.getElementById("formCalculate").elements[1].value;
  let inputError = document.getElementById('inpusterror');

  if (isNaN(sum1and2)) {
  inputError.textContent = 'empty inputfield';
  inputError.style.color = 'red';
  inputError.style.display = 'block';
  setTimeout(function () {
    document.getElementById('inpusterror').style.display = 'none';
  }, 5000);
}
})
