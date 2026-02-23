
//  NodeList = Static collection of HTML element by ( id class element)
//             Can be create by using querySeleteAll()
            // Similar to an array , but no (map , filter , reduce)
            // NodeList won't update to automatically rflect changes

// console.log(buttons)

// Add HTML /css / property
// buttons.forEach(button =>{
//     button.style.backgroundColor = "green";
//     button.textContent += "A"
// })

// Click event listener 

// buttons.forEach(button => {
//     button.addEventListener("click", event =>{
//         event.target.style.backgroundColor = "tomato"
//     })
// })

// buttons.forEach(button => {
//     button.addEventListener("mouseover", event =>{
//         event.target.style.backgroundColor = "tomato"
//     })
// })

// buttons.forEach(button => {
//     button.addEventListener("mouseout", event =>{
//         event.target.style.backgroundColor = "rgb(145, 179, 179)"
//     })
// })

// how to add an element

// const newBtn = document.createElement("button")// step 1
// newBtn.textContent = "Button 5";  // step 2
// newBtn.classList = 'myBtn';
// document.body.appendChild(newBtn)
// buttons = document.querySelectorAll(".myBtn")
// console.log(buttons)

let buttons = document.querySelectorAll(".myBtn")

// Remove
buttons.forEach(buttons =>{
    buttons.addEventListener("click", event =>{
        event.target.remove();
        buttons = document.querySelectorAll(".myBtn")
        console.log(buttons)
    })
})

