class Employee {
    constructor() {
      this.name = "";
      this.id = "";
      this.email = "";
      this.role = "";
    }
    
    getName() {
      return {
          type: 'input',
          name: 'name',
          message: "Employee's Name: "
        }
    };
  
    getID() {
      return {
          type: 'input',
          name: 'id',
          message: "Employee's ID: "
        }
    };
  
    getEmail() {
      return {
          type: 'input',
          name: 'email',
          message: "Employee's Email Address: "
        }
    };
  
    getRole() {
      this.role = 'Employee';
    }
  }
  
  module.exports = Employee;