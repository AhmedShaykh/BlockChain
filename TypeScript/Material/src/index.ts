let abc: string = "TS";
let num: number = 123;
let bool: boolean = true;
let undef: undefined;
let nul: null = null;

console.log(abc);
console.log(num);
console.log(bool);
console.log(undef);
console.log(nul);

let firstName = "Ahmed";
console.log(firstName);
console.log(firstName.length);

let myName;
myName = "Ahmed Saleem Shaikh";
console.log(myName);

let boolean: boolean = Math.random() > 0.5 ? true : false;
console.log(boolean);

let rocket;
rocket = "Rocket";
console.log(rocket.toUpperCase());

rocket = 50.5;
console.log(rocket.toFixed());

import { metaVerse, Course } from "./export.js";

const course: Course = {
    name: "Web 3 & Metaverse Developer",
    classDay: "Wednesday",
    startUp: "Decentralized Autonomous Organization",
    classTiming: 6
};

console.log(metaVerse);
console.log(course);

// ============= Unions Types ============= //

let mathematician = Math.random() > 0.5 ? 123 : "Mark Goldberg";
console.log(mathematician);

let thinker: string | null = null;

if (Math.random() > 0.5) {
    thinker = "DataScript";
};

console.log(thinker);

let leader = Math.random() > 0.5 ? "Imran Khan" : 70;

console.log(leader.toString());

// ============= Narrowing ============= //

let investor = Math.random() > 0.6 ? "Warren Buffett" : undefined;

if (investor) {
    investor.toUpperCase();
};

console.log(investor?.toUpperCase());

let scientist = Math.random() > 0.5 ? "Thomas Edison" : 87.6;

if (scientist === "Thomas Edison") {
    console.log(scientist.toUpperCase());
}
else if (scientist === 87.6) {
    console.log(scientist.toFixed());
};

let researcher = Math.random() > 0.5 ? "Rosalind Franklin" : 51.08341254;

typeof researcher !== "string" ?
    console.log(researcher.toFixed()) :
    console.log(researcher.toUpperCase());

// ============= Literal Types ============= //

let literal: number | "String";
literal = "String";
console.log(literal);

literal = 44;
console.log(literal);

let science: "Computer" | "Chemistry";
science = Math.random() > 0.5 ? "Computer" : "Chemistry";

if (science == "Computer") {
    console.log(science.toUpperCase());
}
else {
    console.log(science.toLowerCase());
};

let biologist = Math.random() > 0.5 && "Rachel Carson"; // String | False
console.log(biologist);

let program = Math.random() > 0.5 ? "Smart Contract" : undefined;
console.log(program?.length); //Optional Use Only Undefined In Union Method

// ============= Type Alias ============= //

type RawData = boolean | number | string;

let rawDataFirst: RawData;
let rawDataSecond: RawData;
let rawDataThird: RawData;

console.log(rawDataFirst = true);
console.log(rawDataSecond = "AHMED");
console.log(rawDataThird = 4000);

type Id = boolean | string;
type IdMaybe = Id | undefined | null;

let typeFirst: Id;
let typeSecond: IdMaybe;
let typeThird: IdMaybe;
let typeFourth: IdMaybe;

console.log(typeFirst = 'Ahmed');
console.log(typeSecond);
console.log(typeThird = null);
console.log(typeFourth = false);

// ============= Objects ============= //

let engineer: {
    born: number;
    name: string;
};

engineer = {
    born: 1999,
    name: "Elon Musk"
};

console.log(engineer);
console.log(engineer.name);

type Poet = {
    year: number;
    name: string;
};

let poetLater: Poet;

poetLater = {
    year: 2001,
    name: "Bilal",
};

console.log(poetLater);

type WithFirstName = {
    firstName: string;
};

type WithLastName = {
    lastName: string;
};

const hasBoth = {
    firstName: "Martin",
    lastName: "Garrix",
};

let withFirstName: WithFirstName = hasBoth;
console.log(withFirstName.firstName);

let withLastName: WithLastName = hasBoth;
console.log(withLastName.lastName);

type FirstAndLastNames = {
    first: string;
    last: string;
};

const fullName: FirstAndLastNames = {
    first: "Sabrina",
    last: "Carpenter",
};

console.log(fullName);

const namOnlyOne: FirstAndLastNames = {
    first: "Chor",
    last: "Gunja"
};

