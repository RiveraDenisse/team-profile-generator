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
        if (this.role === "Engineer") {
            console.log("Information logged successful,", Engineer);
        } else {
            console.log("no information is logged");
        }
    }
}

module.exports = Engineer;