// ========= Local Variable Function ========= //

function testAvailability() {
    let y = "I'll return";
    console.log("Available here:", y);
    return y;
};

let z = testAvailability();
console.log("Outside the function:", z);

function doingStuff() {
    if (true) {
        let x = "Var Local"; // PUT Let Result will be Error
    }

    console.log(x);
};

doingStuff();

// function doingStuffx() {
//     if (true) {
//         let x = "Let Local";
//         console.log(x);
//     }
// };

// doingStuffx();

// function doingStuffX() {
//     if (true) {
//         const data = "Const Local";
//         console.log(data);
//     }
// };

// doingStuffX();

// ========= Global Variable Function ========= //

// let globalVar = "Accessible everywhere!";
// console.log("Outside function:", globalVar);

// function creatingNewScope(x) {
//     console.log("Access to global vars inside function:", globalVar);
// };

// creatingNewScope("some parameter");
// console.log("Still available:", globalVar);

// let x = "global";

// function doingstuff() {
//     let x = "local";
//     console.log(x);
// }

// doingstuff();
// console.log(x);

// let a = "global";

// function stuff(a) {
//     console.log(a);
// };

// stuff("Param");

// function confuseReader() {
//     x = "Guess my scope...";
//     console.log("Inside the function:", x);
// };

// confuseReader();
// console.log("Outside of function:", x);

// // ========= Invoked Function ========= //

// (function () {
//     console.log("IIFE!");
// })();

// (() => {
//     console.log("run right away");
// })();