 // setTimes() = function in javascript that allows you to schedule
 //              the execution of a function after an amount of time ( milliseconds)
 //               Times are approximate ( varies based on the workload of the javascript runtimes evn.
 //               setTimeout(callback, delay )
 //                clearTimeout(timeoutId) = can cancel a timeout before it triggers

 // setTimeout(function (){window.alert( " hello world !")},3000);
 // const timeout = setTimeout(() => window.alert("Hello world"), 3000);
// clearTimeout(timeout);

 let timeoutid;
 function myFunction(){
     timeoutid = setTimeout(() => window.alert("Hello world "), 3000)
     console.log("Started")
 }
 function myFunctionClear(){
     clearTimeout(timeoutid);
     console.log("Cleared")

 }