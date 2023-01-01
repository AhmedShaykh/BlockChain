"use strict";
function buildName(firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}
;
var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
//anonymous function type with Rest parameters
var buildNameFun = function (firstName, ...restOfName) {
    return firstName + " " + restOfName;
};
console.log(buildNameFun("Joseph", "Samuel", "Lucas", "MacKinzie"));
