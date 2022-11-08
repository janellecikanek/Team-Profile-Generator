const Engineer = require("../lib/engineer");

test('creates an Engineer object', () => {
    const engineer = new Engineer('Bob', 1, 'bob@email.com', 'codenbob');
});

test("checks if engineer has github", () => {
    const github = "codenbob"
    const engineer = new Engineer(github);
	expect(engineer.github).toBe(String);
	expect(engineer.getGithub()).toBe(String);
});

it("checks if returns Engineer role", () => {
    const engineer = new Engineer('Bob', 1, 'bob@email.com', 'codenbob');
	expect(engineer.getRole()).toEqual("Engineer");
});
