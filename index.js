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
  console.log (`
      =================================
      MANAGER INFORMATION
      =================================
      `);
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
  })
};
//to ask question about what to do next
const AddTeam = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'options',
      message: "What would you like to do?",
      choices: ['Add an Engineer', 'Add an Intern', 'Finish']
      
    },    
  ])
  //to validate if engineer,intern or finish
  .then (answer => {
    //if user selects engineer then it will go to AddEngineer function
    if (answer.options === 'Add an Engineer') {
      console.log (`
      =================================
      ENGINEER INFORMATION
      =================================
      `);
      AddEngineer();
    //if user selects Intern then it will go to AddIntern function
    } else if (answer.options === "Add an Intern") {
      console.log (`
      =================================
      INTERN INFORMATION
      =================================
      `);
        AddIntern();
    } 
    //if finish then it will create HTML file using data saved
    else {
      writeToFile('TeamRoster.html',generatePage(teamMembers));
    }
  })
}

const AddEngineer = () => {
  return inquirer.prompt([
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
      },
      {
        type: 'input',
        name: 'id',
        message: "Please enter employee ID number (Required)",
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log("ID number is required");
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter employee's email (Required)",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log("employee's email is required");
            return false;
          }
        }
    },
    {
      type: 'input',
      name: 'github',
      message: "Please enter employee's github username (Required)",
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log("employee's username is required");
          return false;
        }
      }
  }
    ])
    //end of questions
    .then (memberData => {
      memberData.role = 'Engineer';
        teamMembers.push(new Engineer(memberData.Name,memberData.id,memberData.email,memberData.role,memberData.github));
        AddTeam();
  })
};
const AddIntern = () => {
  return inquirer.prompt([
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
      },
      {
        type: 'input',
        name: 'id',
        message: "Please enter employee ID number (Required)",
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log("ID number is required");
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter employee's email (Required)",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log("employee's email is required");
            return false;
          }
        }
    },
    {
      type: 'input',
      name: 'school',
      message: "Please enter employee's school username (Required)",
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log("employee's username is required");
          return false;
        }
      }
  }
    ])
    //end of questions it will saved information on teamMembers as intern
    .then (memberData => {
      memberData.role = 'Intern';
        teamMembers.push(new Intern(memberData.Name,memberData.id,memberData.email,memberData.role,memberData.school));
        AddTeam();
  })
};
//Create a function to write HTML file
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
  
 
