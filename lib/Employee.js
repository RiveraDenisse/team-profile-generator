class Employee {
    constructor(name,id,email,role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
        if (this.name === name) {
            console.log("Information logged successful,", name,id,email,role);
        } else {
            console.log("no information is logged");
        }

        //getName() function
        this.getName = function() {
            return this.name;
        }
        //getId() function
        this.getId = function() {
            return this.id;
        }
        //getId() function
        this.getEmail = function() {
            return this.email;
        }
        //getRole() function
        this.getRole = function() {
            return this.role;
        }
    }
}
module.exports = Employee;