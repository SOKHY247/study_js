 // nested object = objects inside of other Objects.
//                   Allows you to represent more complex data structures
//                   Child Object is enclosed by a Parent Object
//                    Person{Address}, ContactInfo{}}
//                    ShoppingCart{keyboard{}, Mouse{} , Monitor{}}

//  Examples
//  const person = {
//     fullName : "Sopheak",
//      age : 12,
//      isStudent : true,
//     hobbies :  [
//         "KOkakola",
//         "st. chenk",
//         "cooking"
//  ],
//      address : {
//         stress : "123 PP",
//          city : "Bikini",
//          country : "Int Wanter"
//      }
//  }
//  for (const property in person.address){
//      console.log(person.address[property])
//  }
 // console.log(person.fullName)
 // console.log(person.hobbies[2])
 // console.log(person.address.stress)

 // class Person{
 //    constructor(name,age, ...address) {
 //        this.name = name ;
 //        this.age = age;
 //        this.address = new Address(...address)
 //    }
 // }
 // class Address{
 //    constructor(street, city, country) {
 //        this.street = street;
 //        this.city = city;
 //        this.country = country;
 //    }
 // }
 // const person_1 = new Person("Sokhy", 23, "123 Phnom Penh",
 //                                                                        "Bikini btoom",
 //                                                                        "Int. waters");
 //
 // const person_2 = new Person("Sopheak", 24, "123 Phnom Penh",
 //                                                                         "Bikini btoom",
 //                                                                        "Int. waters");
 //
 // const person_3 = new Person("Kakada", 21, "123 Phnom Penh",
 //                                                                        "Bikini btoom",
 //                                                                        "Int. waters");
 // console.log(person_1.address.country)

//  Example

 const fruits = [{name : "color",color: "red", calories : 14},
                                         {name : "raonge", color: "oranges", calories: 23},
                                         {name : "bana", color: "yellow", calories: 43},
                                         {name : "bana_2", color: "yellow", calories: 43},
                                         {name : "pineapples ", color: "white", calories: 33}]

 // fruits.push({name : "bana_KOKAKOLA", color: "white",calories: 82})

 // fruits.pop();

 // fruits.forEach(fruits => console.log(fruits))

 // console.log(fruits)
//  --------------Map -----------------

// const fruitName = fruits.map( fruits => fruits.name);
// const fruitColors = fruits.map(fruits => fruits.color);
// const fruitCalories = fruits.map(fruits => fruits.calories);
//
// console.log(fruitCalories)

 // =============Fitter ===========

//  const yellowFruits = fruits.filter(fruits => fruits.color ==="yellow");
// const lowCalFruits = fruits.filter(fruits => fruits.calories<50)
//  console.log(lowCalFruits)

  // -----------------reduce() -----------------
 const maxFruit = fruits.reduce((max, fruits) =>
                                                                fruits.calories > max.calories ? fruits : max)

 const minFruit = fruits.reduce((min, fruits) =>
                                                                fruits.calories < min.calories ? fruits : min)
 console.log(minFruit);