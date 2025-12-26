 // callback = a function that is passed as an argument
 //              to another function .
 // used to handle asynchronous operations
 // 1. Reading a files
 // 2. Network requests
 // 3. Interacting with database
 // "hey , when you're done, call this next.

 // function hello(callback){
 //    console.log("hello!, I love u very much")
 //     callback();
 // }
 // function goodbye(){
 //    console.log("Goodbye , i want to say to  u")
 // }
 // function Mynum(){
 //    console.log("Hey , I miss u...")
 // }
 //
 // hello(Mynum)
 // hello(goodbye);

 sum(displayPage, 3,4)
 function sum (callback, x , y){
    let result = x * y;
    callback(result);
 }
 function displayConsole(result){
    console.log(result);
 }
 function  displayPage(result){
    document.getElementById("Myh1").textContent = result;
 }