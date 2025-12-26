//  synchronous = Executes line by line, consevutively in a sequentail manner
            //  Code that waits for an operation to completed

// asynchronous = Allows multiple operations to be performed concurrently without wating 
            //   Does not block the execution flow and allows the program to continue 
            // (I / O operations, network requests, fetching data)
            // Handles with : Callbacks, Promises , Async / Await

function fun1(Callbacks){
    setTimeout(() => {console.log("Asynchronous Operation Completed"); 
                        Callbacks()}, 3000);


}

function func2() {  
console.log("Start");
console.log("Process Data");
console.log("End");
};
fun1(func2);
