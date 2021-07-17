const Employee = require("./Employee");

//"extends" keyword will be used to inherit all methods from another class
//and "super" method to call the parents constructor function
class Intern extends Employee {
    constructor(name,id,email,role,school) {
        super(name,id,email);
        //override role from employee to manager
        this.role = "Intern";
        this.school = school;
        if (this.role === "Intern") {
            console.log("Information logged successful,", role);
        } else {
            console.log("no information is logged");
        }
         //getRole() function
         this.getRole = function() {
            return this.role;
        }
        //getPhone() function
        this.getSchool = function() {
            return this.school;
        }
    }
}
module.exports = Intern;