let age = 12;
let cost = 0;
let message;

if (age < 7) {
    cost = 0;
    message = "Access is free under three.";
} else if (age >= 8 && age < 16) {
    cost = 5;
    message = "With the child discount, the fee is 5 dollars";
} else if (age >= 16 && age < 65) {
    cost = 10;
    message = "A regular ticket costs 10 dollars.";
} else {
    cost = "100 Dollars Penalty";
    message = "No Entry!";
}

console.log(message);
console.log("Your Total cost " + cost);