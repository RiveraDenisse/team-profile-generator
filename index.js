//for command line interface
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./develop/page-template');
//const Employee = require(`./lib/Employee`);
const Engineer = require(`./lib/Engineer`);
const Manager = require(`./lib/Manager`);
const Intern = require(`./lib/Intern`);
const teamMembers = [];

//TODO: create manager's questions
const managerquestions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'managerName',
        message: "Please enter manager's name (Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Manager's name is required");
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'managerId',
        message: "Please enter manager's ID number (Required)",
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log("Manager's ID number is required");
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "Please enter manager's email (Required)",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log("Manager's email is required");
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'managerNumber',
        message: "Please enter manager's office number (Required)",
        validate: numberInput => {
          if (numberInput) {
            return true;
          } else {
            console.log("Manager's office number is required");
            return false;
          }
        }
    }
  ])
  .then (memberData =>{
    memberData.role === 'Manager';
    teamMembers.push(new Manager(memberData.managerName,memberData.managerId,memberData.managerEmail,memberData.managerNumber,memberData.role));
        console.log(teamMembers);
  })
};
const AddTeam = () => {
  return inquirer.prompt([
      {
          type: 'list',
          name: 'options',
          message: "What would you like to do?",
          choices: ['Add an Engineer', 'Add an Intern', 'Finish']
          //need to validate if engineer,intern or finish
      }, 
      {
        type: 'input',
        name: 'Name',
        message: "Please enter employee's name (Required)",
        validate: NameInput => {
          if (NameInput) {
            return true;
          } else {
            console.log("Employee's name is required");
            return false;
          }
        }
      }
    ])
    //end of questions
    .then (memberData => {
      if (memberData.options === 'Add an Engineer') {
        memberData.role = 'Engineer';
        memberData.id = '123';
        memberData.email = 'email@';
        memberData.github = 'Github';
        teamMembers.push(new Engineer(memberData.Name,memberData.id,memberData.email,memberData.role,memberData.github));
        console.log(teamMembers);
        AddTeam();
        //promptEngineer();
        } //else if (memberData.options === 'Add an Intern'){
           //AddTeam();
        //} 
        else {
            return teamMembers;
        }
  })
};

//TODO: Create a function to write HTML file
function writeToFile(fileName,teamMembers){
    fs.writeFile(fileName,teamMembers,err =>{
        if (err){
            return console.log(err);
        }
        console.log("Success your Team Roster is now generated")
    });
}
//Create a function to initialize app starting with manager questions
managerquestions()
  //give option to create engineer,intern or finish
  .then(AddTeam)
  //then userfeedback will be used to create HTML
  .then(()=>writeToFile('TeamRoster.html',generatePage(teamMembers)))