console.log(`Nawaz Sharif Ki Beti ${namOnlyOne.first} Hai`);
console.log(`Mariam Nawaz Ka Abba ${namOnlyOne.last} Aur ${namOnlyOne.first} Dono Hai`);

let imported = Math.random() > 0.5 ? true : false;

if (imported === true) {
    console.log(`Jab Diesel Ata Hai To Kanpay Bhaag Jati Hai`);
}
else {
    console.log(`Jab Baarish Hoti Hai To Kanpay Taang Jati Hai`);
}

type TimeRange = {
    start: Date;
}

const myDate: TimeRange = {
    start: new Date()
}

console.log(myDate);

type Poem = {
    author: {
        firstName: string;
        lastName: string;
    };
    name: string;
};

const poemMatch: Poem = {
    author: {
        firstName: "Sylvia",
        lastName: "Plath",
    },
    name: "Lady Lazarus",
};

console.log(poemMatch);

type Author = {
    firstName: string;
    lastName: string;
};

type Writer = {
    author: Author;
    name: string;
};

const poemMismatch: Writer = {
    author: {
        firstName: "Abdul Dayyan",
        lastName: "Ali Khan"
    },
    name: "Tulips",
};

console.log(poemMismatch);

type Book = {
    author: string;
    pages: number;
    bookName?: string;
};

const book1: Book = {
    author: "Abdul Haq",
    pages: 80,
    bookName: "Pakistan Zindabad"
};

const book2: Book = {
    author: "Kaiser Mehmood",
    pages: 75
};

console.log(book1);
console.log(book2);

type Writers = {
    author: string | undefined;
    nationality?: string;
};

const missingWriters: Writers = {
    author: undefined,
};

const hasWriters: Writers = {
    author: "William Shakespeare",
    nationality: "British"
};

console.log(missingWriters);
console.log(hasWriters);

const series = Math.random() > 0.5 ? {
    name: "Vikings",
    storyLine: "Reality",
} : {
    name: "Stranger Things",
    fantasy: true,
};

console.log(typeof series.name, series.name);
console.log(typeof series.storyLine, series.storyLine);
console.log(typeof series.fantasy, series.fantasy);

type PoemWithPages = {
    name: string;
    page: number;
    type: string;
};

type PoemWithRhymes = {
    name: string;
    rhymes: boolean;
    type: string;
};

type Poems = PoemWithPages | PoemWithRhymes;

const poem: Poems = Math.random() > 0.5
    ? { name: "The Double Image", page: 7, type: 'Pages' }
    : { name: "Her Kind", rhymes: true, type: 'Rhymes' };

console.log(poem.name);

if ("page" in poem) {
    console.log(poem.page);
}

else {
    console.log(poem.rhymes);
}

console.log(poem.type);

// ============= Intersection Types ============= //

type Artwork = {
    genre: string;
    design: string;
};

type Writing = {
    tracks: number;
    name: string;
};

type WrittenArt = Artwork & Writing;

const workArt: WrittenArt = {
    genre: "Techno",
    name: "AHM X",
    tracks: 44,
    design: "Revealed"
};

console.log(workArt);

type ShortPoem = { author: string } & (
    | { kigo: string; type: "haiku"; }
    | { meter: number; type: "villanelle"; }
);

const morningGlory: ShortPoem = {
    author: "Fukuda Chiyo-ni",
    kigo: "Morning Glory",
    type: "haiku",
};

const oneArt: ShortPoem = {
    author: "Elizabeth Bishop",
    type: "villanelle",
    meter: 66,
};

console.log(morningGlory);
console.log(oneArt);

type ShortPoemBase = { author: string };

type Haiku = ShortPoemBase & { name: string; type: "haiku" };

type Villanelle = ShortPoemBase & { meter: number; type: "villanelle" };

type ShortPoems = Haiku | Villanelle;

const oneArtwork: ShortPoems = {
    author: "Elizabeth Bishop",
    type: "villanelle",
    meter: 101,
};

console.log(oneArtwork);

// ============= Any Types ============= //

let myval: any;

myval = true;
console.log(myval);

myval = 42;
console.log(myval);

myval = "Hey!";
console.log(myval);

myval = [];
console.log(myval);

myval = {};
console.log(myval);

myval = Math.random();
console.log(myval);

myval = null;
console.log(myval);

myval = undefined;
console.log(myval);

