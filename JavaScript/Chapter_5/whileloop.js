let i = 0;

while (i < 10) {
    console.log(i);
    i++;
};

let session = ["Ahmed", "Usman", "Faiz", "Abdul Rehman", "Saad"];

let z = 0;

while (session[z]) {
    console.log(session[z]);
    z++;
};

let someArray = ["Ahmed", "Usman", "Faiz", "Abdul Rehman", "Saad", "Ashhar"];

let notFound = true;

while (notFound && someArray.length > 0) {

    if (someArray[0] === "Saad") {
        console.log("Found It!");
        notFound = false;
    }
    else {
        someArray.shift();
        console.log(someArray);
    }

};

let nr1 = 0;
let nr2 = 1;
let temp;

let fibonacciArray = [];

while (fibonacciArray.length < 25) {
    fibonacciArray.push(nr1);
    temp = nr1 + nr2;
    nr1 = nr2;
    nr2 = temp;
};

console.log(fibonacciArray);