function buildName(firstName: string, ...restOfName: string[]) {//Named function with Rest parameters
	return firstName + " " + restOfName.join(" ");
};

var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);

//anonymous function type with Rest parameters
var buildNameFun: (fname: string, ...rest: string[]) => string =
	function (firstName: string, ...restOfName: string[]) {
		return firstName + " " + restOfName;
	};

console.log(buildNameFun("Joseph", "Samuel", "Lucas", "MacKinzie"));