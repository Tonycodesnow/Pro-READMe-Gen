// TODO: Include packages needed for this application
const inquirer = require ('inquirer');

const fs = require('fs');
// TODO: Create an array of questions for user input

const promptUser = () => {
    return inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "what is the title of your project",
    },
    {
        type: "input",
        message: "Enter a description for your project:",
        name: "description"
    },
    {
        type: "input",
        message: "Enter your GitHub Username: (Required)",
        name: "github"
    },
    {
        type: "input",
        message: "Enter your email address:",
        name: "email"
    },
    {
        type: "input",
        message: "Enter your project instructions for use:",
        name: "usage"
    },
    {
        type: "input",
        message: "Enter the step by step installation instructions:",
        name: "install"
    },
    {
        type: "input",
        message: "Enter contribution guidelines for your project:",
        name: "contribution"
    },
    {
        type: "input",
        message: "Enter any test information for your project:",
        name: "testing"
    },
    {
        type: "list",
        message: "Which license does this project fall under?",
        name: "license",
        choices: [
            "Apache",
            "Code Project Open(CPOL)",
            "Eclipse",
            "GNU",
            "MIT ",
            "Mozilla(MPL 1.1)",
        ]
    }
    ]);
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions).then(function(answers){
        console.log(answers)
    }).catch(function(err){
        console.log(err)
    })
};

// Function call to initialize app
init();
