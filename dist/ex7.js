"use strict";
/*
7. Combination of Concepts
Exercise:
Create a type alias Address with properties city (string), country (string), and zipCode (number).
Create a class User with the following:
Properties: name (string), age (number), and address (of type Address).
A method greet() that logs a message like "Hi, my name is [name], and I live in [city], [country]."
Write a function isAdult that accepts an object of type User and returns true if the user's age is 18 or above.
*/
class User {
    name;
    age;
    address;
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    greet() {
        const { city, country, zipCode } = this.address;
        return `Hi my name is ${this.name}, and I live in ${city}, ${country}, ${zipCode}`;
    }
}
const isAdult = (user) => {
    return user.age > 18 ? true : false;
};
const address = {
    city: "bhaktapur(temp)",
    country: "Nepal",
    zipCode: 1234,
};
const newUser = new User("Nitesh", 20, address);
console.log(newUser.greet());
console.log(isAdult(newUser));
