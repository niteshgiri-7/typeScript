"use strict";
/*
3. Functions
Exercise:
Write a function addNumbers that takes two numbers and returns their sum.
Use the function type syntax to define the type of the function.
Add a second overload for addNumbers that works with strings (concatenates them).
*/
function addNumbers(a, b) {
    if (typeof a === "number" && typeof b === "number")
        return a + b;
    if (typeof a === "string" && typeof b === "string")
        return a + b;
    throw new Error("Invalid combination of arguments");
}
console.log(addNumbers(2, 3));
// console.log(addNumbers("hello", 1));  no matching overload
console.log(addNumbers("hello", "world"));
