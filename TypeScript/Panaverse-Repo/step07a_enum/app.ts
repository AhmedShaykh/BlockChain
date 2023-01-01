enum Color { Red, Green, Blue };//starts with 0
var c: Color = Color.Green;

console.log(c);

enum Color1 { Red = 1, Green, Blue };
var colorName: string = Color1[3];

console.log(colorName);

enum Color2 { Red = 1, Green = 2, Blue = 4 };//can assign values to all
var colorIndex = Color2["Blue"];

console.log(colorIndex);

enum Color3 { Red = 0, Green = 5, Blue = 8 };//can assign values to all
var colorIndex2 = Color3["Blue"];
var colorIndex3 = Color3["Red"];

console.log(colorIndex2);
console.log(colorIndex3);

enum Color4 { Red = 0, Green, Blue = 1 };
var colorIndex4 = Color4["Blue"];
var colorIndex5 = Color4["Green"];

console.log(colorIndex4);
console.log(colorIndex5);