function addTwoNumbers(x, y) {
    return x + y;
};

let result = addTwoNumbers(4, 5);
console.log(result);

function returnArr() {

    let resultsArr = [];

    for (let i = 0; i < 10; i++) {
        let result = addTwoNumbers(i, 2 * i);
        resultsArr.push(result);
    };

    console.log(resultsArr);

};

let resultsArray = returnArr();
console.log(resultsArray);

let addTheNumbers = (x, y) => x + y;

let results = addTheNumbers(12, 15);
console.log(results);