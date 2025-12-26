 // forEach () = method used to iterate over the elements
 //               of an array and apply a specified function (callback)
 //                to each element
 //                array.forEach(callback);
 //                    element, index, array are provided

//  let numbers = [1,2,3,5,6,7,5];
//
//
// numbers.forEach(cube);
// numbers.forEach(display);
//

// function double(element, index, array){
//     array[index] = element * 2;
// }
// function triple(element, index, array){
//     array[index] = element * 3;
// }
//
// function square(element, index, array){
//     array[index] = element * 4;
// }

//  function cube(element, index, array){
//      array[index] = Math.pow(element, 3); // or element ** 2
//  }
// function display(element){
//     console.log(element);
// }





//  let Mynum = [1,2,3,4,5,6]
//
//  Mynum.forEach(NUM);
//
// function NUM(index){
//     console.log(index)
// }

 let fruits = ["ABEKHAO"];

fruits.forEach(lowercase);
fruits.forEach(display);

function uppercase(element, index, array){
    array[index] = element.toUpperCase();
}
function lowercase(element,index, array){
    array[index] = element.toLowerCase();
}
function display(element){
    console.log(element);
}
