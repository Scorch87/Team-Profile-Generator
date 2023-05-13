const Employee = require("../lib/Employee");

describe("Employee", ()=>{
    describe("Initialization", ()=>{
        it("should return an object containing name, id, and email properties when called with the 'new keyword",()=>{
            // logic for testing
            const obj = new Employee('Roger Goodell', 'rgoodell@nfl.com');
            expect("name" in obj).toEqual('Roger Goodell');
            expect("id" in obj).toEqual(0);
            expect("email" in obj).toEqual('rgoodell@nfl.com');
        });
    })

    describe("getName", ()=>{
        it("should return a string matching the name passed in as a parameter.", ()=>{
            const obj = new Employee('Roger Goodell', 'rgoodell@nfl.com');
            const result = obj.getName();
            expect(result).toEqual('Roger Goodell');
        })
    })

    describe("getId", ()=>{
        it("should return an integer matching the id number for the employee", ()=>{
            const obj = new Employee('Roger Goodell', 'rgoodell@nfl.com');
            const result = obj.getId();
            expect(result).toEqual(2);
        })
    })

    describe("getEmail", ()=>{
        it("should return a string matching the email address for the employee", ()=>{
            const obj = new Employee('Roger Goodell', 'rgoodell@nfl.com');
            const result = obj.getEmail();
            expect(result).toEqual('rgoodell@nfl.com');
        })
    })

    describe("getRole", ()=>{
        it("should return a string that describes the role this employee has", ()=>{
            const obj = new Employee('Roger Goodell', 'rgoodell@nfl.com');
            const result = obj.getRole();
            expect(result).toEqual('Employee');
        })
    })
})