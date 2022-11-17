let str1 = 1;
let str2 = " Addition";
let result = str1 + str2;

console.log(result);

let nr1 = 20;
let nr2 = 4;
let str3 = "Hi";
let nr3 = 3;
let result1 = nr1 - nr2;
let result2 = str3 - nr3;

console.log(result1, result2);

let str4 = "6";

result1 = nr1 * nr2;
result2 = str4 * nr3;

console.log(result1, result2);

result1 = nr1 / nr2;
result2 = str4 / nr3;

console.log(result1, result2);

let num = "4";
let num2 = "4";
console.log(num + num2);

let num3 = 3;
let num4 = 3;

let result4 = num3 ** num4;
console.log(result4);

let nr5 = 14;
let nr6 = 4;

let result3 = nr5 % nr6;
console.log(`${nr5} % ${nr6} = ${result3}`);

let count = 2;

count++;
console.log(count);

count--;
console.log(count);

let counter = 8;
let counter2 = counter++;
let counter3 = ++counter;

console.log("Counter: " + counter);
console.log("Counter 2: " + counter2);
console.log("Counter 3: " + counter3);

let x = 4;
x += 2;

console.log(x);

x -= 3;
console.log(x);

x += x;
console.log(x);

x *= 6;
console.log(x);

x /= 3;
console.log(x);

x **= 2;
console.log(x);

x %= 5;
console.log(x);

x -= x;
console.log(x);

let y = 5;
let z = "5";

console.log(z == y);
console.log(z === y);

console.log(z != y);
console.log(z !== y);

z = "4";
console.log(z != y);

let a = 5;
let b = 6;

console.log(a > b);

let c = 3;
console.log(c < a);

console.log(b <= a);

console.log(a >= c);

a = 10;
b = 11;
c = 12;

console.log(a < b && b > c);
console.log(a < b && b < c);

console.log(a < b || b > c);
console.log(b > c || c < a);

console.log(a != a);