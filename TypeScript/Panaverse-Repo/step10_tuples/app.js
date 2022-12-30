"use strict";
//Tuple types have the advantage that you can accurately describe the type of an array of mixed types
let tuple = [1, "bob"];
console.log(tuple);
let secondElement = tuple[1]; // secondElement now has type 'string'
console.log(secondElement);
// Typically an array contains zero to many objects of a
// single type. TypeScript has special analysis around
// arrays which contain multiple types, and where the order
// in which they are indexed is important.
// These are called tuples. Think of them as a way to
// connect some data, but with less syntax than keyed objects.
// You can create a tuple using JavaScript's array syntax:
const failingResponse = ["Not Found", 404, "Fail"];
console.log(failingResponse);
// but you will need to declare its type as a tuple.
const passingResponse = ["{}", 200];
console.log(passingResponse);
if (passingResponse[1] === 200) {
    const localInfo = JSON.parse(passingResponse[0]);
    console.log(localInfo);
}
;
// This means TypeScript will provide the correct types at
// the right index, and even raise an error if you try to
// access an object at an un-declared index.
// passingResponse[2]; // undefined 
passingResponse[1];
const staff = [
    [0, "Adankwo", "adankwo.e@"],
    [1, "Kanokwan", "kanokwan.s@"],
    [2, "Aneurin", "aneurin.s@", "Supervisor"],
];
const payStubs = [
    [staff[0], 250],
    [staff[1], 250, 260],
    [staff[2], 300, 300, 400],
];
console.log(payStubs);
const monthOnePayments = payStubs[0][1] + payStubs[1][1] + payStubs[2][1];
console.log(monthOnePayments);
const monthTwoPayments = payStubs[1][2] + payStubs[2][2];
console.log(monthTwoPayments);
const monthThreePayments = payStubs[2][3];
console.log(monthThreePayments);
// You can use tuples to describe functions which take
// an undefined number of parameters with types:
// declare function calculatePayForEmployee(id: number, ...args: [...number[]]): number;
// calculatePayForEmployee(staff[0][0], payStubs[0][1]);
// calculatePayForEmployee(staff[1][0], payStubs[1][1], payStubs[1][2]);
let array = [1, 2, 3];
let array2 = [
    [1, 2, 3],
    [3, 4, 6]
];
let array3 = [
    [
        [1, 2, 3,],
        [4, 5, 6]
    ],
    [
        [6, 5, 4],
        [8, 3, 2]
    ]
];
console.log(array3);
