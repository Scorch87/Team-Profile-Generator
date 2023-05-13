const Employee = require('./Employee');

class Engineer extends Employee{
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

module.exports= Engineer;