 // static = key that defines properties or methods that belong to
 //          a class itself rather than the objects created
 //            from that class ( class owns anything static , not the objects)
 //
 // class Car {
 //    constructor(name) {
 //        this.name = name;
 //    }
 //    static hello(x){
 //        return "Hello world" +x.name;
 //    }
 //
 // }
 // const myCar = new Car("name")
 // document.getElementById("demo").innerHTML = Car.hello(myCar);

 //  Example 1
 // ====================================================================
 // class MathUnit{
 //    static PI = 3.14159;
 //
 //    static getDianater(radius){
 //        return radius * 2;
 //    }
 //    static getCircumferece(radius){
 //        return 2 * this.PI * radius;
 //    }
 //    static getArea(radius){
 //        return this.PI * radius * radius;
 //    }
 //
 // }
 //
 // console.log(MathUnit.PI)
 // console.log(MathUnit.getDianater(10))
 // console.log(MathUnit.getCircumferece(20))
 // console.log(MathUnit.getArea(10));

 //=======================================================

 class User{
    static usercount =0;

    constructor(username){
        this.username = username;
        User.usercount++
    }
    static getUsername(){
        console.log(`There are ${User.usercount} at Cambodia!`)
    }
    sayHello(){
        console.log(`Hello, my username ${this.username}`)
    }
 }
 const user1 = new User("Combodia");
 const user2 = new User("Phnom Penh");
 const user3 = new User("Kompong Chhnang")

 // console.log(user1.username);
 // console.log(user2.username);
 // console.log(user3.username);

 user1.sayHello();
 user2.sayHello();
 user3.sayHello();
 console.log("===============================");
 User.getUsername();

// console.log(User.usercount);
