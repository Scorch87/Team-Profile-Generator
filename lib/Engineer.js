import Employee from './Employee.js';

export class Engineer extends Employee{
    // github - Github 
    constructor(id, email, github){
        super(id, email);
        this.github = github;
    }

    // getGithub()
    getGithub(){
        return this.github;
    }

    // getRole()
    getRole(){
        return 'Engineer';
    }
}

export default Engineer;