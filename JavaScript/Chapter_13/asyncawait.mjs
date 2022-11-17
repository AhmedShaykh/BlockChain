function saySomething(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("something " + x);
        }, 2000);
    });
};

async function talk(x) {
    const words = await saySomething(x);
    console.log(words);
};

talk(2);
talk(4);
talk(8);

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Resolved');
        }, 2000);
    });
};

async function asyncCall() {
    console.log('Calling');

    const result = await resolveAfter2Seconds();
    console.log(result);

};

asyncCall();

async function funcAsync() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Done!"), 1000)
    });

    let result = await promise;
    console.log(result);
}

funcAsync();