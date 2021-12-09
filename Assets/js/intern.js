const Employee = require('./employee');

class Intern extends Employee {
  constructor() {
    super();
    this.school = '';
  }

  getSchool() {
    return {
        type: 'input',
        name: 'school',
        message: "Student's School: "
      }
  }

  getRole() {
    this.role = 'Intern'
  }
}

module.exports = Intern;