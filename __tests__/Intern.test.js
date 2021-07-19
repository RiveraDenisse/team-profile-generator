const Intern = require("../lib/Intern");

//to create new intern class
const intern = new Intern("Denisse",20,"intern@email.com","intern","school");

//test creates a new intern with name,id,email,role and github
test('creates a new intern', () => {
    //checks if the name is a string
    expect(intern.name).toBe("Denisse");
    expect(intern.id).toBe(20);
    expect(intern.email).toBe("intern@email.com");
    expect(intern.role).toBe("Intern");
    expect(intern.school).toBe("school");
});
//getName()
test("get intern name", () => {    
    expect(intern.getName()).toBe("Denisse");
})
//getId()
test("get intern ID", () => {
    expect(intern.getId()).toBe("20");
})
//getemail()
test("get intern email", () => {
    expect(intern.getEmail()).toBe("intern@email.com");
})
//getRole()
test("get intern role", () => {
    expect(intern.getRole()).toBe("Intern");
})
//getSchool()
test("get intern School", () => {
    expect(intern.getSchool()).toBe("school");
})
