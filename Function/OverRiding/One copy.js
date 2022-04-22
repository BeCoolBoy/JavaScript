// A child class will use methods with same name that are most closely associated with it.

class Vehicle{
    drive(){
        console.log('You drive the vehicle.')
    }
}class Car extends Vehicle{
    drive(){
        console.log('You drive the car')
    }
}
let car = new Car();
car.drive();