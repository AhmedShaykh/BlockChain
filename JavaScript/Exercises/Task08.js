test();

function test() {
    return job().then(function (data) {
        doSomething(data);
        return job2().then(function (data) {
            doSomething(data);
            return job3().then(function (data) {
                doSomething(data);
                return job4().then(function (data) {
                    doSomething(data);
                });
            });
        });
    });
};

function job() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Job 1');
        }, 1000);
    });
};

function job2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Job 2');
        }, 1000);
    });
};

function job3() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Job 3');
        }, 1000);
    });
};

function job4() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Job 4');
        }, 1000);
    });
};

function doSomething(data) {

    console.log(data + " Data");

    console.log("End!");
};