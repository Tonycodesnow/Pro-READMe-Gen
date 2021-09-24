// TODO: Include packages needed for this application
const inquirer = require ('inquirer');

const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "what is the title of your project",
    }
];

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
