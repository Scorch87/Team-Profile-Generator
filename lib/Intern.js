const Employee = require('./Employee');

class Intern extends Employee{
    constructor(id, email, school){
        // school
        super(id, email);
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

module.exports= Intern;