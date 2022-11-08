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

const cars = ["Bugatti", "Civic", "Suzuki"];
cars.pop();
console.log(cars);
console.log(cars[0]);
console.log(cars[-1]);

cars[0] = "Tesla";
console.log(cars[0]);

console.log(cars);

cars[2] = "Kia";
cars[3] = "Lambo";

console.log(cars);

cars[-1] = "Ferrari";
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

let lengthOfFavoriteFruits = favoriteFruits.push("lime", "mango");

console.log(lengthOfFavoriteFruits);

console.log(favoriteFruits);

let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes.splice(2, 1, "square", "trapezoid");

console.log(arrOfShapes);

let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7);

let arr8 = arr7.concat(7, 8, 9);
console.log(arr8);

let arr9 = arr8.shift();
console.log(arr9);

console.log(arr8);

arr8.splice(1, 3);
console.log(arr8);

delete arr8[0];
console.log(arr8);

arr8 = [2, 6, 7, 8];
let findValue = arr8.find(function (e) { return e === 6 });

let findValue2 = arr8.find(e => e === 10);
console.log(findValue, findValue2);

let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);

console.log(findIndex, findIndex2);

let findIndex3 = arr8.indexOf(7, 1); // (Search + Start)
console.log(findIndex3);

let animals = ["dog", "horse", "cat", "platypus", "rabbit"];
let lastDog = animals.lastIndexOf("dog");
console.log(lastDog);

let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort();
console.log(names);

let ages = [18, 72, 33, 56, 40];
ages.sort();
console.log(ages.reverse());

let dev = ['Joe', 'Morten', 'David', 'Jack', 'Christian', 'Chris'];
console.log(dev);

let ceo = dev.slice(0, 4);
console.log(ceo);

let cto = dev.slice(-3, -1);
console.log(cto);

let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];
let arrOfArrays = [someValues1, someValues2, someValues3];

console.log(arrOfArrays);

let value1 = arrOfArrays[0][1];
let value2 = arrOfArrays[2][2];

console.log(value1);
console.log(value2);

let arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];

console.log(arrOfArraysOfArrays);

let middleValue = arrOfArraysOfArrays[1][1][1];

console.log(middleValue);