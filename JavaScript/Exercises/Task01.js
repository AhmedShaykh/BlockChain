setTimeout(function () {
    console.log('I am an Asynchronous message');
}, 1000);

console.log('I am a synchronous message');

setTimeout(function () {
    console.log('I am asynchronous message');
});

console.log('Test 1');

for (let i = 0; i < 100; ++i) {
    console.log(doSomeStuff());
};

console.log('Test 2');

function doSomeStuff() {
    return 1 + 1;
};

let counter = 0;

let timer = setInterval(function () {
    console.log('I am an asynchronous message');

    counter += 1;

    if (counter >= 5) {
        clearInterval(timer);
    }
}, 1000);

console.log('I am a synchronous message');

let fs = require('fs');

fs.readFile('./Task.txt', 'utf8', function (error, data) {

    if (error) {
        throw error;
    };

    console.log("Asynchronous message. Content of Task.Txt:", data);
});

console.log('Synchronous message');