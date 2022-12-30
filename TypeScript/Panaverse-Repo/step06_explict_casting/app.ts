let myname: unknown = "Zia";

console.log((myname as string).length);
console.log((<string> myname).toUpperCase());

let nameChk: string = "Ahmed";

console.log(nameChk.length);