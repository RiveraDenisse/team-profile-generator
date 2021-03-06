const Employee = require("../lib/Employee");
//to create new employee
const employee = new Employee("Denisse",20,"test@email.com","Employee");

//test creates a new employee with name,id,email
test('creates an employee with name id and email', () => {
    //checks if the name is a string
    expect(employee.name).toBe("Denisse");
    expect(employee.id).toBe(20);
    expect(employee.email).toBe("test@email.com");
    expect(employee.role).toBe('Employee');
});

//getName()
test("get employee name", () => {    
    expect(employee.getName()).toBe("Denisse");
})

//getId()
test("get employee ID", () => {
    expect(employee.getId()).toBe("20");
})

//getemail()
test("get employee email", () => {
    expect(employee.getEmail()).toBe("test@email.com");
})
//getrole()
test("get employee role", () => {
    expect(employee.getRole()).toBe("Employee");
})

