"use strict";
// Exercise:
const introduce = (m) => {
    const studentStatus = m.isStudent ? "a student" : "not a student";
    console.log(`Hi, I'm ${m.name}, ${m.age} years old, and I am ${studentStatus}`);
};
const obj = {
    name: "Nitesh",
    age: 20,
    isStudent: false,
};
introduce(obj);
