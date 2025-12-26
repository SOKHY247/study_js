  //   .map () = accept a callback and applies that function
  //             to each element of an array, then return a new array


//   const numbers = [1,2,3,4,5,6];
//   const squares = numbers.map(square)
//   const cubes = numbers.map(cube);
//
//   console.log(squares);
//
//
//
// function square(element){
//     return Math.pow(element,3);
// }
//
//
// function cube(element){
//     return Math.pow(element,2);
// }

  // const students =["Sokhy","Kaka","looko"]
  // const studentsUpper = students.map(uppercase)
  // const studentslowercase= students.map(lowercase)
  //
  // console.log(studentslowercase)
  //
  //
  //
  // function uppercase(element){
  //   return element.toUpperCase();
  // }
  //
  // function lowercase(element){
  //   return element.toUpperCase();
  // }

  const dates = ["2024-01-01","2023-10-02","2025-11-11"]
  const formatteDates = dates.map(formatDates);

  function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`
  }
  console.log(formatteDates);