// The other three classes will extend Employee.
// In addition to Employee's properties and methods, Manager will also have:

// officeNumber - can set office number via constructor argument
// getRole() // Overridden to return 'Manager'
// xcan get office number via getOffice()

// thoughts from employee test
 // xconst employeeName = new employeeName
        // xexpect(Employee).toEqual([]);
        // xexpect(getRole).toReturn("Employee");
        // xexpect(getMail).toReturn("email")
        // xexpect(getId).toReturn("id")
        // xexpect(getName).toReturn("name")

        // xexpect(Employee([Bob, 1, bob@gmail.com])).toBe("Bob", 1, "bob@gmail.com");


// xconst result = new Employee()
// xreturn new Employee;

//        xexpect getName()return.this.name;

it("checks if all employees have an name", () => {
        const name = "Tim"
        const employee = new Employee(name);
            expect(employee.name).toEqual(expect.any(String));
            expect(employee.getName()).toBe(name);
    });