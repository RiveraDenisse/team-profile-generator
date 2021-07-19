const Employee = require("./Employee");

//"extends" keyword will be used to inherit all methods from another class
//and "super" method to call the parents constructor function
class Manager extends Employee {
    constructor(name,id,email,phone,role) {
        super(name,id,email);
        //override role from employee to manager
        this.role = "Manager";
        this.phone = phone;
    }
    getRole() {
        return `${this.role}`;
    }
    // Get Office Number
    getOffice() {
        return `${this.phone}`;
    }
}
module.exports = Manager;