/*
TypeScript Generic Type Question
Question:
You are building a utility function that swaps the positions of two elements in an array without changing the original array. The function should be generic and work with any data type.

Requirements:

The function should take an array of any type and two indices as parameters.
It should return a new array with the specified elements swapped.
The function signature must use TypeScript generics to enforce type safety.
Task:
Define the function using TypeScript generics.
Ensure that the function does not mutate the original array.
The function should return a new array of the same type.
*/

type TSwap = <T>(array: T[], index1: number, index2: number) => T[];

const FnSwap: TSwap = (array, i1, i2) => {
 try {
     let newArray = [...array];
     if (newArray.length-1 < i1 || newArray.length-1 < i2 || i1 < 0 || i2 < 0)
       throw new Error("Invalid indices");
   
      
     [newArray[i1],newArray[i2]] = [newArray[i2],newArray[i1]]

    //  for (let i = 0; i < newArray.length; i++) {
    //    if (i === i1) newArray[i] = newArray[i2];
    //    else if (i === i2) newArray[i2] = newArray[i1];
    //  }
   
     return newArray;
 } catch (error) {
    return error.message;
 }
};

const arr: number[] = [1, 2, 3, 4];

console.log(FnSwap(arr,0,3));
// output [ 4, 2, 3, 1 ]
