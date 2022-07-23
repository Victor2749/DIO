var currentNumerWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

const sub = document.getElementById('sub');
sub.addEventListener('click', decrement);

const add = document.getElementById('add');
add.addEventListener('click', increment);

function increment() {
  if (currentNumber < 10) {
    currentNumber = currentNumber + 1;
    currentNumerWrapper.innerHTML = currentNumber;
  }
}

function decrement() {
  if (currentNumber > 0) {
    currentNumber = currentNumber - 1;
    currentNumerWrapper.innerHTML = currentNumber;
  }
}
