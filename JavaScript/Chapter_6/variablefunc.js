// ========= Local Variable Function ========= //

function testAvailability() {
    let y = "I'll return";
    console.log("Available here:", y);
    return y;
};

let y = testAvailability();
console.log("Outside the function:", y);

function doingStuff() {
    if (true) {
        var x = "Var Local"; // PUT Let Result will be Error
    }

    console.log(x);
};

doingStuff();

function doingStuffx() {
    if (true) {
        let x = "Let Local";
        console.log(x);
    }
};

doingStuffx();

function doingStuffX() {
    if (true) {
        const data = "Const Local";
        console.log(data);
    }
};

doingStuffX();

// ========= Global Variable Function ========= //

let globalVar = "Accessible everywhere!";
console.log("Outside function:", globalVar);

function creatingNewScope() {
    console.log("Access to global vars inside function:", globalVar);
};

creatingNewScope();
console.log("Still available:", globalVar);

let x = "global";

function doingstuff() {
    let x = "local";
    console.log(x);
}

doingstuff();
console.log(x);

let a = "Global";

function stuff(a) {
    console.log(a);
};

stuff("Param");
stuff(a);

function confuseReader() {
    val = "Guess my scope...";
    console.log("Inside the function:", val);
};

confuseReader();
console.log("Outside of function:", val);

// ========= Invoked Function ========= //

(function () {
    console.log("IIFE!");
})();

(() => {
    console.log("run right away");
})();