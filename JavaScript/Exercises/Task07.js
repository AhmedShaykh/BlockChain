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

function friedEgg(callBack) {
    setTimeout(() => {
        callBack("Egg Fried!")
    }, 1000);
};

function toastBread(callBack) {
    setTimeout(() => {
        callBack("Toast Done!")
    }, 2000);
};

toastBread((param) => {
    console.log(param);
    friedEgg((para) => {
        console.log(para);
    });
});