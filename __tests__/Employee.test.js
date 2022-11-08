const Employee = require("../lib/employee");

//Employee Instance
//Can set name, id, email via constructor arguments

// describe("Employee", () => {
//     describe("Initization", () => {
//         it("should create an object with a name, id, and email if provided valid arguments", () => {

//             const obj = new Employee();
//             expect("name" in obj).toEqual(true);
//             expect("employee id in ob").toEqual(num);
//             expect("employee email in obj").toEqual(true);

//             //New Object
//             const Employee = new Employee('Bob', 1, "bob@email.com");
//             expect(employee.name).toEqual("");
//             expect(employee.id).toEqual(num);
//             expect(employee.email).toEqual("");

//             //Can get name via getName()
//             //const employee = new Employee('Bob', 1, "bob@email.com");
//             expect(employee.getName()).toEqual("Bob");

//             //Can get id via getName()
//             // const employee = new Employee('Bob', 1, "bob@email.com");
//             expect(employee.getID()).toEqual(1);

//             //can get emil via getEmail()
//             // const employee = new Employee('Bob', 1, "bob@email.com");
//             expect(employee.getEmail()).toEqual("bob@email.com");

//             // getRole()should return "Employee"
//             //const employee = new Employee('Bob', 1, "bob@email.com");
//             expect(employee.getRole()).toEqual("Employee");

//         });
//     });

// })

	// const id = 1;
	// const employee = new Employee(id);


    it("checks if all employees have an name", () => {
    const name = "Bob"
    const employee = new Employee(name);
	expect(employee.name).toEqual(expect.any(String));
	expect(employee.getName()).toBe(name);
});