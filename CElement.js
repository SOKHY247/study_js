// ------------------ Exmaple CElement.js ------------------

// step 1 create the the elments 

const newH1 = document.createElement('li');

// const newH1 = document.createElement('h1');
//  step 2 add attributes / properties / styles

newH1.textContent = 'Apple';
newH1.id = 'Apple';
newH1.style.fontWeight = 'bold';
newH1.style.backgroundColor = 'lightyellow';


// newH1.textContent = 'This is a new heading';
// newH1.id = 'heading1';
// newH1.style.color = 'blue';
// newH1.style.textAlign = 'center';
// newH1.style.backgroundColor = 'lightgray';

//  step 3 append the elements to the DOM

document.body.append(newH1)

//document.body.prepend(newH1);
// document.getElementById('box1').appendChild(newH1);

//document.getElementById("box1").append(newH1);
// document.getElementById("box1").append(newH1);

// const box2 = document.getElementById('box2');
// document.body.insertBefore(newH1, box1);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[1]);

//  step 4 Remove HTML Elements

//document.getElementById("box1").removeChild(newH1);


