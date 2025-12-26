 // destructuring = extract values from array and object,
 //                 then assign them to variable in convenient way
 //               = [] to perform array destructuring
 //               = {} to perform object destructuring

 //             Example 1
 // swap the value of two variables

//  let a = 1;
// let b = 2;
//  [a, b] = [b,a];
// console.log(a)
//  console.log(b)

 // Example 2
 // swap 2 element in an array

//  const colors = ["red", "blue","yellow", "green","black"];
//
// [colors[0], colors[4]] = [colors[4], colors[0]]
//
//  console.log(colors)

 // Example 3
 // assign array elements to variable

//  const colors = ["red", "blue","yellow", "green","black","red_1", "blue_2","yellow_3"];
// const [firstColor, secondColor,thirdColor,...extraColors ]= colors;
//
// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);

//  Example 4
//  extract values from object
//  const person_1 ={
//     firstName : "sokhy",
//      LastName : "Van",
//      age       : 30,
//      job      : "Software Development"
//
//  }
//
//  const person_2 ={
//      firstName : "sokhy",
//      LastName : "Van",
//      age       : 30,
//
//
//  }
//  const {firstName, LastName ,age,job= "Software Development_2"} = person_2
//
//  console.log(firstName);
// console.log(LastName);
// console.log(age)
//  console.log(job)

//  -----------Example 5--------------
//  destructure in function parameters

 function displayPerson({firstNmae, lastName, age ,  job= "Web development"}){
    console.log(`Name : ${firstNmae} ${lastName}`);
    console.log(`Age  : ${age}`);
    console.log(`Job  : ${job}`)

 }

 const person_1 = {
    firstName : "Sokhy",
     lastName : "Van",
     age      : 20,
     job      : "Software Development"
 }
 const person_2 = {
    firstName : "Jonh",
     lastName : "Sun",
     age      : 23,

 }
 displayPerson(person_2);