myval = () => { console.log('Hey again!') };
console.log(myval);

// ============= Unknown Types ============= //

let value: unknown;

value = true;
console.log(value);

value = 42;
console.log(value);

value = "Hey!";
console.log(value);

value = [];
console.log(value);

value = {};
console.log(value);

value = Math.random();
console.log(value);

value = null;
console.log(value);

value = undefined;
console.log(value);

value = () => { console.log('Hey again!') };
console.log(value);

let val: unknown;

let val1: unknown = val = true;
console.log(val1);

let val2: any = val = null;
console.log(val2)

// Unknown Variable To Allow Unknown & Any Types Assign But Other Types To Not Allow

let valx: any;

let val3: unknown = valx = 404;
console.log(val3);

let val4: string = valx = "String";
console.log(val4)

// ============= Explict Or Type Casting ============= //

let myNam: unknown = "Ahmed";
console.log((myNam as string).length);

console.log((<string>myNam).length);

let myBool: unknown = true;
console.log((<boolean>myBool).toString());

let myNum: string = "65.90";
console.log((myNum as unknown as number).toFixed); // Undefined

console.log(Number(myNum).toFixed());

// ============= Enum ============= //

enum Colors { Red, Green, Blue };

let c: Colors = Colors.Green;
console.log(c);

enum Color1 { Red = 1, Green, Blue };

let colorName: string = Color1[2];
console.log(colorName);

enum Color2 { Red = 1, Blue, Green = 2 };

let colorIndex = Color2["Blue"];
let colorIndex2 = Color2["Green"];

console.log(colorIndex);
console.log(colorIndex2);

// ============= Const Enum ============= //

const enum ColorEnum { Red, Green, Blue };

let d: ColorEnum = ColorEnum.Green;
console.log(d);

const enum ColorsName { Red = 3, Blue, Green = 1 };

let colorInd = ColorsName["Blue"];
console.log(colorInd);

// Enum Const Not Allowed Enum Return Name Only Index

// ============= Arrays ============= //

let arrayOfNumbers: number[];
arrayOfNumbers = [4, 8, 15, 16, 23, 42];

console.log(arrayOfNumbers);

let newArray = ["array", "array2", 123, 456, true];

newArray.pop();
newArray.push(789, false);
console.log(newArray);

let createStrings: () => string[];

createStrings = () => ["Ahmed", "Saqlain", "Majid"];

console.log(createStrings());

let arrayTS: (string | number)[];

arrayTS = ["Data", "Type", 345, 864];

console.log(arrayTS);

let arrayVar: string | number[];

arrayVar = [1, 2, 3, 4], "Pakistan";

console.log(arrayVar);

arrayVar = "China", [1, 2, 3, 4];

console.log(arrayVar);

// ============= 2 Dimensional Array ============= //

let arrayDim: (string | number)[][];

arrayDim = [
    ["Mon", "Tue", "Wed"],
    [4, 6, 10]
];

for (let Days in arrayDim) {
    console.log(arrayDim[Days]);
};

let Coins: string[] = ["BTC", "ETH", "BNB"];

for (let data in Coins) {
    console.log(Coins[data]);
};

const soldiers = ["Ertugrul Ghazi", "Mehmood Ghaznavi", "Sultan Salahuddin Ayubi"];

const soldierAges = [60, 51, 75];

const conjoined = [...soldiers, ...soldierAges];
console.log(conjoined);

function logWarriors(greeting: string, ...names: string[]) {
    for (const name of names) {
        console.log(`${name} is ${greeting}`);
    }
};

const warriors = ["Khalid Ibn Al-Walid", "Tariq Ibn-Ziyad", "Muhammad Ibn-Qasim"];

logWarriors("Muslims Warriors", ...warriors);

// ============= Functions ============= //

function sing(song: string): void {
    console.log(`Song: ${song}!`);
}

sing("Happy");

function announceSong(song: string, singer?: string) {

    if (singer) {
        console.log(`Song: ${song}, Singer: ${singer}`);
    }
    else {
        console.log(`Song: ${song}`);
    }

};

announceSong("Dreamer");
announceSong("On My Way", "Sabrina Carpenter");

function announceSongBy(song: string, singer: string | undefined): void {

    if (singer === "string") {
        console.log(`Song: ${song}, Singer: ${singer}`);
    }
    else {
        console.log(`Song: ${song}, Singer: ${singer}`);
    }

};

