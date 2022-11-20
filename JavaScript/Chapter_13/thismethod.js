const ladder = {
    step: 0,
    stepUp() {
        this.step++
        console.log(this.step);
    },
    stepDown() {
        this.step--
        console.log(this.step);
    },
    showStep() {
        console.log(this.step);
    }
}

ladder.stepUp();
ladder.showStep();
ladder.stepUp();
ladder.stepDown();

let myObject = {
    foo: "bar",
    func: function () {
        var self = this;
        console.log("Outer func:  this.foo = " + this.foo); // bar
        console.log("Outer func:  self.foo = " + self.foo); // bar
        (function () {
            console.log("Inner func:  this.foo = " + this.foo); // undefined
            console.log("Inner func:  self.foo = " + self.foo); // bar
        }());
    }
};

myObject.func();

let obj1 = {
    meeting: 0,
    meetDone: 0,
    addMeeting(a) {
        this.meeting = this.meeting + a
    },
    summary() {
        console.log(`You have ${this.meeting} Meetings Left`);
    },
    decrementMeet() {
        this.meeting = this.meeting - 1
    },
    decrementSummary() {
        console.log(`You have ${this.meeting} Meetings Left`);
    },
    resetMeeting() {
        this.meeting = 0;
    },
    meetLeft() {
        console.log(`You have ${this.meeting} Meeting ...!`);
    },
    addMeetDone() {
        this.meetDone++
    },
    summaryMeetDone() {
        console.log(`You have Done ${this.meetDone} Meeting ...!`);
    }
};

obj1.addMeeting(2);
obj1.addMeeting(2);
obj1.summary();
obj1.addMeetDone();
obj1.summaryMeetDone();
obj1.decrementMeet();
obj1.decrementSummary();
obj1.resetMeeting();
obj1.meetLeft();

class Solana { // ======== This Method Specialy use in Classes ======== //
    constructor(height, width) {
        this.height = height;
        this.width = width;
    };
};

let Coin = new Solana();
Coin.height = 100;
Coin.width = 300;
console.log(Coin);