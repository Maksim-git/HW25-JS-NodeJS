const Student = require("./Users/Student/script");
const Teacher = require("./Users/Teacher/script");

let student = new Student("VIC", 25, "male", "read books");
let teacher = new Teacher("Anna", 31, "female", "teaching", "English");

console.log(student);
console.log(teacher);