announceSongBy("Once Again", undefined);

function edm(song: string, rating = 5) {
    console.log(`${song} Gets Rating ${rating}/10`);
};

edm("Hardwell - Mad World", 9);
edm("Bella Ciao");
edm("Will Sparks - Dreaming", 10);

function song(singer: string, ...songs: string[]) {

    for (const var1 of songs) {
        console.log(`${var1} Feat. ${singer}`)
    }

};

song("Akcent", "Thats My Name", "Stay With Me", "King Of Disco");

function technoTrance(techno: string[]) {

    for (let trance of techno) {
        console.log(`${trance}`);
    };

};

technoTrance(["Will Sparks - L.S.D", "MADDIX - Formula"]);

function getSongAt(songs: string, index: number) {
    return index < songs.length ? songs[index] : undefined;
};

console.log(getSongAt("Revealed", 4));

function getSongRecordingDate(song: string): Date | undefined | string {
    switch (song) {
        case "Summertime Sadness":
            return new Date();
        case "Lockdown":
            return "14 August, 2018";
        default:
            return undefined;
    }
};

console.log(getSongRecordingDate("Lockdown"));
console.log(getSongRecordingDate("Summertime Sadness"));

function fun1(callback: Function) {
    setTimeout(() => {
        callback();
    }, 2000);
    console.log("Please Wait...");
};

function fun2() {
    console.log("Working Done!")
};

fun1(fun2);

let phonk: (genre: string) => string;

phonk = function (genre) {
    return `InterWood: ${genre.toUpperCase()}!`;
};

console.log(phonk("Metamorphosis"));

let data1 = ['text2', 'text3', 'text4'];

data1.forEach((data, index) => {
    console.log(data, index);
});

type StringToNumber = (input: string) => number;

let stringToNumber: StringToNumber;

stringToNumber = (input) => input.length;

console.log(stringToNumber("Four"));

type NumberToString = (input: number) => string;

function usesNumberToString(NumberToString: NumberToString) {
    console.log(`The String is: ${NumberToString(1234)}`);
};

usesNumberToString(input => `${input}! Hooray!`);

type dataS = (abc: number) => number;

function funName(data2: dataS): void {
    console.log(data2(404));
};

funName((abc) => abc);

let songLogger: (song: string) => void;

songLogger = (song) => {
    console.log(`${song}`);
};

songLogger("Feel It");

// ========== Overloads ========== //

function overload(a: String, b: String): String;
function overload(a: number, b: number): number;
function overload(a: string, b: number): string;
function overload(a: boolean, b: boolean): boolean;
function overload(a: any, b: any): any {
    return a + b;
};

console.log(overload("Hello ", "World"));
console.log(overload(112, 88));
console.log(overload("Ahmed: ", 1));
console.log(overload(true, false));

// ============= Tuples ============= //

let tuple: [number, string] = [4, "SOLANA"];
console.log(tuple);

tuple[0] = 5;
console.log(tuple);

let tupleValue: [number, number] = [4, 6];

console.log(tupleValue);
console.log(tupleValue[1]);

let [year, warrior] = Math.random() > 0.5
    ? [340, "Archidamia"]
    : [1828, "Rani of Jhansi"];

console.log(warrior);
console.log(year);

const tupleThree: [boolean, number, string] = [false, 1583, "Ninga"];
const tupleTwoExact: [boolean, number] = [tupleThree[0], tupleThree[1]];

console.log(tupleTwoExact);

const ourTuple: [number, boolean, string] = [5, false, 'Coding God Was Here'];

ourTuple.push('Something New & Wrong');
console.log(ourTuple);

function logPair(name: string, value: number) {
    console.log(`${name} has ${value}`);
}

const pairTupleCorrect: [string, number] = ["Amenda", 1]; // Order Number Not Change
logPair(...pairTupleCorrect);

let readonlyTuple = [111, "Trevor"] as const; // Readonly Not Change Value

console.log(readonlyTuple);

// ============= Interface ============= //

interface Crypto {
    supply: number; // // Interface Use Structure Of Object
    name: string;
};

let cryptoCoin: Crypto;

cryptoCoin = {
    supply: 10000,
    name: "AHMX Coin",
};

console.log(cryptoCoin);

interface Ethereum {
    founder: string;
    price: number;
    nationality?: string;
};

