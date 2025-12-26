  // function declaration = define a reusable block of code
  //                           that performs a specific task
// hello_1()
//   function hello_1(){
//     console.log("hello words")
//   }
  // function expressions  = a way to define functions as values or variable
  //  const hello = function (){
  //   console.log("hello")
  // }
  // OR styles
  // greeting();
  // const greeting =()=>{
  //   console.log("hello mum")
  // }

  setTimeout(function (){
      console.log("Hello")
  }, 3000)

  const number = [1,2,24,24,24,35,24,21]

  const squares = number.map(function (element){
      return Math.pow(element,2);
  })

  const cubes = number.map(function cube(element){
      return Math.pow(element,1)
  })
  function cube(element){
    return Math.pow(element,3)
  }
  const evenNum = number.filter(function (element){
      return element % 2 ===0;
  })

  // console.log(evenNum)


  const codeEven = number.filter(function (element){
      return element % 7===0;
  })
  const total = number.reduce(function (accumulator, element){
      return accumulator + element;
  })

console.log(total)

//   function expressions = a way to define function as values or variable

//   1. Callback in asynchronous operations
//   2. higher-Order functions
//   3. Closures
//   4. Event Listeners
