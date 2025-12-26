 // this person1 = reference to the object where this is used
 //                ( the object dependent on the immediate context)
 //                  person.name = this.name

 const person1 = {
    name : "Sokhy",
     favfood: "krkor",
     sayhello: function (){
        console.log(`hey! i am a single ${person1.name}`)
     },
     eat: function (){
        console.log(`${this.name} is eating ${this.favfood}`)
     }

 }
 const person2 = {
     name : "John",
     favfood: "Pizza",
     sayhello: function (){
         console.log(`hey! i am a single ${person1.name}`)
     },
     eat: function (){
         console.log(`${this.name} is eating ${this.favfood}`)
     }

 }

person1.eat()
 // person1.sayhello();
 person2.eat()
 // person2.sayhello();
