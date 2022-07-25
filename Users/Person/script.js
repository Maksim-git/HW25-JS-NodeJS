class Persone {
  constructor(name, age, gendor, interests) {
    this.name = name;
    this.age = age;
    this.gendor = gendor;
    this.interests = interests;
  }
  bio() {
    console.log(
      `${this.name} is ${this.age} years old. They like ${this.interests}`
    );
  }
  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  }
}

module.exports = Persone;
