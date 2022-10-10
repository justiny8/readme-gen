// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message: 'What is the name of your project?',
        name: 'title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?'
    },
    {
        type: 'confirm',
        name: 'tableofContents',
        message: 'Would you like to include a Table of Contents for your project?',
        default: true
    },
    {
        type: 'list',
        message: 'Please select the licence type.',
        name: 'license',
        choices: ['MIT', 'gpl-3.0', 'apache-2.0', 'bsl-1.0', 'none']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are your installation procedures?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples of project usage.'
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Provide any other developers who may have contributed to this project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Be sure to test your application!'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(response => {
        let readmeFormat = generateMarkdown(response);

        writeToFile("README.md", readmeFormat);
    })
}

// Function call to initialize app
init();
