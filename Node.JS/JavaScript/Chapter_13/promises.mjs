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
    let x = 1;
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
    resolve("success!");
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
    reject("oops... ");
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