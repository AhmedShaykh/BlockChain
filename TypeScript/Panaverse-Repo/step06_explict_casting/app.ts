let myname: unknown = "Zia";

console.log((myname as string).length);
console.log((<string>myname).toUpperCase());

let myBool: unknown = true;
console.log((<boolean>myBool).toString());

let myNum: string = "65.90";
console.log((myNum as unknown as number).toFixed); // Undefined

console.log(Number(myNum).toFixed());