 // getter = special methods that makes a property readable
 // setter = special methods that makes a property writeable
 //validate and modify a values when reading / writing a property

 // class Rectangle{
 //
 //    constructor(width, height) {
 //        this.width = width;
 //        this.height = height;
 //    }
 //
 //    set width(newWidth){
 //        if(newWidth >0){
 //            this._width = newWidth;
 //        }
 //        else {
 //            console.log("width must be a positive number")
 //        }
 //    }
 //
 //     set height(newHeight){
 //         if(newHeight >0){
 //             this._height = newHeight
 //         }
 //         else {
 //             console.log("width must be a positive number")
 //         }
 //     }
 //
 //     get width(){
 //        return this._width.toFixed(2);
 //     }
 //     get height(){
 //        return this._height.toFixed(2);
 //     }
 //     get area(){
 //        return this._width * this._height.toFixed(2);
 //     }
 // }
 //    const rectangle = new Rectangle(2,34)
    // rectangle.width = 1000;
    // rectangle.height = "pizza";
    // console.log(rectangle.width);

    // console.log(rectangle.width)
    // console.log(rectangle.height)
    // console.log(rectangle.area)


 class Person {
     constructor(FirstName, Lastname, age) {
         this.FirstName = FirstName;
         this.LastName = Lastname;
         this.age = age;
     }

     set FirstName(newFirstName) {
         if (typeof newFirstName === "string" && newFirstName.length > 0) {
             this._FirstName = newFirstName;
         } else {
             console.log("First name must be a non-empty string")
         }

     }

     // set FullName(newLastName) {
     //     if (typeof newLastName === "string" && newLastName.length > 0) {
     //         this._LastName = newLastName;
     //     } else {
     //         console.log("First name must be a non-empty string")
     //     }
     // }

     set LastName(newLastName) {
         if (typeof newLastName === "string" && newLastName.length > 0) {
             this._LastName = newLastName;
         } else {
             console.log("First name must be a non-empty string")
         }
     }

     set age(newAge) {
         if ( typeof newAge=== "number" && newAge>=0){
             this._age = newAge;
         }
         else {
             console.log("Age must be a non-negative number")
         }

     }
     get FirstName(){
         return this._FirstName ;
     }

     get LastName(){
         return this._LastName ;
     }
     get Fullname (){
         return this._FirstName + " " + this._LastName;
     }
     get age(){
         return this._age;
     }

 }
 const person = new Person("Sokhy","Van",20)
 console.log(`My is FirstName:  ${person.FirstName}`)
 console.log(`My is lastName :  ${person.LastName}`)
 console.log(`My is FullName : ${person.Fullname}`)
 console.log(`My is Age      :  ${person.age}`)