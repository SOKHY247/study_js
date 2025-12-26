 // Class = (ES6 feature ) provides a more structured and cleaner
 //         way to works with objects compared to traditional constructor
 //          function ex. static keyword, encapsulation, inheritance

 // class Product{
 //    constructor(name, price){
 //        this.name =name;
 //        this.price =price;
 //    }
 //    displayProduct(){
 //        console.log(`Product Name : ${this.name}`)
 //        console.log(`Price Total  : $${this.price}`)
 //    }
 // }
 //
 // const product1 = new Product("Banana", 19.22)
 // const product2 = new Product("KOKAKOLA", 50.02)
 //
 // product1.displayProduct();

class Person{
    constructor(nameSchool, priceSchool){
        this.name = nameSchool;
        this.price = priceSchool;
    }
    displayPerson(){
        console.log(`My name school : ${this.name}`)
        console.log(`Price school :$${this.price.toFixed(2)}`)
    }
    calculateTotal(saleTex){
        return this.price + (this.price * saleTex)
    }
}
const saleTex = 0.50;
const person1 = new Person("NUM",800);

person1.displayPerson();

const total = person1.calculateTotal(saleTex);
console.log(`Total price ( with tax ) : $${total.toFixed(2)}`)


