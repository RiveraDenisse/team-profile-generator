module.exports = Employee;

function Employee (name,id,email,role) {
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
    this.getName = function () {
        return this.name;
    }
}