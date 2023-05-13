var id = 0;
class Employee{
    // properties:
    // name, id
    constructor(name, email) {
        this.name = name;
        this.id = id++;
        this.email = email;
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
        return this.email;
    }
    // getRole() - returns 'Employee'
    getRole(){
        return 'Employee';
    }
}
// the Other three classes will extend Employee
module.exports = Employee;
