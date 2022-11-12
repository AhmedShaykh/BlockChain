(function () {
    console.log("Not so secret though.");
})();

let functionVariable = function () {
    console.log("secret though.");
};

functionVariable();

// =========== SetTimeOut Function =========== //

let youGotThis = function () {
    console.log("You're doing really well, keep coding!");
};

setTimeout(youGotThis, 1000);

function timer() {
    setTimeout(() => {
        console.log("Delayed for 1 second.");
    }, 3000);
}

timer();

// =========== Closure Function =========== //

let a = 4;

console.log(myFunction());

function myFunction() {
    return a * a;
};

function makeFunc() {
    const name = 'Mozilla';

    function displayName() {
        console.log(name);
    };

    return displayName;
};

const myFunc = makeFunc();
myFunc();

function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(2));

// =========== SetInterval Function =========== //

let setinterval = function () {

    console.log("You're doing really well, keep coding!");

};

setInterval(setinterval, 1000);