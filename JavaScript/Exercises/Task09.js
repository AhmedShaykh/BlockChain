test();

function test() {
    return job().then(function (data) {
        return doSomething(data);
    });
};

function job() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Job Completed!');
        }, 1000);
    });
};

function doSomething(data) {
    console.log("Data");
};

let promise = request();

promise.then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.log(error);
});

function request() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("Reject!");
        }, 1000);
    });
};