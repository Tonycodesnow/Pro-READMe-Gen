// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // https://img.shields.io/badge/license-MIT-blue.svg
}

// ![License](https://img.shields.io/badge/license-${data.license}-blue.svg)

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  `## License
This project is covered under the ${license}
  `
}

function contributor(contrib)  {
  if (!contrib){return ``}
  else{return`
  ## Contributions
  ${contrib}`}
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}, README


## Descriptions
${data.description}

## Table of Contents
- [Description](#description)
- [GitHub](#github)
- [Usage](#usage)
- [Installation](#installation)
- [Contributions](#contribution)
- [Tests](#tests)
- [License](#license)

## GitHub
${data.github}

## Usage
${data.usage}

## Installation
${data.install}

${contributor(data.contributor)}

## Tests
${data.tests}

${renderLicenseSection(data.license)}

Find me on GitHub [${data.github}](https://github.com/${data.github})  or E-mail me: ${data.email}

`;
}

module.exports = generateMarkdown;
