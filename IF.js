// let age =25;

// if (age>=18 ){
//     console.log("You are an adult.");
// }else{
//     console.log("You are a minor.");
// }

// let age = 20;
// let isStudent = true;


// if (age <= 18) {
//     console.log("You get a student discount!!!.");

    
// }else if (age >=20){
//     console.log("I love u...😒")

// }

// else {
//     console.log("You are not eligible for a student discount.");    
// }
// }

// else {
//     console.log("No discount available.");
// }

const mytext = document.getElementById("mytext")
const mySubmit = document.getElementById("mySubmit")
const resultElement = document.getElementById("resultElement")
let age;



mySubmit.onclick = function() {
    age = mytext.value;
    age = Number(age);

    if(age >=100){
        resultElement.textContent = `You are Too to enter this site. `
    }
    else if(age == 0){
        resultElement.textContent = `You can'tenter. You are just born.`
    }
    else if(age >= 18){
        resultElement.textContent = `You are old enough to enter this site.`
    }
    else if(age < 0 ){
        resultElement.textContent = `Your age can't be belows 0`
    }
    else {
        resultElement.textContent = `You must be 18+ to enter this site.`
    }

}