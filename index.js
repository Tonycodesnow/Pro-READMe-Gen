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
        name: "github",
        validate: linkInput => {
            if (linkInput) {
              return true;

              return 'You need to enter a project GitHub link!';
            }
        }
    },
    {
        type: "input",
        message: "Enter your email address:",
        name: "email",
        validate: linkInput => {
            if (linkInput) {
              return true;

              return 'You need to enter a valid E-mail!';
            }
        }
    },
    {
        type: "input",
        message: "Enter your project instructions for use:",
        name: "usage"
    },
    {
        type: "input",
        message: "Enter the step by step installation instructions if possible:",
        name: "install"
    },
    {
        type: 'input',
        name: 'contributions',
        message: "Would you like to enter contributors?:",
    },
    {
        type: "input",
        name: "tests",
        message: "Enter any test information for your project:",
    },
    {
        type: "list",
        message: "Which license does this project fall under?:",
        name: "license",
        choices: [
            "apache-2.0",
            "agpl-3.0",
            "MIT",
            "mpl-2.0",
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
// function prompt() {
//     return new Promise((resolve, reject) => {

//     })
// }
// Function call to initialize app
init();
