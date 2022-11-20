let message = (x, y, z) => console.log(`JavaScript is ${x}, ${y}, ${z}`);

let spread = ["So", "Much", "Fun"];

message(...spread);

let arr = [5, 9];
let arr2 = [...arr, 6, 7];

function addFourNumbers(x, y, z, a) {
    console.log(x + y + z + a);
};

addFourNumbers(...arr2);
addFourNumbers(1, 2, 3, 4);

// ========= Rest Operators ========= //

function someFunction(param1, ...param2) {
    console.log(param1, param2);
};

someFunction("Ahmed", "Dayyan", "Saad", "Faiz");