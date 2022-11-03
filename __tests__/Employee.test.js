const Employee = require("../index.js")

describe("Employee", () => {
describe("Initalization", () => {
    it ("should create an object with a name, id, and email if provided valid arguments", () => {
        const employee = new Employee ("Bob", 1, "bob@email.com");

        expect(employee.name).toEqual("Bob");
        expect(employee.id).toEqual(1);
        expect(employee.email).toEqual("bob@email.com");
    });
})

})
// Employee parent class with the following properties and methods:
// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'