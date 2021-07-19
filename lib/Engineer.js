const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name,id,email,role,github) {
        super(name,id,email);
        //override role from employee to engineer
        this.role = "Engineer";
        this.github = github;
        //getRole() function
        this.getRole = function() {
            return this.role;
        }
        //getPhone() function
        this.getGithub = function() {
            return this.github;
        }
    }
}

module.exports = Engineer;