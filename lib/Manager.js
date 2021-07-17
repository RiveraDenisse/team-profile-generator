const Employee = require("./Employee");

//"extends" keyword will be used to inherit all methods from another class
//and "super" method to call the parents constructor function
class Manager extends Employee {
    constructor(name,id,email,role,phone) {
        super(name,id,email);
        //override role from employee to manager
        this.role = "Manager";
        this.phone = phone;
        if (this.role === "Manager") {
            console.log("Information logged successful,", role);
        } else {
            console.log("no information is logged");
        }
        //getRole() function
        this.getRole = function() {
            return this.role;
        }
        //getPhone() function
        this.getPhone = function() {
            return this.phone;
        }
    }
}
module.exports = Manager;