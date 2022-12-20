// ============= forEach ============= //

const array = ['a', 'b', 'c'];

array.forEach(element => console.log(element));

// ============= Of ============= //

let num = [18, 56, 98];

for (e of num) {
    console.log('==> ' + e);
};

// ============= Map ============= //

let arr = [2, 4, 5, 6];

let modifiedArr = arr.map(element => {
    return element * 3;
});

console.log(modifiedArr);

// ============= Concat ============= //

const array1 = ['a', 'b', 'c'];

const array2 = ['d', 'e', 'f'];

const array3 = array1.concat(array2);

console.log(array3);

// ============= Shift ============= //

let fruitShift = ["Banana", "Orange", "Apple", "Kiwi"];

fruitShift.shift();

console.log(fruitShift);

// ============= UnShift ============= //

let fruitUnShift = ["Banana", "Orange", "Apple", "Kiwi"];

fruitUnShift.unshift("Mango");

console.log(fruitUnShift);

// ============= Splice ============= //

let fruits = ["Banana", "Orange", "Apple", "Kiwi"];

fruits.splice(3, 1, "Lemon", "Blueberry");

console.log(fruits);

// ============= Slice ============= //

const animals = ['Cat', 'Dog', 'Camel', 'Duck', 'Elephant'];

console.log(animals.slice(2));

console.log(animals.slice(2, 4));

// ============= isArray ============= //

const checkArr = Array.isArray(array);

console.log(checkArr);

// ============= Join ============= //

const elements = ['Fire', 'Air', 'Water'];
console.log(elements);

console.log(elements.join());

console.log(elements.join(' '));

console.log(elements.join('-'));

// ============= Every ============= //

const isBelowThreshold = (currentValue) => currentValue < 40;

const isBelowThreshold2 = (currentValue) => currentValue <= 40;

const arrayEvery = [1, 30, 39, 29, 10, 13, 40];

console.log(arrayEvery.every(isBelowThreshold));

console.log(arrayEvery.every(isBelowThreshold2));

// ============= Filter ============= //

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);

const numbers = [4, 5, 8, 4, 7, 2, 8, 4, 9];

const result2 = numbers.filter(number => number >= 4);

console.log(result2);

// ============= Reduce ============= //

const arrayReduce = [1, 2, 3, 4];

let tempNum = 0;

arrayReduce.forEach(num => {
    tempNum += num
});

console.log(tempNum);

const initialValue = 1;

const sumWithInitial = arrayReduce.reduce(
    (previousValue, currentValue) => previousValue * currentValue, initialValue
);

console.log(sumWithInitial);

// ============= Reverse ============= //

const arrNum = ['one', 'two', 'three'];
const reversed = arrNum.slice().reverse();

console.log(`Reverse: ${reversed}`);
console.log(`Orginal: ${arrNum}`);

// ============= Sort ============= //

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();

console.log(months);

let arrSort = [1, 30, 4, 21, 100000];
arrSort.sort();

console.log(arrSort);

arrSort.sort((x, y) => x - y);

console.log(`Real Sort: ${arrSort}`);

// ============= toString ============= //

const intArray = [1, 2, 3, 4, 5];

console.log(intArray.toString());

const stringArray = ['Bill', 'Elon', 'Steve'];

console.log(stringArray.toString());

// ============= At ============= //

const array4 = [5, 12, 8, 130, 44];

console.log(array4.at(2));
console.log(array4.at(-2));

// ============= Find ============= //

const arrayFind = [5, 12, 8, 130, 44];

const found = arrayFind.find(element => element > 10);

console.log(found);

// ============= Some ============= //

const arraySome = [1, 2, 3, 4, 5];

const some = arraySome.some(element => element > 10);

console.log(some);

const some2 = arrayFind.some(element => element > 10);

console.log(some2);