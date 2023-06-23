//imports
const mysql = require('mysql2');
const inquirer = require('inquirer');
//connection to sql

const db = mysql.createConnection(
    {
        host:'localhost',
        //your mySQL username
        user:'root',
        //your mySQL password
        password:'josie',
        database:'employees_db'
    },
    console.log('Connected to the employees database')
);
const questions = ([
    {
        type: 'list',
        message:'Which action would you like to do?',
        name:'startPrompt',
        choices: ['View all departments', 'View all roles', 'View all employees','Add a department', 'Add a role', 'Add an employee', "Update an employee's role"]

    }
])

function init() {
    //inquirer prompt
    inquirer.prompt(questions)
    .then(data => {
        switch(data.startPrompt) {
            case 'View all departments':
                break;
        }
    })
    //switch case based on choices
};

//init();