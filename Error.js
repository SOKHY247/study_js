//  Error = An Object that is create to represent a problem that occurs 
        //    Occurs often with user input or establishing a connection.


//   try {}  = Encloses code that might potentially cause an error
//  catch {} = catch and handle any thrown errors from try {}
//  finaly {} = (optional) Always executes. Used mostly for cleanup 
                //   ex. close files , close connections, release resources etc.

        // console.log(x);

        // console.log("You have an reached the end of the code.");

// try {
//   let a = 10;
//   let b = a / 0;
//   console.log(b);
// } catch (error) {
//   console.log("Error in calculation: " + error.message);
// } finally {
//   console.log("finaly code ");
// }

// try {
//         console.log("hello all brother");
// } catch (error) {
//         console.log(error);
// }
// finally{
//         console.log("finaly block executed");
// }
// console.log("End of code execution.");

try {
const dividend = window.prompt("Enter the dividend:");
const divisor = window.prompt("Enter the divisor:");

if(divisor == 0) {
        throw new Error("Division by zero is not allowed.");
}

if(isNaN(dividend) || isNaN(divisor)) {
        throw new Error("Invalid input. Please enter numeric values.");
}

const result = dividend / divisor;
        console.log(result);
} catch (error) {
        console.log(error.message);
}
console.log("End of code execution.");