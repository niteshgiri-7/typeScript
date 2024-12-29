# TypeScript Practice Questions

## 1. Types and Type Aliases
Exercise:
- Create a type alias called Person with the following properties:
name (string)
age (number)
isStudent (boolean)

- Write a function introduce that accepts a parameter of type Person and logs a message like: "Hi, I'm [name], [age] years old, and I am [not] a student."

## 2. Interfaces
Exercise:
- Create an interface Car with the following properties:
brand (string)
model (string)
year (number)
startEngine() (method that returns a string: "Engine started")
- Implement this interface in a class called SportsCar.
- Create an instance of SportsCar and call its startEngine method.

## 3. Functions
Exercise:
- Write a function addNumbers that takes two numbers and returns their sum.
- Use the function type syntax to define the type of the function.
- Add a second overload for addNumbers that works with strings (concatenates them).

## 4. Objects
Exercise:
- Define a TypeScript object book with the following properties:
title (string)
author (string)
price (number)
discount (optional, number)
- Write a function calculateDiscountedPrice that takes the book object and a discount percentage, and calculates the discounted price. If no discount is provided, return the original price.

## 5. Classes
Exercise:
Create a class Rectangle with the following:
Properties: width (number), height (number)
Methods:
area() – returns the area of the rectangle.
perimeter() – returns the perimeter of the rectangle.
Create another class Square that extends Rectangle.
Add a constructor to initialize the square using a single side length.
Create instances of both classes and calculate their area and perimeter.

## 6. Type Assertion
Exercise:
- Write a function getLength that takes an argument which could be either a string or an array and returns its length.
- Use type assertion to implement this, ensuring TypeScript knows which type is being handled in specific cases.

## 7. Combination of Concepts
Exercise:
- Create a type alias Address with properties city (string), country (string), and zipCode (number).
- Create a class User with the following:
Properties: name (string), age (number), and address (of type Address).
- A method greet() that logs a message like "Hi, my name is [name], and I live in [city], [country]."
- Write a function isAdult that accepts an object of type User and returns true if the user's age is 18 or above.


