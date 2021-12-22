const Employee = require("./employee");


class Intern extends Employee {
    constructor(name, id, email, internSchool) {
        super(name, id, email);
        this.internSchool = internSchool;
    }
    getinternSchool() {
        return this.internSchool;
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;