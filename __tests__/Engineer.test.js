const Engineer = require("../lib/Engineer");
//to create new engineer class
const engineer = new Engineer("Denisse",20,"engineer@email.com","Engineer","githubusername");

//test creates a new engineer with name,id,email,role and github
test('creates a new Engineer', () => {
    //checks if the name is a string
    expect(engineer.name).toBe("Denisse");
    expect(engineer.id).toBe(20);
    expect(engineer.email).toBe("engineer@email.com");
    expect(engineer.role).toBe("Engineer");
    expect(engineer.github).toBe("githubusername");
});
//getName()
test("get engineer name", () => {    
    expect(engineer.getName()).toBe("Denisse");
})
//getId()
test("get engineer ID", () => {
    expect(engineer.getId()).toBe("20");
})
//getemail()
test("get engineer email", () => {
    expect(engineer.getEmail()).toBe("engineer@email.com");
})
//getRole()
test("get engineer role", () => {
    expect(engineer.getRole()).toBe("Engineer");
})
//getGithub()
test("get engineer github", () => {
    expect(engineer.getGithub()).toBe("githubusername");
})
