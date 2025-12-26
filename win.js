//  How to accept user input
// 1. Easy way = window prompt box
// professional way = HTML form + html

// let userName = window.prompt("Enter your name: ");
// console.log("User Name: " + userName);
// let username;
// document.getElementById("mysubmit").onclick = function(){
//     username = document.getElementById("mytext").value;
//     document.getElementById("myh1").innerText = `welcome to my website, ${username}`;


// }

// Types conversion = change the datatype of a variable to another datatype (string , number , boolean)

// let username = 5
// console.log(username)

//  const = a variable that cannot be changed
const pi = 3.14159;
let radius;
let circumference;

document.getElementById("mysubmit").onclick = function(){
    radius  = document.getElementById("mytext").value;
    circumference = 2 * pi * radius
    document.getElementById("result").textContent = `Answer here is : ${circumference}cm `;
}



