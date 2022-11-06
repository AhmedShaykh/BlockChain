let str = "Hello";
let nr = 7;
let bigNr = 12345678901234n;
let bool = true;
let sym = Symbol("unique");
let undef = undefined;
let unknown = null;

console.log("str: ", typeof str);
console.log("nr: ", typeof nr);
console.log("bigNr: ", typeof bigNr);
console.log("bool: ", typeof bool);
console.log("sym: ", typeof sym);
console.log("undef: ", typeof undef);
console.log("unknown: ", typeof unknown);

let nr1 = "Bitcoin ";
let nr2 = 1;
console.log(nr1 + nr2);

let strToNr2 = "Hello";
strToNr2 = Number(strToNr2);
console.log(strToNr2, typeof strToNr2);

let strToBool2 = "false";
strToBool2 = Boolean(strToBool2);
console.log(strToBool2, typeof strToBool2);

let strToBool = "";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);

let nullToNr = null;
nullToNr = Number(nullToNr);
console.log("null", nullToNr, typeof nullToNr);

let strToNr = "";
strToNr = Number(strToNr);
console.log("empty string", strToNr, typeof strToNr);

let nr3 = 2;
let nr4 = "2";
console.log(nr3 + Number(nr4));