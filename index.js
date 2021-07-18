//for command line interface
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./develop/page-template');

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
]);
};
const createTeam = teamData => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'License',
            message: "Please choose a license to your project from the list below",
            choices: ['MIT', 'Apache2.0', 'GNUGPLv3', 'MozillaPublicLicense2.0', 'TheUnlicense']
          }
    ]);
    
};
//TODO: Create a function to write HTML file
function writeToFile(fileName,data){
    fs.writeFile(fileName,data,err =>{
        if (err){
            return console.log(err);
        }
        console.log("Success your Team Roster is now generated")
    });
}
//Create a function to initialize app starting with manager questions
managerquestions()
    //give option to create engineer,intern or finish
   
     //then userfeedback will be used to create HTML
    .then((data)=>writeToFile('TeamRoster.html',generatePage(data)))

    

