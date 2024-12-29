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

interface Car {
  brand: string;
  model: string;
  year: number;
  startEngine(): string;
}

class SportsCar implements Car {
  brand: string;
  model: string;
  year: number;
  constructor(b: string, m: string, y: number) {
    this.brand = b;
    this.model = m;
    this.year = y;
  }
  startEngine(): string {
    return "Engine started";
  }
}

const myCar = new SportsCar("ferrari", "newModel", 2024);

console.log(myCar.startEngine());
