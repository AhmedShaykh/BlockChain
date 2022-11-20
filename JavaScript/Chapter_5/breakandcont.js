for (let i = 0; i < 10; i++) {
    console.log(i);

    if (i === 4) {
        break;
    };
};

let cars = [
    {
        model: "Golf",
        make: "Volkswagen",
        year: 1999,
        color: "white",
    },
    {
        model: "Picanto",
        make: "Kia",
        year: 2020,
        color: "red",
    },
    {
        model: "Peugeot",
        make: "208",
        year: 2021,
        color: "black",
    },
    {
        model: "Fiat",
        make: "Punto",
        year: 2020,
        color: "black",
    }
];

for (let i = 0; i < cars.length; i++) {

    if (cars[i].year >= 2020) {
        if (cars[i].color === "black") {
            console.log("I have found my new car:", cars[i]);
            break;
        }
    };

};

for (let i = 0; i <= 10; i++) {
    if (i === 3) {
        console.log(`Break: ${i}`);
        continue;
    };

    console.log(`Counter: ${i}`);
};

for (let car of cars) {

    if (car.color !== "black") {
        console.log("we could get this one:", car);
        continue;
    }

    if (car.year >= 2020) {
        console.log("we could get this one:", car);
    }

};