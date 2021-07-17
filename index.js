//for command line interface
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./develop/page-template');

//TODO: create manager's questions
const managerquestions = [];

//TODO: Create a function to write HTML file
function writeToFile(fileName,data){
    fs.writeFile(fileName,data,err =>{
        if (err){
            return console.log(err);
        }
        console.log("Success your Team Profile is now generated")
    });
}
//TODO: Create a function to initialize app
function init() {
    //prompt to ask set of questions
    inquirer.prompt(managerquestions)
     //then userfeedback will be used to create HTML
    .then((data)=>writeToFile('TeamRoster.html',generatePage(data)))
}
    
   
//Function call to start app
init()
