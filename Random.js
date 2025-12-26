// Random number generation utilities

const myButton = document.getElementById('myButton');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');



const min = 1;
const max = 100;

let randomNumber1;
let randomNumber2;
let randomNumber3;

myButton.onclick = function() {
    randomNumber1 = Math.floor(Math.random() * max) + min;
    randomNumber2 = Math.floor(Math.random() * max) + min;
    randomNumber3 = Math.floor(Math.random() * max) + min;

    label1.textContent = 'Random Number: ' + randomNumber1;
    label2.textContent = 'Random Number: ' + randomNumber2;
    label3.textContent = 'Random Number: ' + randomNumber3;


}