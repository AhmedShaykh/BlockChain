// =========== Array In Object=========== //

let company = {
    companyName: "Healthy Candy",
    activities: ["food manufacturing",
        "improving kids' health",
        "manufacturing toys"],
    address: {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },
    yearOfEstablishment: 2021
};

let activity = company.activities[1];
console.log(activity);

// =========== Object In Array =========== //

let addresses = [{
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
},
{
    street: "1st West avenue",
    number: "5",
    zipcode: "75001",
    city: "Addison",
    state: "Texas"
}];

let streetName = addresses[0].street;
console.log(streetName);

// =========== Object In Array In Object =========== //

company = {
    companyName: "Healthy Candy",
    activities: ["food manufacturing",
        "improving kids' health",
        "manufacturing toys"],
    address: [{
        street: "my street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },
    {
        street: "1st West avenue",
        number: "5",
        zipcode: "75001",
        city: "Addison",
        state: "Texas"
    }],
    yearOfEstablishment: 2021
};

let streetName2 = company.address[0].street;
console.log(streetName2);