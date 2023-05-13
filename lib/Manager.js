import Employee from './Employee.js';

export class Manager extends Employee{
    constructor(id, email, officeNumber){
        super(id, email);
        // officeNumber
        this.officeNumber = officeNumber;
    }
    // getRole() - overridden to return 'Manager'
    getRole(){
        return 'Manager';
    }
}

export default Manager;