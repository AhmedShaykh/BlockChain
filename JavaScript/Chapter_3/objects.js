let arr = [0, 1, 2];
console.log("Type: " + typeof arr);

let lang = {
    langName: "JavaScript",
    worth: "10 Trillion",
    invented: "Netscape",
    designed: "Brendan Eich",
    release: 1995
};

console.log(lang);

lang["langName"] = "TypeScript";
lang["invented"] = "MicroSoft";
lang["release"] = 2012;
lang["paradigm"] = "Object-Oriented";

console.log(lang);

lang.extension = "ts , tsx";
console.log(lang);

let company = {
    companyName: "Healthy Candy",
    activity: "food manufacturing",
    address: {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },
    yearOfEstablishment: 2021
};

console.log(company);

company.address.zipcode = "33117";
company["address"]["number"] = "100";

console.log(company);

console.dir(company);