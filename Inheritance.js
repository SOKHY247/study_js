 // Inheritance = allows a new class to inheritance properties and methods
 //               from an existing class ( parent -> child )
 //               helps with code reusability

 class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is cat eating rice !! `)
    }
    sleep(){
        console.log(`This ${this.name} is dod sleeping tonight!!`)
    }

 }
 class Rabbit extends Animal{
    name = "rabbit";

    run(){
        console.log(`This ${this.name} is running!`)
    }

 }
 class Fish extends Animal{
    name = "Bebey";

     swim(){
         console.log(`This ${this.name} is swimming!`)
     }
 }
class Hawk extends Animal{
    name = "Liliaha";

    fly(){
        console.log(`This ${this.name} is flying!`)
    }
}
const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(fish.alive);
fish.eat();
console.log("=============")
fish.sleep();
 console.log("=============")
fish.swim();
