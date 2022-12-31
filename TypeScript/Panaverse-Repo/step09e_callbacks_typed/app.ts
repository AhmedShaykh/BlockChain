function myCallBack(text: string): void {
    console.log("inside myCallback " + text);
};

function callingFunction(initialText: string, callback: (text: string) => void): void {
    callback(initialText);
};

callingFunction("myText", myCallBack);