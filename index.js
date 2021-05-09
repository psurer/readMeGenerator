// Includes packages needed for this app
const fs = require('fs');
const inquirer = require('inquirer');
const markdownHelper = require('./utils/generateMarkdown');

// array of questions that require user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is Your Project Title?"
    },
    {
        type: "input",
        name: "description",
        message: "Enter a Description of Your Project."
    },
    {
        type: "input",
        name: "installation",
        message: "Installation."
    },
    {
        type: "input",
        name: "tests",
        message: "Tests."
    },
    {
        type:"list",
        name:"license",
        message:"What kind of license do you want to use?",
        choices: ["MIT","Mozilla Public License 2.0","GNU GPL v3"]
    },
    {
        type: "input",
        name: "usage",
        message: "Usage."
    },
    {
        type: "input",
        name: "contributing",
        message: "contributing."
    },
    {
        type: "input",
        name: "username",
        message: "What is Your Github User Name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is Your email address?"
    }
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data){
        fs.writeFile("README.md", markdownHelper.generateMarkdown(data), (err) => {
            if (err) {
                console.log(err);
            }
        });
    })
}
  
// Function call to initialize app
init();
