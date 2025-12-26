 // sort()    = method used to sort element of an array in place
 //              Sorts element as strings in lexicographic order, not alphabetical
 //               lexicographic = ( alphabet + number + symbols ) as strings

//  let numbers = [24,23,52,63,5,3,21,15,28,6,52,4,2,1,56,2,51,]
//  numbers.sort((a, b) => b-a);
// console.log(numbers)
//  const people = [{name: "AA",age: 12,gpa: 3.0},
//                                           {name: "BB", age:33,gpa:4.0},
//                                           {name: "CC", age : 22, gpa : 3.0},
//                                           {name: "DD", age : 44, gpa : 4.0},
//                                           {name : "EE", age : 33, gpa: 2.0}]
//  people.sort((a,b) => a.name.localeCompare(b.name));
// console.log(people)

 // Fisher - Yates algorithm
 const cards = ['B',2,52,63,3,7,5,8,9,45,54,22,66,33,'S', 'R','W', 'Y', 'U', 'Q']
 shuffle(cards);

console.log(cards);

function shuffle(array){
    for (let i = array.length - 1; i> 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random] , array[i]]
    }
}