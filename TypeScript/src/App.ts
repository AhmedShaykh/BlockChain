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

let engineer: {
    born: number;
    name: string;
};

engineer = {
    born: 1999,
    name: "Elon Musk"
}

console.log(engineer);
console.log(engineer.name);

type Poet = {
    year: number;
    name: string;
};

let poetLater: Poet;

poetLater = {
    year: 2001,
    name: "Dayyan",
};

console.log(poetLater);

type WithFirstName = {
    firstName: string;
};

type WithLastName = {
    lastName: string;
};

const hasBoth = {
    firstName: "Defence",
    lastName: "Clifton",
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
    first: "Mariam Nawaz",
    last: "Gunji"
};

console.log(namOnlyOne);
console.log(`Nawaz Sharif Ki Beti ` + namOnlyOne.last);

let transGender: string | boolean = true;

if (typeof boolean) {
    console.log(`Bilawal is a SheMale ??? ` + transGender);
}

else {
    console.log(`Jab Baarish Hoti Hai To Bilawal Ata Hai`);
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

const poemMismatch: Poem = {
    author: {
        firstName: "Abdul Dayyan",
        lastName: "Ali Khan"
    },
    name: "Tulips",
};

console.log(poemMismatch);

type Book = {
    author?: string;
    pages: number;
};

const book1: Book = {
    author: "Rita Ora",
    pages: 80,
};

const book2: Book = {
    pages: 75
};

console.log(book1);
console.log(book2);

type Writers = {
    author: string | undefined;
    editor?: string;
};

const missingWriters: Writers = {
    author: undefined,
};

const hasWriters: Writers = {
    author: "William Shakespeare",
    editor: "Adobe"
}

console.log(missingWriters);
console.log(hasWriters);

const series = Math.random() > 0.5 ? {
    name: "Vikings",
    storyLine: "Reality",
} : {
    name: "Stranger Things",
    fantasy: true,
}

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

type Artwork = {
    genre: string;
    name: string;
};

type Writing = {
    pages: number;
    name: string;
};

type WrittenArt = Artwork & Writing;

const workArt: WrittenArt = {
    genre: "Techno",
    name: "AHM X",
    pages: 44,
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

console.log(oneArt);
console.log(morningGlory);

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

// ========== Function ========== //

function sing(song: string) {
    console.log(`Singing: ${song}!`);
}

sing("Ole Ole");

function announceSong(song: string, singer?: string) {
    console.log(`Song: ${song}`);

    if (singer) {
        console.log(`Singer: ${singer}`);
    }
}

announceSong("Dreamer");
announceSong("On My Way", "Sabrina Carpenter");

function announceSongBy(song: string, singer: string | undefined) {
    console.log(`Song: ${song}`);

    if (singer) {
        console.log(`Singer: ${singer}`);
    }
    else {
        console.log(singer);
    }
}

announceSongBy("Greensleeves", undefined);

function edm(song: string, rating = 0) {
    console.log(`${song} Gets Rating ${rating}/10`);
}

edm("Hardwell - Mad World", 9);
edm("Will Sparks - Dreaming", 10);

function song(singer: string, ...songs: string[]) {

    for (const var1 of songs) {
        console.log(`${var1} Feat. ${singer}`)
    }
}

song("Akcent", "Thats My Name", "Stay With Me", "King Of Disco");

function technoTrance(techno: string[]) {

    for (let trance of techno) {
        console.log(`${trance}`);
    }

    return techno.length;
}

technoTrance(["Will Sparks - L.S.D", "MADDIX - Formula"]);

function getSongAt(songs: string[], index: number) {
    return index < songs.length ? songs[index] : songs;
}

console.log(getSongAt(["Revealed", "SunSet"], 30));