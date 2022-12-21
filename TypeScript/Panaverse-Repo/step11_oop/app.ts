class Car {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
};

const myCar = new Car("Bugatti");
console.log(`${myCar.name} is My Dream Car`);

class Person {
    static id: number = 0;

    personId: number;

    constructor() {
        this.personId = ++Person.id;
    }
}

const per = new Person();
console.log(per.personId);

const per2 = new Person();
console.log(per2.personId);

console.log(Person.id);

class ClassPerson {
    name?: string;
}

class StudentClass extends ClassPerson {
    course?: string;
    rollNumber?: string;
}

class Teacher extends ClassPerson {
    course?: string;
    timing?: string;
}

class Course {
    classTeacher?: Teacher;
    students?: StudentClass[];
    timing?: string;
}

const student1:StudentClass = new StudentClass();
student1.name="Student1";
student1.rollNumber = "1";

const student2:StudentClass = new StudentClass();
student2.name="Student2";
student2.rollNumber = "2";

const student3:StudentClass = new StudentClass();
student3.name="Student3";
student3.rollNumber = "3";

const teacher: Teacher = new Teacher();
teacher.name = "Teacher 1";
teacher.course = "PIAIC";
teacher.timing = "6-10";

const course:Course = new Course();
course.classTeacher = teacher;
course.timing=teacher.timing;
student1.course = teacher.course;
student2.course = teacher.course;
student3.course = teacher.course;

const stdArray: StudentClass[] = [student1, student2, student3];
course.students = stdArray;
console.log(course);

teacher.timing =  "10-11";
console.log(course);