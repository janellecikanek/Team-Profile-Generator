const Employee = require("../lib/employee");

test('creates an employee object', () => {
    const employee = new Employee('Bob', 1, 'bob@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

it("checks if all employees have an name", () => {
    const name = "Bob"
    const employee = new Employee(name);
	expect(employee.name).toEqual(expect.any(String));
	expect(employee.getName()).toBe(name);
});

test("checks if all employees have an id", () => {
    const id = 1
    const employee = new Employee(id);
	expect(employee.id).toBe(expect.any(Number));
	expect(employee.getId()).toEqual(expect.any(Number));
});

it("checks if all employees have an email", () => {
    const email = 'bob@email.com'
    const employee = new Employee(email);
	expect(employee.email).toEqual(expect.any(String));
	expect(employee.getEmail()).toBe(email);
});

it("checks if returns Employee role", () => {
    const employee = new Employee('Bob', 1, 'bob@email.com');
	expect(employee.getRole()).toEqual("Employee");
});
