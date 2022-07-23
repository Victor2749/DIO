var currentNumerWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
  currentNumber = currentNumber + 1;
  currentNumerWrapper.innerHTML = currentNumber;
}

function decrement() {
  currentNumber = currentNumber - 1;
  currentNumerWrapper.innerHTML = currentNumber;
}
