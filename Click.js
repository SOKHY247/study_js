// eventListerner = Listen for specific events to create interactive web pages 
//                  events : click , mouseover , mouseout
                //  addEventListener (event , changeColor)


const mybox = document.getElementById("mybox");
const myBtn = document.getElementById("myBtn");

// function changeColor(event){
//     event.target.style.backgroundColor = "blue";
//     event.target.textContent = "OK! 👨‍💻"

// }
// mybox.addEventListener("click" , changeColor);
//  or style write
myBtn.addEventListener("click", function(event){
    mybox.style.backgroundColor = "blue";
    mybox.textContent = "OK! 👨‍💻"
})

//  or style write
// myBtn.addEventListener("click", (event) => { 
//     mybox.target.style.backgroundColor = "blue";
//     mybox.target.textContent = "OK! 👨‍💻"
// });

myBtn.addEventListener("mouseover" , event => {
    mybox.style.backgroundColor = "yellow";
    mybox.textContent = 'Do you love me ? 😘'
})
myBtn.addEventListener("mouseout", event => {
    mybox.style.backgroundColor = "lightgreen";
    mybox.textContent = 'Please click me ? '
})
myBtn.addEventListener("mouseover" , event => {
   mybox.style.backgroundColor = "blue";
   mybox.textContent = 'click me ? '
})