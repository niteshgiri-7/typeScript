"use strict";
/*
3. Functions
Exercise:
Write a function addNumbers that takes two numbers and returns their sum.
Use the function type syntax to define the type of the function.
Add a second overload for addNumbers that works with strings (concatenates them).
*/
const addNumbers = (a, b) => {
    return String(a) + String(b);
};
addNumbers(2, 3);
addNumbers("hello", 1);
addNumbers("hello", "world");
