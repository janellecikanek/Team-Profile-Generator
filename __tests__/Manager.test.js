const Manager = require("../lib/manager");

test('creates an Manager object', () => {
    const manager = new Manager('Bob', 1, 'bob@email.com', 6313);
});

test("checks if manager has office number", () => {
    const office = 6313
    const manager  = new Manager(office);
	expect(manager.office).toBe(Number);
	expect(manager.getOffice()).toBe(Number);
});

it("checks if returns Manager role", () => {
    const manager = new Manager('Bob', 1, 'bob@email.com', 6313);
	expect(manager.getRole()).toEqual("Manager");
});


