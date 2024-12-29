"use strict";
// Exercise:
/*

2. Interfaces
Exercise:
Create an interface Car with the following properties:
brand (string)
model (string)
year (number)
startEngine() (method that returns a string: "Engine started")
Implement this interface in a class called SportsCar.
Create an instance of SportsCar and call its startEngine method.
*/
class SportsCar {
    brand;
    model;
    year;
    constructor(b, m, y) {
        this.brand = b;
        this.model = m;
        this.year = y;
    }
    startEngine() {
        return "Engine started";
    }
}
const myCar = new SportsCar("ferrari", "newModel", 2024);
console.log(myCar.startEngine());
