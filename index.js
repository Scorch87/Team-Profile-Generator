const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

const generateHTML = () =>{
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
      <title>My Team</title>
    </head>
    <body>
      <header class="p-5 mb-4 header bg-light">
        <h1>My Team</h1>
      </header>
      <div class="container">
        <div class = "card">
            <h2>Employee 1</h2>
            <div class="job-title">Job Title 1</div>
            <ul>
                <li>Info 1</li>
                <li>Info 2</li>
                <li>Info 3</li>
            </ul>
        </div
      </div>
    </body>
    </html>`
};

inquirer.createPromptModule([
    {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the team Manager',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the id of the Manager',
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
    {
        type: 'list',
        name: 'nextAction',
        message: 'What would you like to do next?',
        choices: ['Add an Engineer', 'Add an Intern', 'Finished with Team'],
    },
    ]).then((answers) => {
        if(answers.nextAction === 'Add an Engineer') {
            inquirer.prompt([
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
        } else if(answers.role === 'Add an Intern'){
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'school',
                    message: 'Where do they attend school?',
                },
            ])
        } else {
            // finish
        }
    })
    .then((answers)=>{
        const htmlContent = generateHTML(answers);
        fs.writeFile('index.html', htmlContent, (err) => {
            err ? console.log(err) : console.log('Successfully created index.html')
        });
    })
