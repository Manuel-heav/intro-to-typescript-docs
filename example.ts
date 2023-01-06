// Type Annotations

    // let myName: string = "Aman";
    // let isCoolL: boolean = true;
    // let myNum: number = 42;

    // function add(a : number,b: number) :number
    // {
    //     return a+b;
    // }

    // console.log(add(5, 4));

// Inferred Types


let myName = "Aman";
let isCool = true;
let myNum = 42;


function add(a : number,b: number)
{
    return a+b;
}

console.log(add(5, 4));



    // So basically let's have an array of numbers
const numbers =  [1,2,34,4,6];
    // This is a number array and if I try to push a string like

    // numbers.push("Hi"); //This will get me an error because "Hi" is not a string which would have worked with vanilla js

// Union Types
    // What if we need to make an array that will contain both numbers and strings
// const numbersAndStrings: (string | number)[] = [1,2,3, "Beamie", "Manuel"] -> This is the annotation but it since it's inferred we dont need to
const numbersAndStrings = [1,2,3, "Beamie", "Manuel"];

const theAnswer: string | number = "42";

console.log(numbersAndStrings)


// Objects and Interfaces

interface Person{
    name: string;
    favNumber: number;
}

const person = {
    name: "Manuel",
    favNumber: 42,
};

function greet(person: Person){
    return  `Hello ${person.name}`;
}

console.log(greet({
    name: "Manuel",
    favNumber: 42,
}))

// Optional Properties

// Classes

// Generics

// any, unknown, never

// Type Assertions

// @ts-ignore / @ts-nocheck
