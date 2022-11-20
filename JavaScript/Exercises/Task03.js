function job1(callback) {
    setTimeout(function () {
        callback('test 1');
    }, 3000);
};

function job2(callback) {
    setTimeout(function () {
        callback('test 2');
    }, 2000);
};

function job3(callback) {
    setTimeout(function () {
        callback();
    }, 1000);
};

function job4(callback) {
    setTimeout(function () {
        callback();
    }, 2000);
};

job1(function (data) {
    console.log(data);

    job2(function (data) {
        console.log(data);

    });

});

function doSomething1() {
    console.log('test 3');
};

function doSomething2() {
    console.log('test 4');
};

var counter = 0;

job3(function () {
    doSomething1();

    counter += 1;

    console.log(`Counter: ${counter}`);

    if (counter == 2) {
        done();
    };
});

job4(function () {
    doSomething2();

    counter += 1;

    console.log(`Counter: ${counter}`);

    if (counter == 2) {
        done();
    };
});

function done() {
    console.log('done');
};