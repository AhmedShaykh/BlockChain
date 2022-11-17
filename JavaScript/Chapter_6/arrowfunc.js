const arrow = () => console.log("Arrow Function");

arrow();

const arrowAdd = (arg, arg2) => arg + arg2;

console.log(arrowAdd(45, 35));

let doingArrowStuff = x => {
    console.log(x)
};

doingArrowStuff(`Absolutely Not 😎`);

let addTwoNumbers = (x, y) => {
    return x + y
};

console.log(addTwoNumbers("Imran ", "Khan"));

let sayHi = () => {

    const arr = ["Ali", "Adeel", "Abdul Rehman"];
    arr.forEach(e => console.log(e));

};

sayHi();