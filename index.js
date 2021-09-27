// TODO: Include packages needed for this application
const inquirer = require ('inquirer');

const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input



const questions = [
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
        type: 'confirm',
        name: 'confirmAbout',
        message: "Would you like to enter contributors",
        // enter a function for a t/f statement that leads to a return that can
        //  skip with no input and move on to next question 
    },
    {
        type: "input",
        message: "Enter any test information for your project:",
        name: "tests"
    },
    {
        type: "list",
        message: "Which license does this project fall under?",
        name: "license",
        choices: [
            "Apache",
            "GNU",
            "MIT ",
            "Mozilla(MPL 1.1)",
        ]
    },
];


// TODO: Create a function to write README file
writeToFile = (fileName, data) => {
    fs.writeFile(`./generatedFile/${fileName}`,data,(err) => err ?
    console.log(err): console.log('successfully wrote README.md')
    )
};

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions).then(function(answers){
        // const fileName = 'README.md'
        // const data = generateMarkdown(answers)
        
        writeToFile('README.md', generateMarkdown(answers))
    }).catch(function(err){
        console.log(err)
    })
};

// Function call to initialize app
init();
