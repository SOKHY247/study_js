 // .filter() = create a new array by filtering out element


//  let number = [1,2,3,4,5];
// let evenNums = number.filter(isEven);
// let OddNums = number.filter(idOdd)
//
// function isEven(element){
//     return element % 2 === 0;
// }
// function idOdd(element){
//     return element % 2 !==0;
// }
// console.log(OddNums);

 // 2 Example

//  const ages = [15,14,12,19,12,44];
// const adults = ages.filter(isAdult)
//  const childs = ages.filter(childrens)
//
// function isAdult(element){
//     return element >=18;
// }
// function childrens(element){
//     return element <18;
// }
//
// console.log(childs);

 // 3 Examples

 const words =["Khmer", "Cambodai", "oranges", "Babana", "pomegranate", "concunate"];

 const shortWords = words.filter(getShortwords)
 const longwords = words.filter(getLongowrds)

 const longworder = words.filter(getder)

 function getder(element){
     return element.length <=5;

 }
 console.log(longworder)

 function getShortwords(element){
    return element.length <= 7;
 }

 function getLongowrds(element){
    return element.length >4;
 }
 // console.log(longwords)