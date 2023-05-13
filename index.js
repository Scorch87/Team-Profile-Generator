const inquirer = require('inquirer');
// import inquirer from 'inquirer';
const fs = require('fs')
// import fs from 'fs';
const Employee = require('./lib/Employee');
// import Employee from './lib/Employee.js';
const Manager = require('./lib/Manager');
// import Manager from './lib/Manager.js';
const Engineer = require('./lib/Engineer');
// import Engineer from './lib/Engineer.js';
const Intern = require('./lib/Intern');
// import Intern from './lib/Intern.js';


const buildData = [];
const generateHTML = () =>{
    var html = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=chrome">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
      <title>My Team</title>
    </head>
    <body>
      <header class="p-5 mb-4 header bg-light">
        <h1>My Team</h1>
      </header>
      <div class="container-fluid">
        <div class="row">
            <div class="col-md-4">
                <div class ="card">
                    <h2>${buildData[0].name}</h2>
                    <h2>${buildData[1]}</h2>
                    <div class="job-title">
                        <ul>
                            <li>id: ${buildData[0].id}</li>
                            <li>email: ${buildData[0].email}</li>
                            <li>Office Number: ${buildData[0].officeNumber}</li>
                        </ul>
                    </div>
                </div>
            </div>    
            <div class="col-md-4">
                <div class ="card">
                    <h2>${buildData[2].name}</h2>
                    <h2>${buildData[3]}</h2>
                    <div class="job-title">
                        <ul>
                            <li>${buildData[2].id}</li>
                            <li>${buildData[2].email}</li>
                            <li><a href="${buildData[2].githubURL}">${buildData[2].github}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class ="card">
                    <h2>${buildData[4].name}</h2>
                    <h2>${buildData[5]}</h2>
                    <div class="job-title">
                        <ul>
                            <li>${buildData[4].id}</li>
                            <li>${buildData[4].email}</li>
                            <li><a href="${buildData[4].githubURL}">${buildData[4].github}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class ="card">
                    <h2>${buildData[6].name}</h2>
                    <h2>${buildData[7]}</h2>
                    <div class="job-title">
                        <ul>
                            <li>${buildData[6].id}</li>
                            <li>${buildData[6].email}</li>
                            <li><a href="${buildData[6].githubURL}">${buildData[6].github}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class ="card">
                    <h2>${buildData[8].name}</h2>
                    <h2>${buildData[9]}</h2>
                    <div class-"job-title">
                        <ul>
                            <li>${buildData[8].id}</li>
                            <li>${buildData[8].email}</li>
                            <li>${buildData[8].school}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>`
    return html;
};

// this Step is not repeated.
// start app, enter manager, then give options for next action
// 1) add engineer
// 2) add intern
// 3) I'm done
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the team Manager',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the email of the Manager',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter the managers office number',
    },
    ]).then((answers) => {
        const manager = new Manager(answers.name, answers.email, answers.officeNumber)
        buildData.push(manager);
        var role = manager.getRole();
        buildData.push(role);
        console.log(buildData);
        inquirerMenu();
    })
    .then((buildData)=>{
        console.log(buildData);
    })

// This Step is repeated.
// if engineer, prompt for engineer, build engineer, then give options:
// 1) add engineer
// 2) add intern
// 3) I'm done
const inquirerMenu = ()=>{
    inquirer.prompt([
        {
            type: 'list',
            name: 'nextAction',
            message: 'What would you like to do next?',
            choices: ['Add an Engineer', 'Add an Intern', 'Finished with Team'],
        }
    ]).then((answers)=>{
        if(answers.nextAction === 'Add an Engineer'){
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Enter the name of the Engineer',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Enter the email of the Engineer',
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is their Github profile name?',
                },
                {
                    type: 'input',
                    name: 'githubURL',
                    message: 'What is their Github profile URL?',
                },
            ])
            .then((answers) =>{
                const engineer = new Engineer(answers.name, answers.email, answers.githubURL)
                buildData.push(engineer);
                var role = engineer.getRole();
                buildData.push(role);
                console.log(buildData);
                inquirerMenu();
            })
        // if intern, prompt for intern, build intern, then give options:
        // 1) add engineer
        // 2) add intern
        // 3) I'm done
        } else if (answers.nextAction === 'Add an Intern'){
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Enter the name of the Intern',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Enter the email of the Intern',
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'Where do they attend school?',
                },
            ])
            .then((answers) =>{
                const intern = new Intern(answers.name, answers.email, answers.school)
                buildData.push(intern);
                var role = intern.getRole();
                buildData.push(role);
                console.log(buildData);
                inquirerMenu();
            })
        } else if(answers.nextAction === 'Finished with Team') {
            // if Im done
            // return data
            // build html
            console.log(buildData);
            const htmlContent = generateHTML();
            fs.writeFile('index.html', htmlContent, (err) => {
            err ? console.log(err) : console.log('Successfully created index.html')
        });
            return buildData;
        }  
    })
}

const appendTeamData = (data)=>{
    for(var i = 0; i < buildData.length; i++){
        var contentContainer = document.querySelector('#container');
        //add a div with class of card
        var employeeCard = document.createElement('div');
        employeeCard.classList.add('card');
        // add an h2 with id of name
        var employeeName = document.createElement('h2');
        employeeName.textContent = data[i].Employee.name;
        var employeeRole = document.createElement('h2');
        employeeRole.textContent = data[i+1];
        // add a div with an id of job-title
        var jobDiv = document.createElement('div');
        jobDiv.setAttribute('id', 'job-title');
        // add a ul element
        var ulEl = document.createElement('ul');
        // add a li with an id of id
        var idEl = document.createElement('li');
        idEl.textContent = data[i].Employee.id;
        // add a li with an id of email
        var emailEl = document.createElement('li');
        emailEl.textContent = data[i].Employee.email;
        // add a li with an id of info
        var infoEl = document.createElement('li');
        if(data[i]===Manager){
            infoEl.textContent = data[i].officeNumber;
        } else if(data[i]===Engineer){
            infoEl.textContent = data[i].github;
        } else if(data[i]===Intern){
            infoEl.textContent = data[i].school;
        }
        employeeCard.append(employeeName, employeeRole, jobDiv, ulEl, idEl, emailEl, infoEl);
        contentContainer.append(employeeCard);
    }
}

appendTeamData(buildData);






