function doOuterFunctionStuff(nr) {

    console.log("Outer function");

    doInnerFunctionStuff(nr);

    function doInnerFunctionStuff(x) {
        console.log(x + 7);
        console.log("I can access outer variables:", nr);
    };

};

doOuterFunctionStuff(2);

function doOuterFunctionStuff2(nr) {

    doInnerFunctionStuff2(nr);

    function doInnerFunctionStuff2(nr) {
        nr = 10;
        console.log("Inner Function", nr);
    };

    console.log("Not accessible:", nr);
};

doOuterFunctionStuff2(2);