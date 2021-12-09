
const Employee = require('./employee');

class Engineer extends Employee {
  constructor(){
    super();
    this.github = "";
  }

  getGithub() {
    return {
        type: 'input',
        name: 'github',
        message: "Engineer's GitHub User Name: "
      }
  }

  getRole() {
    this.role = 'Engineer';
  }
}

module.exports = Engineer;
