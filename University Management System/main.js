#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    toString() {
        return `Person { Name: ${this.name}, Age: ${this.age} }`;
    }
}
class Student extends Person {
    rollNumber;
    courses = [];
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
    }
    registerForCourses(course) {
        this.courses.push(course);
    }
    toString() {
        return `Student { Name: ${this.name}, Age: ${this.age}, Student #id: ${this.rollNumber}, Course: [${this.courses
            .map((course) => `${course.name} (Instructor: ${course.instructors
            .map((inst) => inst.name)
            .join(", ")})`)
            .join(", ")}] }`;
    }
}
class Course {
    id;
    name;
    students = [];
    instructors = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addStudent(std) {
        this.students.push(std);
    }
    setInstructor(inst) {
        this.instructors.push(inst);
    }
    toString() {
        return `Course { Id: ${this.id}, Name: ${this.name}, students: [${this.students
            .map((student) => student.name)
            .join(", ")}], instructors: [${this.instructors
            .map((instructor) => instructor.name)
            .join(", ")}] }`;
    }
}
class Instructor extends Person {
    salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    assignCourse(course) {
        this.courses.push(course);
    }
    toString() {
        return `Instructor { Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}, courses: [${this.courses.map((course) => course.name).join(", ")}] }`;
    }
}
class Department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
    toString() {
        return `Department { Name: ${this.name}, Courses: [${this.courses
            .map((course) => course.name)
            .join(", ")}] }`;
    }
}
const instructor = [
    new Instructor("Arham", 26, 50000),
    new Instructor("Shahid", 35, 100000),
    new Instructor("Arif", 38, 160000),
    new Instructor("Sameer", 31, 90000),
    new Instructor("Nasir", 42, 120000),
    new Instructor("Shanzey", 28, 80000),
    new Instructor("Kamil", 36, 134000),
    new Instructor("Bilal", 29, 70000),
    new Instructor("Asharib", 25, 110000),
    new Instructor("Zia", 45, 180000),
    new Instructor("Daniyal", 32, 240000),
    new Instructor("Naheed", 41, 87000),
    new Instructor("Samreen", 36, 200000),
    new Instructor("Hamza", 31, 160000),
    new Instructor("Daniyan", 40, 280000),
    new Instructor("Salman", 42, 350000),
];
const courses = [
    new Course(1, "Computer Science"),
    new Course(2, "Data Science"),
    new Course(3, "Media Science"),
    new Course(4, "Agriculture Science"),
    new Course(5, "Civil Engineering"),
    new Course(6, "Software Engineering"),
    new Course(7, "Aerospace Engineering"),
    new Course(8, "Electrical Engineering"),
    new Course(9, "Human Resources"),
    new Course(10, "Business Adminstration"),
    new Course(11, "Accounting and Finance"),
    new Course(12, "Islamic Banking and Finance"),
    new Course(13, "Biology"),
    new Course(14, "Biochemistry"),
    new Course(15, "Psychology"),
    new Course(16, "Medicine and Surgery(MBBS)"),
];
const departments = [
    new Department("Science"),
    new Department("Engineering"),
    new Department("Management"),
    new Department("Medical"),
];
departments[0].addCourse(courses[0]);
departments[0].addCourse(courses[1]);
departments[0].addCourse(courses[2]);
departments[0].addCourse(courses[3]);
departments[1].addCourse(courses[4]);
departments[1].addCourse(courses[5]);
departments[1].addCourse(courses[6]);
departments[1].addCourse(courses[7]);
departments[2].addCourse(courses[8]);
departments[2].addCourse(courses[9]);
departments[2].addCourse(courses[10]);
departments[2].addCourse(courses[11]);
departments[3].addCourse(courses[12]);
departments[3].addCourse(courses[13]);
departments[3].addCourse(courses[14]);
departments[3].addCourse(courses[15]);
instructor[0].assignCourse(courses[0]);
instructor[1].assignCourse(courses[1]);
instructor[2].assignCourse(courses[2]);
instructor[3].assignCourse(courses[3]);
courses[0].setInstructor(instructor[0]);
courses[1].setInstructor(instructor[1]);
courses[2].setInstructor(instructor[2]);
courses[3].setInstructor(instructor[3]);
courses[4].setInstructor(instructor[4]);
courses[5].setInstructor(instructor[5]);
courses[6].setInstructor(instructor[6]);
courses[7].setInstructor(instructor[7]);
courses[8].setInstructor(instructor[8]);
courses[9].setInstructor(instructor[9]);
courses[10].setInstructor(instructor[10]);
courses[11].setInstructor(instructor[11]);
courses[12].setInstructor(instructor[12]);
courses[13].setInstructor(instructor[13]);
courses[14].setInstructor(instructor[14]);
courses[15].setInstructor(instructor[15]);
async function main() {
    const { studentName, studentAge, studentId = Math.floor(10000 + Math.random() * 90000), departmentName, courseName, instructorName, } = await inquirer.prompt([
        { type: "input", name: "studentName", message: "Enter student name:" },
        { type: "number", name: "studentAge", message: "Enter student age:" },
        // { type: "number", name: "rollNumber", message: "Enter roll number:" },
        {
            type: "list",
            name: "departmentName",
            message: "Select department:",
            choices: departments.map((d) => d.name),
        },
        {
            type: "list",
            name: "courseName",
            message: "Select course:",
            choices: function (answers) {
                const selectedDep = departments.find((d) => d.name === answers.departmentName);
                return selectedDep?.courses.map((c) => c.name) || [];
                const instt = courses.find((i) => i.instructors === answers.instructorName);
                return instt?.instructors.map((ii) => ii.name) || [];
            },
        },
    ]);
    const student = new Student(studentName, studentAge, studentId);
    const department = departments.find((d) => d.name === departmentName);
    const course = courses.find((c) => c.name === courseName);
    const instt = instructor.find((i) => i.name === courseName);
    if (course) {
        course.addStudent(student);
        student.registerForCourses(course);
    }
    console.log();
    console.log(chalk.green(student.toString()));
    console.log();
}
main();
