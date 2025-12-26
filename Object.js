  //    object = a collection of related properties and / or  methods
  //             Can represent real world object ( people,products, places)
  //               object = {key:values,function()}

  const person_1 = {
    firName : "sokhy",
      lastName : "Van",
      age: 20,
      isStudent: true,
      sayHello: function (){
        console.log("hi!, I am smale")
      }

  }
  const person_2 = {
      firName : "sokhy",
      lastName : "Van",
      age: 20,
      isStudent: true,
      sayHello: function (){
          console.log("hi!, I am smale")
      },
      eat: () => console.log("Hey, excuse me , i want to say i love u..")

  }
  person_1.sayHello();
person_2.eat();
  // console.log(person.firName)
  // console.log(person.lastName)
  // console.log(person.age)
  // console.log(person.isStudent)

