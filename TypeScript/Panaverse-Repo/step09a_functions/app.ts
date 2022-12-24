//Note: All parameters are required

//Named function
function add(x: number, y: number): number {
	return x + y;
}

console.log(add(4,2));

//Anonymous function
let myAdd1 = function (x: number, y: number): number {
	return x + y;
};

console.log(myAdd1(4,4));

//Anonymous function with explict type
let myAdd2: (x: number, y: number) => number = function (x: number, y: number): number {
	return x + y;
};

console.log(myAdd1(2,2));

//type names dont matter
let myAdd3: (baseValue: number, increment: number) => number = function (x: number, y: number): number {
	return x + y;
};

console.log(myAdd1(5,5));

//Lambda functions															
let myAdd4 = (a: number, b: number) => a + b;
//output will be: var myAdd4 = function(a : number, b : number) {return a + b};

console.log(myAdd1(6,6));

function greeter (a: string): void {
    console.log(`Hello ${a}`);
};

greeter("Dayyan");