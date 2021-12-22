
const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, engineerGithub) {
        super(name, id, email);
        this.engineerGithub = engineerGithub;
    }
    getengineerGithub() {
        return this.engineerGithub;
    }
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;
