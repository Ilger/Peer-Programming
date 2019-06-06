let calcButton = document.getElementById('calcButton');
let buttonStyle = document.querySelector('.btn-primary')

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

calcButton.addEventListener('click', btnSpinnerIcon)
