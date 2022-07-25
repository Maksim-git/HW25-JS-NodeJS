const Persone = require("../Person/script");

class Teacher extends Persone {
  constructor(name, age, gendor, interests, subject) {
    super(name, age, gendor, interests);
    this.subject = subject;
  }
}

module.exports = Teacher;
