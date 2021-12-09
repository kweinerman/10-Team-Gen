const Employee = require('./employee');

class Manager extends Employee {
  constructor(){
    super();
    this.officeNumber = '';
  }

  getOfficeNumber() {
    return {
        type: 'number',
        name: 'officeNumber',
        message: "Number: "
      }
  };

  getRole() {
    this.role = 'Manager';
  }
}

module.exports = Manager;