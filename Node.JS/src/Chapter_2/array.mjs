let arr1 = new Array("Purple", "Green", "Yellow");
console.log(arr1);

let arr2 = ["Black", "Orange", "Pink"];
console.log(arr2);

let arr3 = new Array(10);
console.log(arr3);

let arr4 = [10];
console.log(arr4);

let arr = ["Hi Dear", 5, true];
console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);

const arrx = ["Hi There"];
console.log(arrx);
console.log(arrx[0]);

arrx[0] = "New Value";
console.log(arrx[0]);


const cars = ["Toyota", "Renault", "Volkswagen"];
console.log(cars[0]);
console.log(cars[-1]);

cars[0] = "Tesla";
console.log(cars[0]);

console.log(cars);

cars[3] = "Kia";
console.log(cars[3]);

console.log(cars);

cars[-1] = "Fiat";
console.log(cars[-1]);

console.log(cars);

let colors = ["black", "orange", "pink"]
let booleans = [true, false, false, true];
let emptyArray = [];

console.log("Length of colors:", colors.length);
console.log("Length of booleans:", booleans.length);
console.log("Length of empty array:", emptyArray.length);

emptyArray = colors[colors.length - 1];
console.log(emptyArray);

let numbers = [12, 24, 36];
numbers[5] = 48;
console.log(numbers.length);
console.log("numbers", numbers);

let favoriteFruits = ["grapefruit", "orange", "lemon"];
console.log(favoriteFruits);

let lengthOfFavoriteFruits = favoriteFruits.push("lime");

console.log(lengthOfFavoriteFruits);

console.log(favoriteFruits);

let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes.splice(2, 0, "square", "trapezoid");
console.log(arrOfShapes);