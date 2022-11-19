function request() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Resolve!");
        }, 1000);
        reject("Reject!");
    });
};

let promise = request();

try {
    promise.then(function (data) {
        console.log(data);
    }).catch(function (error) {
        console.log(error);
    })
} catch (error) {
    console.log(error);
};

function job() {
    return new Promise(function (resolve, reject) {
        reject();
    });
}

let promisex = job();

promisex.then(function () {
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
    });