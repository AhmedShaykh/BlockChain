var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Hello World');
    }, 1000);
});

promise.then(function (data) {
    console.log(data + ' 1');
});

promise.then(function (data) {
    console.log(data + ' 2');
});

promise.then(function (data) {
    console.log(data + ' 3');
});

var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject('We are all going to die');
    }, 2000);
});

promise.then(function success(data) {
    console.log(data);
}, function error(data) {
    console.error(data);
});