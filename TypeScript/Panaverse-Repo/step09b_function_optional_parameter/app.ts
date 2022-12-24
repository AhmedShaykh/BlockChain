//Named function with optional parameters
function buildName(firstName: string, lastName?: string): string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");  //works correctly because last parameter is optional
console.log(result1);

let result2 = buildName("Bob", "Adams", "Sr.");  //error, too many parameters

let result3 = buildName("Bob", "Adams");  //correct
console.log(result3);


//anonymous function type with optional parameters
var buildName1: (firstName: string, lastName?: string) => string =
    function (firstName: string, lastName?: string): string {
        if (lastName)
            return firstName + " " + lastName;
        else
            return firstName;
    }

let result4 = buildName1("Bob");  //works correctly because last parameter is optional
console.log(result4);

let result5 = buildName1("Bob", "Adams");  //correct
console.log(result5);