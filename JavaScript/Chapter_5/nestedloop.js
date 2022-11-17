let arrOfArrays = [];

for (let i = 0; i < 3; i++) {
    arrOfArrays.push([]);
    for (let j = 0; j < 7; j++) {
        arrOfArrays[i].push(j);
    }
};

console.log(arrOfArrays);

console.table(arrOfArrays);