/* // A child class will use methods with same name that are most closely associated with it.
// It is true that JavaScript supports overriding, not overloading. 
// When you define multiple functions that have the same name, 
// the last one defined will override all the previously defined ones and 
// every time when you invoke a function, the last defined one will get executed */


// Method Overloading is done in a single class in which one class having different definitions of a method. 
// Method Overriding is done between two classes having an IS-A (Inheritance) relationship between them. ... 
// The return type of a method can be the same or different in the case of Method Overloading.

class Vehicle{
    drive(){
        console.log('You drive the vehicle.')
    }
}class Car extends Vehicle{
    drive(){
        console.log('You drive the car')
    }
}class RaceCar extends Car{
    drive(){
        console.log('You drive the racecar')
    }
}
let racecar = new RaceCar();
racecar.drive();