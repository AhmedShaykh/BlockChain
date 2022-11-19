test();

function test() {
    return job().then(function (data) {
        doSomething(data);
    });
};

function job() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Result of Job');
        }, 1000);
    });
};

function doSomething(data) {
    console.log("Data: " + data);
};