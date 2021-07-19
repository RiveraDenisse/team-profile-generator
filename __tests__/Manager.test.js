const Manager = require("../lib/Manager");

//to create new manager class
const manager = new Manager("Denisse",20,"manager@email.com","123-456-7890","Manager");

//test creates a new manager with name,id,email
test('creates a new Manager', () => {
    //checks if the name is a string
    expect(manager.name).toBe("Denisse");
    expect(manager.id).toBe(20);
    expect(manager.email).toBe("manager@email.com");
    expect(manager.role).toBe("Manager");
    expect(manager.phone).toBe("123-456-7890");
});
//getName()
test("get name", () => {    
    expect(manager.getName()).toBe("Denisse");
})

//getId()
test("get  ID", () => {
    expect(manager.getId()).toBe("20");
})

//getemail()
test("get  email", () => {
    expect(manager.getEmail()).toBe("manager@email.com");
})
//getrole()
test("get manager role", () => {
    expect(manager.getRole()).toBe("Manager");
})
//getphone()
test("get manager phone", () => {
    expect(manager.getOffice()).toBe("123-456-7890");
})