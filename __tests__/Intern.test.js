const Intern = require("../lib/intern");

test('creates an Intern object', () => {
    const intern = new Intern('Bob', 1, 'bob@email.com', 'UofM');
});

test("checks if intern has school", () => {
    const school = "UofM"
    const intern = new Intern(school);
	expect(intern.school).toBe(expect.any(String));
	expect(intern.getSchool()).toBe(String);
});

it("checks if returns Intern role", () => {
    const intern = new Intern('Bob', 1, 'bob@email.com', 'UofM');
	expect(intern.getRole()).toEqual("Intern");
});
