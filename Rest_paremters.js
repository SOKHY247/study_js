//
// rest parameters = (....rest) allow  a function work a variable
//                   number of argument by building them into an array

//                   spread  = expands an array into separate elements
//                   test    = bundles separate element into an array

// function operFride(...foods){
//     console.log(foods)
// }
// function getFood(...foods){
//     return foods;
// }
//
//
// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "sushi";

// operFride(food1, food2, food3, food4);
// const foods = getFood(food1, food2, food3, food4)
//
// console.log(foods)

// function sum(...numbers){
//
//     let result =0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result;
// }
// function getAverage(...numbers){
//
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result / numbers.length;
// }

// const total = sum(1,2,3,4,5);
// console.log(`Your total is = $${total}`)

// const total = getAverage(75, 100,85,90,50);
// console.log(`You has total = $${total}`)

// Ex3
// function combineStrings(...strings){
//     return strings.join("")
// }
// const fullName = combineStrings("Mr", "Spb","SBS", "BSC","KPC");
// console.log(fullName)

// function rollDice(){
//
//     const numofDice = document.getElementById("numofDice").value;
//     const diceResult = document.getElementById("diceResult");
//     const diceImpages = document.getElementById("diceImages");
//
//     const values = [];
//     const imapes =[];
//
//     for (let i=0; i<numofDice; i++){
//         const value = Math.floor(Math.random()* 6) + 1;
//         values.push(value);
//         imapes.push(`<img src="Dice_image/${value}.png>" alt="Dice ${value}"`);
//     }
//     diceResult.textContent = `dice: ${values.join(', ')}`;
//     diceImpages.innerHTML = imapes.join(' ')
// }
