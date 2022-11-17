function promises() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            let problem = false;
            if (!problem) {
                console.log('Promise Fulfilled');
                resolve();
            } else {
                console.log('Promise is not Fulfilled');
                reject();
            }
        }, 1000);
    });
};

promises().then(() => {
    console.log(`Accepted your Proposal`);
}).catch(() => {
    console.log('Rejected your Proposal');
});

let promise = new Promise(function (resolve, reject) {
    let x = 20;
    if (x > 10) {
        resolve(x); // On Success
    } else {
        reject("Too low"); // On Error
    }
});
promise.then(
    function (value) {
        console.log("Success:", value);
    },
    function (error) {
        console.log("Error:", error);
    }
);

const mypromise = new Promise((resolve, reject) => {
    resolve("Success!");
})
    .then(value => {
        console.log(value);
        return "we";
    })
    .then(value => {
        console.log(value);
        return "can";
    })
    .then(value => {
        console.log(value);
        return "chain";
    })
    .then(value => {
        console.log(value);
        return "promises";
    })
    .then(value => {
        console.log(value);
    })
    .catch(value => {
        console.log(value);
    });

const promisex = new Promise((resolve, reject) => {
    reject("Oops... ");
})
    .then(value => {
        console.log(value);
        return "we";
    })
    .then(value => {
        console.log(value);
        return "can";
    })
    .then(value => {
        console.log(value);
        return "chain";
    })
    .then(value => {
        console.log(value);
        return "promises";
    })
    .then(value => {
        console.log(value);
    })
    .catch(value => {
        console.log(value);
    });

new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('Completed');
    }, 2000);
})
    .finally(() => console.log('Done'))
    .then(result => console.log(result));

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

delay(2000)
    .then(() => console.log('Running After 2 seconds'));