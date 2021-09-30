// Packages needed for this application
const inquirer = require ('inquirer');

const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// An array of questions for user input


const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project:",
    },
    {
        type: "input",
        message: "Enter a description for your project:",
        name: "description"
    },
    {
        type: "input",
        message: "Enter your GitHub Link or Username: (Required)",
        name: "github",
        validate: linkInput => {
            if (linkInput) {
              return true;
            }
        }
    },
    {
        type: "input",
        message: "Provide instructions and examples for use. Include a screenshot as needed:",
        name: "usage"
    },
    {
        type: "input",
        message: "To add a picture of the project(add the exact file path of the screenshot), if not press enter:",
        name: "picture"
    },
    {
        type: "input",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running:",
        name: "install"
    },
    {
        type: 'input',
        name: 'contributions',
        message: "Enter contributors if there were any:",
    },
    {
        type: "input",
        name: "tests",
        message: "Enter any test information for your project:",
    },
    {
        type: "input",
        message: "If you would like to enter your email address(Enter it now):",
        name: "email"
    },
    {
        type: "list",
        message: "Which license does this project fall under?:",
        name: "license",
        choices: [
            "apache-2.0",
            "agpl-3.0",
            "mit",
            "mpl-2.0",
        ]
    },
];

// function to write README file
writeToFile = (fileName, data) => {
    fs.writeFile(`./generatedFile/${fileName}`,data,(err) => err ?
    console.log(err): console.log('successfully wrote README.md')
    )
};

// function to initialize app
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