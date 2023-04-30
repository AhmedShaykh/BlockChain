function getToastPromise() {
    return new Promise((resolve, reject) => {

        let chiefMood = 7;

        setTimeout(() => {
            if (chiefMood >= 5) {
                resolve("Toast is Ready");
            }
            else {
                reject("I'm in a Bad Mood")
            }
        }, 2000);
    });
};

function friedEggPromise() {
    return new Promise((resolve, reject) => {

        let chiefMood = 4;

        setTimeout(() => {
            if (chiefMood >= 3) {
                resolve("Egg is Ready");
            }
            else {
                reject("I'm in a Bad Mood")
            }
        }, 1000);
    });
};

async function getResult() {

    try {

        let result = await getToastPromise();
        console.log(result);

        let eggResult = await friedEggPromise();
        console.log(eggResult);

    } catch (error) {

        console.log(error);

    }
};

getResult();