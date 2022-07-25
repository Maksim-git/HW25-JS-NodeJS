const Persone = require("../Person/script");

class Student extends Persone {
  constructor(name, age, gendor, interests) {
    super(name, age, gendor, interests);
  }
}

module.exports = Student;
