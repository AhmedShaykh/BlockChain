(function () {
    console.log("Not so secret though.");
})();

// =========== SetTimeOut Function =========== //

let youGotThis = function () {
    console.log("You're doing really well, Keep Coding!");
};

setTimeout(youGotThis, 1000);

function timer() {
    setTimeout(() => {
        console.log("Delayed for 3 second.");
    }, 3000);
}

timer();

// =========== Closure Function =========== //

function makeFunc() {

    const name = 'Mozilla';

    return function displayName() {
        console.log(name);
    };

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

    console.log("Keep coding!");

};

setInterval(setinterval, 1000);