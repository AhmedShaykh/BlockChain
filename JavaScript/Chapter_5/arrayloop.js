let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
};

let namesarr = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];

for (let i = 0; i < namesarr.length; i++) {
    console.log(namesarr[i] = "Hello " + namesarr[i]);
};

let students = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];

for (let i = 0; i < students.length; i++) {
    if (students[i].startsWith("B")) {
        delete names[i];
        continue;
    };
    students[i] = "hello " + students[i];
};

console.log(names);

let frameWork = ['React', 'Next', 'Ether', 'Node'];

frameWork.forEach(function (e) {
    console.log('Working In ' + e + ' JS')
});

let num = [18, 56, 98];

for (let e of num) {
    console.log('==> ' + e);
};