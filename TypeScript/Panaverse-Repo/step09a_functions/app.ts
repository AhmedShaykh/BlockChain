//Named function
function add(x: number, y: number): number {
	return x + y;
};

console.log(add(4, 2));

//Anonymous function
let myAdd1 = function (x: number, y: number): number {
	return x + y;
};

console.log(myAdd1(4, 4));

//Anonymous function with explict type
let myAdd2: (x: number, y: number) => number = function (x: number, y: number): number {
	return x + y;
};

console.log(myAdd1(2, 2));

//type names dont matter
let myAdd3: (baseValue: number, increment: number) => number = function (x: number, y: number): number {
	return x + y;
};

console.log(myAdd1(5, 5));

//Lambda functions															
let myAdd4 = (a: number, b: number) => a + b;
//output will be: var myAdd4 = function(a : number, b : number) {return a + b};

console.log(myAdd1(6, 6));

type GreetFunction = (a: string) => void;

function greeter(callback: GreetFunction) {
	callback("Top G!");
};

const greetFunction: GreetFunction = (greeting: string) => {
	console.log(greeting);
};

greeter(greetFunction);