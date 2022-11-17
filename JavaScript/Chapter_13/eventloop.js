console.log("Hi there");

setTimeout(() => console.log("Sorry I'm late"), 1000);

console.log(add(5, 5));

function add(x, y) {
    return x + y;
};

function addnum(a, b) {
    return a + b;
};

function average(a, b) {
    return addnum(a, b) / 2;
};

let callStack = average(10, 20);
console.log(callStack);

function foo(b) {
    const a = 10;
    return a + b + 2;
};

function bar(x) {
    const y = 2;
    return foo(x, y);
};

const baz = bar(8);
console.log(baz);

setTimeout(function timer() {
    console.log("Run Timer Function");
}, 2000);

console.log("Learning!");

setTimeout(function timeout() {
    console.log("Run Timeout Function");
}, 5000);

console.log("Event Loop!");