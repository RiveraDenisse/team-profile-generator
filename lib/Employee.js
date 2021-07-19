class Employee {
    constructor(name,id,email,role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
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