let ether: Ethereum = {
    founder: "Vitalik Buterin",
    price: 1050,
    nationality: "Russian Canadian",
};

console.log(ether);

interface Topic {
    readonly text: string;
    pageNumbers?: number;
};

let topic: Topic = {
    text: "TypeScript", // Assign Value Only One Time Can't Change It!
    pageNumbers: 343,
};

console.log(topic);
console.log(topic.text);
console.log(topic.pageNumbers = 450);

interface HasBothFunctionTypes {
    property: () => string;
    method(): string;
};

const hasFunction: HasBothFunctionTypes = {
    property: () => "Edge Computing!",
    method() {
        return "Serverless";
    }
};

console.log(hasFunction.method());
console.log(hasFunction.property());

interface CallSignature {
    (input: string): number;
};

const typedFunctionAlias: CallSignature = (input) => input.length;

console.log(typedFunctionAlias("Interface"));

interface DatesByName {
    [i: string]: Date;
};

const publishDates: DatesByName = {
    Frankenstein: new Date("1 January 2030"),
};

publishDates.Frankenstein;
console.log(publishDates.Frankenstein.toString());

interface ChapterStarts {
    readonly preface: 0; // Value Fix Interface Only Number Assign
    [i: string]: number;
};

const correctPreface: ChapterStarts = {
    preface: 0, // Interface Assign Value Than Not Change!
    night: 1,
    shopping: 5
};

console.log(correctPreface.preface);

const wrongPreface: ChapterStarts = {
    preface: 0,
};

console.log(wrongPreface);

interface MoreNarrowNumbers {
    [i: number]: string;
    [i: string]: string | undefined;
};

const mixesNumbersAndStrings: MoreNarrowNumbers = {
    0: 'One',
    1.5: '1.5',
    key1: 'Two',
    key2: undefined,
};

console.log(mixesNumbersAndStrings);

interface Novel {
    author: {
        name: string;
    };
    setting: Setting;
};

interface Setting {
    place: string;
    year: number;
};

let myNovel: Novel;

myNovel = {
    author: {
        name: 'Jane Austen',
    },
    setting: {
        place: 'England',
        year: 1812,
    }
};

console.log(myNovel.setting);

interface Writinng {
    title: string;
};

interface Reading extends Writinng {
    pages: number;
};

let myReading: Reading = {
    pages: 195,
    title: "Ethan Frome",
};

console.log(myReading);

interface Merged { // Same Name Multi Interface's Allow
    fromFirst: string;
};

interface Merged {
    fromSecond: number;
};

let merged: Merged = {
    fromFirst: "BTC",
    fromSecond: 1
};

console.log(merged);

// ========== Generics ========== //

function identity<T>(input: T) {
    return input;
};

const numeric = identity<number>(666);
console.log(numeric);

const stringy = identity<string>("Generic");
console.log(stringy);

function gen<T>(a: T, b: T): T[] {
    return [a, b]
};

console.log(gen<number>(2, 2));
console.log(gen<string>("2", "2"));
console.log(gen<Array<number>>([2], [4]));

function addUser<T>(user: T) {
    return user;
};

console.log(addUser<string>("AHM X ETH"));

const generic = <T>(input: T) => input;
console.log(generic<number>(1234));

function makeTuple<First, Second>(first: First, second: Second) {
    return [first, second] as const;
};

let tupleGeneric = makeTuple<boolean, string>(true, "abc");
console.log(tupleGeneric);

interface Box<T> {
    inside: T;
};

let stringyBox: Box<string> = {
    inside: "abc",
};

console.log(stringyBox);

class Secret<Key, Value> {
    key: Key;
    value: Value;

    constructor(key: Key, value: Value) {
        this.key = key;
        this.value = value;
    };

    getValue(key: Key): Value | boolean {
        return this.key === key
            ? this.value
            : false;
    }
};

const storage = new Secret<number, string>(12345, "London");
console.log(storage);
console.log(storage.getValue(1234));
console.log(storage.getValue(12345));

type Nullish<T> = null | T;

let dataGet: Nullish<number> = 786;
console.log(dataGet);

interface WithLength {
    length: number;
};

function logWithLength<T extends WithLength>(input: T): T {
    console.log(`Length: ${input.length}`);
    return input;
};

console.log(logWithLength("No one can figure out your worth but you."));
console.log(logWithLength([false, true]));
console.log(logWithLength({ length: 1234 }));