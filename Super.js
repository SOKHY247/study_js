 // super = keyword is used in classes to call the constructor or
 //         access the properties and methods of a parent ( superclass )
 //         this = this object
 //         super = the parent

//  class Animal{
//
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
//     move(speed){
//         console.log(`The ${this.name} move at a speed of ${speed}mph`)
//
//     }
//  }
//  class Rabbit extends Animal{
//
//      constructor(name , age , runSpeed) {
//          super(name, age );
//          this.runSpeed = runSpeed;
//
//      }
//      run(speed){
//          console.log(`The ${this.name} can run`)
//          super.move(this.runSpeed)
//
//      }
//
//  }
//  class Fish extends Animal{
//     constructor(name , age , swimSpeed) {
//         super(name, age);
//         this.swimSpeed = swimSpeed;
//     }
//      swim(speed){
//          console.log(`The ${this.name} swim`)
//          super.move(this.swimSpeed)
//
//      }
//  }
//  class Hawk extends Animal{
//     constructor(name , age, flySpeed) {
//         super(name, age);
//         this.flySpeed = flySpeed;
//     }
//      fly(speed){
//          console.log(`The ${this.name} can fly`);
//          super.move(this.flySpeed)
//
//      }
//  }
//
//  const rabbit = new Rabbit("rabbit",2,50);
//  const fish = new Fish("fish",5,12);
//  const hawk = new Hawk("hawk", 4,100);
//
// hawk.fly();
 // console.log(fish.name);
 // console.log(fish.age);
 // console.log(fish.runSpeed);

 class Animal{
    constructor(name, age) {
        this.name = name ;
        this.age = age;
    }
    move(speed){
        console.log(`the ${this.name} move at a speed of ${speed}mph`)
    }

 }
 class Rabbit extends Animal{
    constructor(name, age,runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }
     run(){
         console.log(`the ${this.name} cat running`);
         super.move(this.runSpeed)
     }
 }
 class Fish extends Animal{
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
     swim(){
         console.log(`the ${this.name} cat swimming`);
         super.move(this.swimSpeed)
     }
 }
 const rabbit = new Rabbit("rabbit",12,45);
const fish = new Fish("fish", 22,33)
 // console.log(rabbit.name)
 // console.log(rabbit.age)
 // console.log(rabbit.runSpeed)
fish.swim();



