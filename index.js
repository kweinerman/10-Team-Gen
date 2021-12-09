const fs = require("fs");
const inquire = require("inquirer");
const employee = require("./Assets/js/employee");
const manager = require("./Assets/js/manager");
const intern = require("./Assets/js/intern");
const engineer = require("./Assets/js/engineer");
const generate = require('./outputs/team_output')

let newTeamMember = [];

function newEng() {
  const newEng = new Engineer();
  inquirer.prompt(
    [
      newEng.getName(),
      newEng.getID(),
      newEng.getEmail(),
      newEng.getGithub(),
      {
        type: 'list',
        name: 'nextMove',
        choices: ['Add Engineer', 'Add Intern', 'Finished'],
        message: "Do you need to add anyone?"
      }
    ]
  )
  .then((answers) => {
    newEng.getRole();
    newEng.name = answers.name
    newEng.id = answers.id;
    newEng.email = answers.email;
    newEng.github = answers.github;
    newTeamMember.push(newEng);
    if (answers.nextMove == 'Add Engineer') {
      newEng();
    } else if (answers.nextMove == 'Add Intern') {
      newIntern();
    } else if (answers.nextMove == 'Finished') {
    // block of code to pass the newTeamMember to render/generate
      htmlPageContent = generate.generateHTML(newTeamMember);
      fs.writeFile('./dist/team.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created team.html!')
      );
    }
  })
}

function newIntern() {
  const newIntern = new Intern();
  inquirer.prompt(
    [
      newIntern.getName(),
      newIntern.getID(),
      newIntern.getEmail(),
      newIntern.getSchool(),
      {
        type: 'list',
        name: 'nextMove',
        choices: ['Add Engineer', 'Add Intern', 'Finished'],
        message: "Do you need to add anyone else?"
      }
    ]
  )
  .then((answers) => {
    newIntern.getRole();
    newIntern.name = answers.name
    newIntern.id = answers.id;
    newIntern.email = answers.email;
    newIntern.school = answers.school;
    newTeamMember.push(newIntern);
    if (answers.nextMove == 'Add Engineer') {
      newEng();
    } else if (answers.nextMove == 'Add Intern') {
      newIntern();
    } else if (answers.nextMove == 'Finished') {
      // block of code to pass the newTeamMember to render/generate
      htmlPageContent = generate.generateHTML(newTeamMember);
      fs.writeFile('./dist/team.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created team.html!')
      );
    }
  })
}

function newEmployee () {

  const newMgmt = new Manager()
  inquirer.prompt(
    [
      newMgmt.getName(),
      newMgmt.getID(),
      newMgmt.getEmail(),
      newMgmt.getOfficeNumber(),
      {
        type: 'list',
        name: 'nextMove',
        choices: ['Add Engineer', 'Add Intern', 'Finished'],
        message: "Do you need to add anyone?"
      }
    ]
  )
  .then((answers) => {
    newMgmt.getRole();
    newMgmt.name = answers.name;
    newMgmt.id = answers.id;
    newMgmt.email = answers.email;
    newMgmt.officeNumber = answers.officeNumber;
    newTeamMember.push(newMgmt);
    if (answers.nextMove == 'Add Engineer') {
      newEng();
    } else if (answers.nextMove == 'Add Intern') {
      newIntern();
    } else if (answers.nextMove == 'Finished') {
      // block of code to pass the newTeamMember to render/generate
      htmlPageContent = generate.generateHTML(newTeamMember);
      fs.writeFile('./dist/team.html', htmlPageContent, (err) =>
     console.log('Successfully created team.html!')
      );
    }
  });
}

newEmployee()
