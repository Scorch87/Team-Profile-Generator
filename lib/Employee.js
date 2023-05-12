
class Employee{
    // properties:
    // name, id
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    // methods:
    // getName()
    getName(){
        return this.name;
    }
    // getId()
    getId(){
        return this.id;
    }
    // getEmail()
    getEmail(){
        return this.getEmail;
    }
    // getRole() - returns 'Employee'
    getRole(){
        return 'Employee';
    }
}
// the Other three classes will extend Employee
module.exports = Employee;