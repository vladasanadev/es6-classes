class Employee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
  get fullName() {
    return `My name is ${this.name}`;
  }
  get fullAge() {
    return `My age is ${this.age}`;
  }
  get fullSalary() {
    return `My salary is ${this.salary}`;
  }
  set fullName(value) {
    this.name = value;
  }
  set fullAge(value) {
    this.age = value;
  }
  set fullSalary(value) {
    this.salary = value;
  }
}

class Programmer extends Employee {
  constructor(name, age, salary, lang) {
    super(name, age, salary);
    this.lang = lang;
  }
  get fullSalary() {
    return this.salary * 3;
  }
}

const vlada = new Programmer("vlada", 24, 3400);
console.log(vlada);

const yura = new Programmer("yura", 24, 3000, { lan1: "en", lan2: "rus" });
console.log(yura);
console.log(yura.fullSalary);
