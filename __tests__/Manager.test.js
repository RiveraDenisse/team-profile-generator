const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");
//to create new employee class
const manager = new Manager("Denisse",20,"manager@email.com","Manager","123-456-7890");

//test creates a new employee with name,id,email
test('creates a new Manager', () => {
    //checks if the name is a string
    expect(manager.name).toBe("Denisse");
    expect(manager.id).toBe(20);
    expect(manager.email).toBe("manager@email.com");
    expect(manager.role).toBe("Manager");
    expect(manager.phone).toEqual(expect.any(String));
});

//getrole()
test("get manager role", () => {
    expect(manager.getRole()).toBe("Manager");
})
//getphone()
test("get manager phone", () => {
    expect(manager.getPhone()).toEqual(expect.any(String));
})