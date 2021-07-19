class Employee {
    constructor(name,id,email,role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
        if (this.name === name) {
            console.log("Information logged successful,", name,id,email,role);
        } else {
            console.log("no information is logged");
        }
    }
    //getName() function
   getName() {
        return `${this.name}`;
    }
    //getId() function
   getId() {
        return `${this.id}`;
    }
    //getId() function
   getEmail() {
        return `${this.email}`;
    }
    //getRole() function
  getRole() {
        return `${this.role}`;
    }
}
module.exports = Employee;