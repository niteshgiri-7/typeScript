/*
3. Functions
Exercise:
Write a function addNumbers that takes two numbers and returns their sum.
Use the function type syntax to define the type of the function.
Add a second overload for addNumbers that works with strings (concatenates them).
*/

//-----------blunt way by coercing-----------
/*
const addNumbers = (
  a: number | string,
  b: number | string
): number | string => {
  return String(a) + String(b);
};

console.log(addNumbers(2, 3));
console.log(addNumbers("hello", 1));
console.log(addNumbers("hello", "world"));
*/

function addNumbers(a:number,b:number):number;
function addNumbers(a:string,b:string):string;

function addNumbers(a:number|string,b:number|string){
  if(typeof a==="number" && typeof b==="number") return a+b;
  if(typeof a==="string" && typeof b==="string") return a+b;
  
  throw new Error("Invalid combination of arguments");
}


console.log(addNumbers(2, 3));
// console.log(addNumbers("hello", 1));  no matching overload
console.log(addNumbers("hello", "world"));
