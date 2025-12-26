//  Element selection  = Method used to target and manipulate HTML elements.
                        // They allow you to select one or multiple HTML elements
                        // from the DOM (Document Object Model)

// 1 . document.getElementByid()     | Element or null
// 2. document.getElementsByName()   | HMTL Collection
// 3. document.getElementsByTagName()| HTML Collection
// 4. document.querySelector()       | fist Element or null
// 5. document.querySelectorAll()    | NodeList

// const my_web = document.getElementById("my-web");
// my_web.style.backgroundColor = "lightblue";
// my_web.style.padding = "20px";
// my_web.style.borderRadius = "8px";
// my_web.style.textAlign = "center";

// ======================document.getElementsByName()=======================
// console.log(my_web);

// const fruits = document.getElementsByClassName("fruits");


// Array.from(fruits).forEach((fruit)=>{
//     fruit.style.backgroundColor = "yellow";
// });
// fruits.forEach();
// for(let fruit of fruits){
//     fruit.style.backgroundColor = "yellow";
// }
// console.log(fruits);

// const Headings = document.getElementsByTagName("h3");
// const liHeadings = document.getElementsByTagName("li");

// for(let heading of Headings){
//     heading.style.backgroundColor = "green";
// }
    
// for(let liHeading of liHeadings){
//     liHeading.style.backgroundColor = "lightgray";
// }
// Array.from(Headings).forEach(Heading=> {
//     Heading.style.backgroundColor = "green";
// });

// Array.from(liHeadings).forEach(liHeading =>{
//     liHeading.style.backgroundColor = "lightgray"; 
// });
// console.log(Headings);  

//  ===========================================How to use querySelector()
// const myweb = document.querySelector("li")
// myweb.style.backgroundColor = "orange";


// ========================================== how to use querySelectorAll()
const foods = document.querySelectorAll("li");

foods.forEach((food)=>{
    food.style.backgroundColor = "lightgray";
});
// foods[0].style.backgroundColor = "pink";
// foods[1].style.backgroundColor = "lightgreen";
// foods[2].style.backgroundColor = "lightgray";

console.log(foods);