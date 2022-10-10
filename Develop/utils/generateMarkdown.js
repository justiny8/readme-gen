// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None") {
    return `![${license}](https://img.shields.io/badge/${license}-2.0-orange)`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `\n [License](#license)\n`
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License
    Project licensed by ${license}`
  }
  return ""
}

function TableofContents(TOC) {
  if (TOC) {
    return `
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribute)`;
  } else {
    return``
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
${TableofContents(data.tableofContents)}

## License
${renderLicenseBadge(data.license)}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribute}

## Tests
${data.tests}
`;
}

module.exports = generateMarkdown;
