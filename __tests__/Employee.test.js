const Employee = require("../index")

describe("Employee", () => {
    describe("Initalization", () => {
        it("should create an object with a name, id, and email if provided valid arguments", () => {
            const employee = new Employee("Bob", 1, "bob@email.com");

            expect(employee.name).toEqual("Bob");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("bob@email.com");
            
            
            expect(getRole) = Employee
            expect(getName) = name
        });
    })


    function Employee(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.getRole => { ${ this.name } ${ this.id } ${ this.email }
        }

    }
    const carl = new Employee("Carl", "1", "carl@email.com")
    carl.makeEmployee()
}

