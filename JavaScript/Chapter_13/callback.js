function doSomething(callback) {
    callback();
};

function sayHi() {
    console.log("Say Hi!");
};

doSomething(sayHi);

function judge(grade) {
    switch (true) {
        case grade == "A":
            console.log("You got an", grade, ": amazing!");
            break;
        case grade == "B":
            console.log("You got a", grade, ": well done!");
            break;
        case grade == "C":
            console.log("You got a", grade, ": alright.");
            break;
        case grade == "D":
            console.log("You got a", grade, ": hmmm...");
            break;
        default:
            console.log("An", grade, "! What?!");
    }
};

function getGrade(score, callback) {
    
    let grade;

    switch (true) {
        case score >= 90:
            grade = "A";
            break;
        case score >= 80:
            grade = "B";
            break;
        case score >= 70:
            grade = "C";
            break;
        case score >= 60:
            grade = "D";
            break;
        default:
            grade = "F";
    }

    callback(grade);
};

getGrade(85, judge);

function printToken(msg, alertToken) {
    if (msg === 'Bitcoin') {
        btc(alertToken)
    }
    else if (msg === 'Ethereum') {
        eth(alertToken)
    }
    else if (msg === 'Solana') {
        sol(alertToken)
    }
    else {
        console.log('No Data Here!')
    }
};

function btc(alertToken) {
    alertToken("Hello Bitcoin")
    console.log("Buy & Sell Bitcoin");
};

function eth(alertToken) {
    alertToken("Hello Ethereum")
    console.log("Buy & Sell Ethereum");
};

function sol(alertToken) {
    alertToken("Hello Solana")
    console.log("Buy & Sell Solana");
};

function alertToken(msg) {
    console.log(msg);
};

printToken("Solana", alertToken);