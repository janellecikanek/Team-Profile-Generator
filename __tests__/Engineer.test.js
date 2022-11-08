const Engineer = require("../lib/engineer");

test("checks if engineer has github", () => {
    const github = bob/github
    const engineer = new Engineer(github);
	expect(engineer.github).toBe(expect.any(String));
	expect(engineer.getGithub()).toBe(String);
});

it("checks if returns Engineer role", () => {
    const engineer = new Engineer('Bob', 1, 'bob@email.com', 'bob/github');
	expect(engineer.getRole()).toEqual("Engineer");
});
