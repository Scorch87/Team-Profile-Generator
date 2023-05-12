const Employee = require("./Employee");

class Intern extends Employee{
    constructor(id, school){
        // school
        super(id);
        this.school = school;
    }
    // getSchool
    getSchool(){
        return this.school;
    }

    // getRole() -- overridden to return 'Intern'
    getRole(){
        return 'Intern'
    }
}

module.exports = Intern;