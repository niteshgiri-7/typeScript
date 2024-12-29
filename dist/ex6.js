"use strict";
/*
6. Type Assertion
Exercise:
Write a function getLength that takes an argument which could be either a string or an array and returns its length.
Use type assertion to implement this, ensuring TypeScript knows which type is being handled in specific cases.

*/
const getLength = (arg) => {
    if (typeof arg === "string") {
        return arg.length;
    }
    return arg.length;
};
const myString = "nitesh";
const myArray = [1, 2, 3, 4, 5];
console.log(getLength(myArray));
console.log(getLength(myString));
