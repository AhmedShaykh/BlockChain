function request() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("Reject!");
        }, 1000);
        resolve("Resolve!");
    });
};

let promise = request();

promise.then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.log(error);
});

function job() {
    return new Promise(function (resolve, reject) {
        reject();
    });
}

let promises = job();

promises.then(function () {
    console.log('Success 1');
})

    .then(function () {
        console.log('Success 2');
    })

    .then(function () {
        console.log('Success 3');
    })

    .catch(function () {
        console.log('Error 1');
    })

    .then(function () {
        console.log('Success 4');
    })

    .catch(function () {
        console.log('Error 2');
    });