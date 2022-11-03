const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const generateHTML = require("./dist/generateHTML")

const generate = ({ TeamMgrName, TeamMgrID, TeamMgrEmail, TeamMgrOfficeNumber, officeNumber, EngName, EngID, EngEmail, EngGithub, InternName, internID, InternEmail, internSchool }) =>

  function init() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'TeamMgrName',
          message: "Team manager's name?",
        },
        {
          type: 'input',
          name: 'TeamMgrID',
          message: "Team manager's employee ID?",
        },
        {
          type: 'input',
          name: 'TeamMgrEmail',
          message: "Team manager's email",
        },
        {
          type: 'input',
          name: 'TeamMgrOfficeNumber',
          message: "Team manager's office number?",
        },
        {
          type: 'list',
          name: 'TeamMgrOfficeNumber',
          message: "Would you like to add another engineer or intern?:",
          Choices: ["Engineer", "Intern", "No"]
        },
        {
          type: 'input',
          name: 'EngName',
          message: "Engineer's name?",
        },
        {
          type: 'input',
          name: 'EngID',
          message: "Engineer's ID?",
        },
        {
          type: 'input',
          name: 'EngEmail',
          message: "Engineer's email",
        },
        {
          type: 'input',
          name: 'EngGithub',
          message: "Engineer's GitHub username?",
        },

        {
          type: 'input',
          name: 'InternName',
          message: "Enter your intern's name."
        },
        {
          type: 'input',
          name: 'internID',
          message: "Enter your intern's ID.",
        },
        {
          type: 'input',
          name: 'InternEmail',
          message: "Enter your intern's email."
        },
        {
          type: 'input',
          name: 'internSchool',
          message: "Enter your intern's school.",
        },
        {
          type: 'list',
          name: 'TeamMgrOfficeNumber',
          message: "Would you like to add another engineer or intern?:",
          Choices: ["Engineer", "Intern", "No"]
        },
      ])
      .then((answers) => {
        const htmlPageContent = generateHTML(answers);
        fs.writeFile('index.html', htmlPageContent, (err) =>
          err ? console.log(err) : console.log('Successfully created index.html!')
        );
      });
  }

init();