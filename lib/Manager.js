const Employee = require("./Employee");

class Manager extends Employee{
    constructor(id, officeNumber){
        super(id);
        // officeNumber
        this.officeNumber = officeNumber;
    }
    // getRole() - overridden to return 'Manager'
    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;