let calcButton = document.getElementById('calcButton');
let buttonStyle = document.querySelector('.btn-primary')

let clicky = function () {
  console.log("Clicky!");

  buttonStyle.classList.add('btn-success');
  buttonStyle.classList.remove('btn-primary');

}

calcButton.addEventListener('click', clicky);
