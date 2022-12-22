let myname: string | null;

myname = null;
console.log(myname);

myname = "Zia";
console.log(myname);

//myname = undefined; //Error
//myname = 12; //Error

let myAge: string | number;

myAge = 15.6;//narrowing
console.log(myAge);
console.log(myAge.toFixed());

myAge = "Dont Know";//narrowing
console.log(myAge);
console.log(myAge.toUpperCase());

console.log(myAge.toString()); // common to both types 
//can be called even without narrowing

console.log(myAge.toLowerCase());//Can be called on string 
//because of narrowing

let newAge = Math.random() > 0.6 ? "Khan" : 0.9;

//newAge.toLowerCase();//Error: Transpiler cannot narrow

let newValue = typeof newAge === "string"
    ? newAge.toUpperCase() // Ok: string
    : newAge.toFixed(); // Ok: number

console.log(newValue);

let age: number | "died" | "unknown";

age = 90;//OK
age = "died";//OK
age = "unknown";//OK
// age = "living";//Error

console.log(age);

let zia: "Zia";

zia = "Zia";
console.log(zia);
//zia = "khan";//Error

let yourName = Math.random() > 0.6 ? "Dayyan Khan" : undefined;

if (yourName) {
    yourName.toUpperCase(); // Ok: string
};

//yourName.toUpperCase();//Error: Object is possibly 'undefined'.

console.log(yourName?.toUpperCase());//OK

// You can also define a type alias
type RawData = boolean | number | string | null | undefined;

let rawDataFirst: RawData = "String";
console.log(rawDataFirst);
let rawDataSecond: RawData = undefined;
console.log(rawDataSecond);
let rawDataThird: RawData = null;
console.log(rawDataThird);

type Id = number | string;

type IdMaybe = Id | undefined | null;

let data: IdMaybe = 4;
console.log(data);

data = null;
console.log(data);