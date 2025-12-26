//  Switch = can be en efficient replacement to many else if statement 


// let day = 12;

// switch (day){
//     case 1 :
//         console.log("This is Monday")
//         break;
//     case 2 :
//         console.log("This is Tuesday ")
//         break;
//     case 3 :
//         console.log("This is Wednesday ")
//         break;
//     case 4 :
//         console.log("This is Thursday ")
//         break;
//     case 5 :
//         console.log("This is Friday ")
//         break;
//     case 6 :
//         console.log("This is Saturday ")
//         break;
//     case 7 :
//         console.log("This is Sunday ")
//         break;
//     default:
//         console.log("This is not day ! please check day again!!😒..")
// }

// let testScore = 33;
// let letterGrade;

// switch(true){
//     case testScore >=90:
//         letterGrade ="You get A+";
//         break;
//     case testScore >=80:
//         letterGrade = "You get B+";
//         break;
//     case testScore >=70:
//         letterGrade = "You get C+" ;
//         break;
//     case testScore >=60:
//         letterGrade = "You get D+" ;
//         break;
//     case testScore >=50:
//         letterGrade = "You get E+";
//         break;
//     default:
//         letterGrade = "You get F";

// }
// console.log(letterGrade);

// string method = allow you to manipulate and with text (strings)

// let userName = "sokhy van";
// console.log(userName.charAt(1))
// console.log(userName.indexOf("s"))
// console.log(userName.length)

// userName = userName.trim() not Spec
// console.log(userName)

// userName = userName.toUpperCase();
//  userName = userName.repeat(2)
// let result = userName.endsWith(" ") spec in string method
// // let result = userName.includes(" ") spec in the word
// // console.log(userName)

// if (result){
//     console.log("Your username can't include ' ' ")
// }else{
//     console.log(userName)
// }

// let phoneNumber = "123-456-7890"

// phoneNumber = phoneNumber.replaceAll("-","/")
// phoneNumber = phoneNumber.padEnd(20,"0")
// console.log(phoneNumber)

// string slicing = creating a substring from a portion of another string 
//  string.slice(start, end)

// const fullName = "SokhyVan Coding"
// let firstName = fullName.slice(-1)

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName  = fullName.slice(fullName.indexOf(" ") + 1);
// console.log(firstName);
// console.log(lastName);

// const email = "sokhyvan@gmail.com";

// let userName = email.slice(0, email.indexOf(" @ "));
// let extension = email.slice(email.indexOf(" ") +1 )

// console.log(userName);
// console.log(extension);

