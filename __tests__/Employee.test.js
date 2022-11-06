const Employee = require("../lib/employee");


describe("Employee", () => {
describe("Initization", () => {
    it("should create an object with a name, id, and email if provided valid arguments", () => {
        const obj = new Employee();
        expect ("name" in obj).toEqual(true);
    });




   
       const employee = new Employee('Bob');
      expect(employee.name).toEqual("Bob");
      expect(employee.id).toEqual(1);
       expect(employee.email).toEqual("bob@email.com");

       const result = new Employee()
       expect(result).toEqual()