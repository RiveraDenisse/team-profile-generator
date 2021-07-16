const Employee = require("../lib/Employee");


//test creates a new employee with name,id,email
test('creates an employee with name id and email', () => {
    const employee = new Employee("Denisse",20,"test@email","Employee");
    //checks if the name is a string
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual('Employee');
});

//getName()
test("get employee name", () => {
    const employee = new Employee("Denisse",20,"test@email","Employee");
    
    expect(employee.getName()).toBe("Denisse");
})

