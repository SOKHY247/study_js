// logical operator = use to combine or manipulate boolean values (true or false )

//       AND = &&
//       OR  = ||
//       OR  = !

// const temp = 10;
// if (temp >0 || temp <= 30 ) {
//     console.log("The weather is GoGo")
// }else {
//     console.log("The weather is bad!..")
// }

// const isSunny = true

// if (!isSunny){
//     console.log("It is Cloudy!")
// }else {
//     console.log("It is Sunny")
// }

// = assignment operator
// == comparison operator (compare if values are equal)
//=== strict equality operator (compare if values & datatypes are equal)
/* != inequality operator
*/
/*  !== strict inequality operator */

// const PI = "3.14";

// if (PI !== "3.14"){
//     console.log("That is not PI")
// }else{
//     console.log("It is PI")
// }

// while  loop = repeat some code while some condition is true

// let username = " ";
// while(username === " "){
//     console.log(`You didn't enter your name `)
//     break;
// }
// console.log(`Hello ${username}`)

let loggedIn = false ;
let username ;
let password;
while (!loggedIn){
    username = window.prompt(`Enter your username: `)
    password = window.prompt(`Enter your password:`)
} if (username === "myUsername" && "myPassword"){
    loggedIn = true;
    console.log("You are loggedIn Successful!...")
}else{
    console.log("Invalid credentials!, Please try again...")
}