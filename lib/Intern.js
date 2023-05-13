import Employee from './Employee.js';

export class Intern extends Employee{
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

export default Intern;