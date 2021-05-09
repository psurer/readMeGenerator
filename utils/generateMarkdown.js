// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //Default Badge is MIT
  let badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  if (license === 'Mozilla Public License 2.0') {
    badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }
  if (license === "GNU GPL v3") {
    badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let linkToLicense = '';
  if (license === null || license === undefined) {
    return linkToLicense;
  }
  if (license === 'MIT') {
    linkToLicense = 'https://mit-license.org';
  }
  if (license === 'Mozilla Public License 2.0') {
    linkToLicense = 'https://www.mozilla.org/en-US/MPL/2.0/';
  }
  if (license === 'GNU GPL v3') {
    linkToLicense = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
  }
  return linkToLicense;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return ` ${renderLicenseBadge(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title} ${renderLicenseSection(data)}

  
  # Table of Contents
  - [description](#description)
  - [installation](#installation)
  - [usage](#usage)
  - [contributing](#contributing)
  - [tests](#tests)
  - [questions](#questions)
  - [username](#username)
      
  ## <a name=“#description”>Description:</a>
  ${data.description}
      
  ## <a name="#installation">Installation:</a>
  ${data.installation}</span>
    
  ## <a name="#test">Test:</a>
  ${data.tests}

  ## <a name="#usage">Usage:</a>
  ${data.usage}
  
  ## <a name="#license">Lincense</a>
  Application cover under ${data.license} which can be found at
  ${renderLicenseLink(data.license)}

  ## <a name="#contributing">Contributing:</a>
  ${data.contributing}

  # Questions:

  ### <a name="#username">username:</a> https://github.com/${data.username}

  ### Contact me using:  ${data.email}
  `;
}

module.exports = { generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection };
