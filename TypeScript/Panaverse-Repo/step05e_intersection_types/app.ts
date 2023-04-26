interface Student {
    student_id: number;
    name: string;
}

interface Teacher {
    teacher_Id: number;
    teacher_name: string;
}

type intersected_type = Student & Teacher;

let obj1: intersected_type = {
    student_id: 3232,
    name: "Ahmed",
    teacher_Id: 7873,
    teacher_name: "Zia",
};

console.log(obj1.teacher_name);
console.log(obj1.name);
console.log(obj1);