console.log('Learning TS!');

const abc: string = "TS";
const num: number = 123;
const bool: boolean = true;
let undef: undefined;
let nul: null = null;

console.log(abc);
console.log(num);
console.log(bool);
console.log(undef);
console.log(nul);

let firstName: string = "Ahmed";
console.log(firstName.length);

let boolean: boolean = Math.random() > 0.5 ? true : false;
console.log(boolean);

let nam: string = "Ahmed Shaykh";
nam = "Ahmed Shaikh";

console.log(nam);

let rocket: string = "Rocket";
console.log(rocket.toUpperCase());
console.log(rocket.toLowerCase());

let myName: string;
myName = "Ahmed Saleem Shaikh";
console.log(myName);

import { metaVerse } from "./index";
import { Course } from "./index";

export const course: Course = {
    name: "Web 3 & Metaverse Developer",
    classDay: "Wednesday",
    startUp: "DAO",
    classTiming: 6
}

console.log(metaVerse);
console.log(course);

// ========== Unions Types ========== //

let mathematician = Math.random() > 0.5 ? 123 : "Mark Goldberg";
console.log(mathematician);

let thinker: string | null = null;

if (Math.random() > 0.5) {
    thinker = "DataScript";
}

console.log(thinker);

let leader = Math.random() > 0.5 ? "Imran Khan" : 70;
leader.toString();

console.log(leader);

// ========== Narrowing ========== //

let admiral: number | string;
admiral = "Grace Hopper";

console.log(admiral);
console.log(typeof admiral);

let inventor: number | string = "Warren Buffett";

console.log(inventor.toUpperCase());

let scientist = Math.random() > 0.5 ? "Thomas Edison" : 87.6;

if (scientist === "Thomas Edison") {
    console.log(scientist.toUpperCase());
}
else if (scientist === 87.6) {
    console.log(scientist.toFixed());
}

let researcher = Math.random() > 0.5 ? "Rosalind Franklin" : 51.08341254;

typeof researcher !== "string" ? console.log(researcher.toFixed()) : console.log(researcher.toUpperCase());

// ========== Literal Types ========== //

let literal: number | string = "String";
console.log(literal);

literal = 44;
console.log(literal);

let science: number | string;
science = Math.random() > 0.5 ? "Science" : 404;

if (science === "science") {
    science.toUpperCase();
}

console.log(science);

let biologist = Math.random() > 0.5 && "Rachel Carson"; // String | False
console.log(biologist);

let program: string;
program = "Smart Contract";

console.log(program.length);

let maths: string | undefined;
console.log(maths?.length); // Optional

maths = "Data Sorting";
console.log(maths.length);

// ========== Type Alias ========== //

type RawData = boolean | number | string;

let rawDataFirst: RawData;
let rawDataSecond: RawData;
let rawDataThird: RawData;

console.log(rawDataFirst = true);
console.log(rawDataSecond = "AHMED");
console.log(rawDataThird = 4000);

type Id = boolean | string;
type IdMaybe = Id | undefined | null;

let typeFirst: IdMaybe;
let typeSecond: IdMaybe;
let typeThird: IdMaybe;
let typeFourth: IdMaybe;

console.log(typeFirst = 'Ahmed');
console.log(typeSecond);
console.log(typeThird = null);
console.log(typeFourth = false);

// ========== Objects ========== //