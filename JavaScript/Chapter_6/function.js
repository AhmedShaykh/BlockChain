nameOfTheFunction("Learning"); // ====== Hoisting ====== //

function nameOfTheFunction(learn) {
    console.log(`${learn} Basic Functions`);
};

var learn;

let varContainingFunction = function () {
    let varInFunction = "I'm in a function.";
    console.log("hi there!", varInFunction);
};

varContainingFunction();

function tester(para1, para2) {
    return para1 + " " + para2;
};

const arg1 = "argument 1";
const arg2 = "argument 2";

console.log(tester(arg1, arg2));

function addTwoNumbers(x, y) {
    console.log(x + y);
};

addTwoNumbers(4, 56);
addTwoNumbers("Twitter ", 1);

function addNumbers(x = 2, y = 3) {
    console.log(x + y);
};

addNumbers();
addNumbers(6, 6);
addNumbers(10);;