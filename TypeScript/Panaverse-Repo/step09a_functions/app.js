"use strict";
//Named function
function add(x, y) {
    return x + y;
}
console.log(add(4, 2));
//Anonymous function
let myAdd1 = function (x, y) {
    return x + y;
};
console.log(myAdd1(4, 4));
//Anonymous function with explict type
let myAdd2 = function (x, y) {
    return x + y;
};
console.log(myAdd1(2, 2));
//type names dont matter
let myAdd3 = function (x, y) {
    return x + y;
};
console.log(myAdd1(5, 5));
//Lambda functions															
let myAdd4 = (a, b) => a + b;
//output will be: var myAdd4 = function(a : number, b : number) {return a + b};
console.log(myAdd1(6, 6));
function greeter(callback) {
    callback("Hello 2023!");
}
;
const greetFunction = (greeting) => {
    console.log(greeting);
};
greeter(greetFunction);
