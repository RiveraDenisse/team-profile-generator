const Employee = require("../lib/Employee");


test('assign name to new employee', () => {
    const employee = new Employee('Denisse');

    expect(employee.name).toBe('Denisse');
    //expect(employee.value).toEqual(expect.any(Number));
});


test('assign name to new employee', () => {
    const employee = new Employee('Denisse');

    expect(employee.name).toBe('Denisse');
    
});