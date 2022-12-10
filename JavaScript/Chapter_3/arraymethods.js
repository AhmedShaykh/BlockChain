// ============= forEach ============= //

const array = ['a', 'b', 'c'];

array.forEach(element => console.log(element));

// ============= Of ============= //

let num = [18, 56, 98];

for (e of num) {
    console.log('==> ' + e);
};

// ============= Map ============= //

let arr = [3, 4, 5, 6];

let modifiedArr = arr.map(function (element) {
    return element * 3;
});

console.log(modifiedArr);

// ============= Concat ============= //

const array1 = ['a', 'b', 'c'];

const array2 = ['d', 'e', 'f'];

const array3 = array1.concat(array2);

console.log(array3);

// ============= Splice ============= //

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 0, "Lemon", "Kiwi");

console.log(fruits);

// ============= Slice ============= //

const animals = ['Cat', 'Dog', 'Camel', 'Duck', 'elephant'];

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

// ============= Filter ============= //

// ============= Reduce ============= //

// ============= At ============= //

// ============= Find ============= //

// ============= Some ============= //

// ============= Split ============= //

// ============= toString ============= //