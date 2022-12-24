let array1 : number[] = [5, 6, 7];//correct syntax
console.log(array1);
console.log(array1[1]);//correct syntax

let array2:Array<number> = [1, 2, 3];//alternative correct syntax
console.log(array2);

let array3 : number[] = [];//correct syntax to define an empty array

let array4: number[] = new number[2];//error

array3.push(1234, 9);//dynamically adding

console.log(array3);

// Type: string[]
const soldiers = ["Harriet Tubman", "Joan of Arc", "Khutulun"];

// Type: number[]
const soldierAges = [90, 19, 45];

// Type: (string | number)[]
const conjoined = [...soldiers, ...soldierAges];

console.log(conjoined);