let counter = 0;

function saveCounter() {
  localStorage.setItem('counter', counter);
}

function restoreCounter() {
  counter = localStorage.getItem('counter');
  if (counter === null) {
    counter = 0;
  } else {
    counter = parseInt(counter);
  }
  document.getElementById('counter').innerHTML = counter;
}

restoreCounter();

function increment() {
  counter++;
  document.getElementById('counter').innerHTML = counter;
  saveCounter();
}

function reset() {
  counter = 0;
  document.getElementById('counter').innerHTML = counter;
  saveCounter();
}

function goHome() {
  window.location.href = '/';
}