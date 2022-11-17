let car = {
    model: "Sport Car",
    name: "Bugatti",
    year: 2022,
    color: "black",
};

for (let prop in car) {
    console.log(car[prop]);
};

let founder = {
    name: 'Ahmed',
    salary: "$10000000",
};

for (let key in founder) {
    console.log(`The ${key} of Founder is ${founder[key]}`)
};