// Exercise:

/*
1. Create a type alias called Person with the following properties:
name (string)
age (number)
isStudent (boolean)
Write a function introduce that accepts a parameter of type Person and logs a message like: "Hi, I'm [name], [age] years old, and I am [not] a student."
*/
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};
const introduce = (m: Person) => {
  const studentStatus = m.isStudent ? "a student" : "not a student";
  console.log(
    `Hi, I'm ${m.name}, ${m.age} years old, and I am ${studentStatus}`
  );
};

const obj: Person = {
  name: "Nitesh",
  age: 20,
  isStudent: false,
};

introduce(obj);
