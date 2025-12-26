// Function = A section of reusable code.
//            Declare code once, use it whenever you want.
//            Call the function to execute that code.

// function Happy( username, age){
//     console.log("Happy birthday to you ")
//     console.log("=============[ Here is line space code ]=============== ")
//     console.log( ` Happy birthday to dear ${username}!`)
//     console.log(`You are ${age} years old`)
// }
// Happy(24, "Sokhy");

// function add(x,y){
//     let result = x * y;
//     return result;
// }
// let answer = add(3,3);
// console.log(answer);

function add(x,y){
    return x + y;
}
// console.log(add(4,4))

function isEven(number){
    return number % 2 == 0 ? true: false;
}
// console.log(isEven(21))

function isValidEmail(email){

    // if (email.includes("@")){
    //     return true;
    // }
    // else {
    //     return false;
    // }
    return email.includes("@") ? true : false;
}
console.log(isValidEmail("sokhyVann@gmail.com"))