//overloads give us type-checked calls
function add(arg1: string, arg2: string): string;//option 1
function add(arg1: number, arg2: number): number;//option 2
function add(arg1: string, arg2: number): string;//option 3
function add(arg1: boolean, arg2: boolean): boolean;//option 4

//this is not part of the overload list, 
//so it has only three overloads

function add(arg1: any, arg2: any): any {
    return arg1 + arg2;
};

//Calling 'add' with any other parameter types would cause an error except for the three options
console.log(add(1, 2));
console.log(add("Hello: ", 2)); // "Hello: 2"
console.log(add("Hello ", "World"));
console.log(add(true, false));