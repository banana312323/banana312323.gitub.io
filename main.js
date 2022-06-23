function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};
var colors = ['red', 'blue', 'rgb(15,159,17)'];
var x = 0;
var element0 = document.querySelector('#first');
var element1 = document.querySelector('#second');
var element2 = document.querySelector('#third');

while (true){
  element0.style.backgroundColor = colors[1];
  sleep(100);
  element1.style.backgroundColor = colors[2];
  sleep(100);
  element2.style.backgroundColor = colors[0];
  sleep(1000);
  element0.style.backgroundColor = colors[2];
  sleep(100);
  element1.style.backgroundColor = colors[0];
  sleep(100);
  element2.style.backgroundColor = colors[1];
  sleep(1000);
  element0.style.backgroundColor = colors[0];
  sleep(100);
  element1.style.backgroundColor = colors[1];
  sleep(100);
  element2.style.backgroundColor = colors[2];
  sleep(1000);
};