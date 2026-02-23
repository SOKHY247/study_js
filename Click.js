// eventListerner = Listen for specific events to create interactive web pages 
//                  events : click , mouseover , mouseout
                //  addEventListener (event , changeColor)


// const mybox = document.getElementById("mybox");
// const myBtn = document.getElementById("myBtn");

// function changeColor(event){
//     event.target.style.backgroundColor = "blue";
//     event.target.textContent = "OK! 👨‍💻"

// }
// mybox.addEventListener("click" , changeColor);
//  or style write
// myBtn.addEventListener("click", function(event){
//     mybox.style.backgroundColor = "blue";
//     mybox.textContent = "OK! 👨‍💻"
// })

//  or style write
// myBtn.addEventListener("click", (event) => { 
//     mybox.target.style.backgroundColor = "blue";
//     mybox.target.textContent = "OK! 👨‍💻"
// });

// myBtn.addEventListener("mouseover" , event => {
//     mybox.style.backgroundColor = "yellow";
//     mybox.textContent = 'Do you love me ? 😘'
// })
// myBtn.addEventListener("mouseout", event => {
//     mybox.style.backgroundColor = "lightgreen";
//     mybox.textContent = 'Please click me ? '
// })
// myBtn.addEventListener("mouseover" , event => {
//    mybox.style.backgroundColor = "blue";
//    mybox.textContent = 'click me ? '
// })


// eventListerner = Listen for specific events to create interactive web pages 
//                  events : keyup, keyup
                //  addEventListener (event , Callback)



// document.addEventListener("keydown", event =>{
//     mybox.textContent = "😘";
//     mybox.style.backgroundColor = "tomato"
//    // console.log(`Key down = ${event.key}`)
// })
// document.addEventListener("keyup", event =>{
//     mybox.textContent = "😊"
//     mybox.style.backgroundColor = " rgb(171, 206, 206)";
//    // console.log(`Key up = ${event.key}`)
// })

const mybox = document.getElementById("mybox");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    mybox.textContent = " 😯 ";
    mybox.style.backgroundColor = "tomato";
})

document.addEventListener("keydown", event => {
    mybox.textContent = " 😀 ";
    mybox.style.backgroundColor = "lightblue"
})
document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")){
        event.preventDefault(); // stop page from scrolling

        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }

        mybox.style.top = `${y}px`;
        mybox.style.left = `${x}px`;
    }
});

