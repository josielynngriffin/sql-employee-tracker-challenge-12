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
//prompt variables
const questions = ([
    {
        type: 'list',
        message:'Which action would you like to do?',
        name:'startPrompt',
        choices: ['View all departments', 'View all roles', 'View all employees','Add a department', 'Add a role', 'Add an employee', "Update an employee's role"]

    }
])

const addDepartmentPrompt =[{
    type: 'input',
    name: 'name',
    message: 'Enter new department name:'
}];

const addRolePrompt =[{
    type:'input',
    name:'title',
    message: 'Enter title of new role:'
},
{
    type: 'input',
    name:'salary',
    message: "Enter value of the new role's yearly salary:"
},
{
    type: 'input',
    name: 'department_id',
    message: 'Enter corresponding department id for role:'
}];

const addEmployeePrompt = [{
    type:'input',
    name: 'first_name',
    message: "Enter new employee's first name:"
},
{
    type:'input',
    name: 'last_name',
    message: "Enter new employee's last name:"
},
{
    type:'input',
    name:'role_id',
    message: "Enter new employee's role id:"
},
{
    type:'input',
    name:'manager_id',
    message: "Enter the id of new employee's manager:"
}];

const updateRolePrompt = [{
    type:'input',
    name: 'id',
    message: "Whose role do you wish to update? Enter the employee's id:"
}, 
{
    type:'input',
    name:'role_id',
    message:"Enter the employee's new role id:"
}];
function init() {
    //inquirer prompt
    inquirer.prompt(questions)
    .then(data => {
        switch(data.startPrompt) {
            case 'View all departments':
                viewDepartments();
                break;
            case 'View all roles':
                viewRoles();
                break;
            case 'View all employees':
                viewEmployees();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add an employee':
                addEmployee();
                break;
            case "Update an employee's role":
                updateEmployeeRole();
                break;
        }
    })
    //switch case based on choices
};

function viewDepartments() {
    db.query("SELECT * FROM department", function (err, res) {
      if (err) throw err;
      console.table(res);
      init();
    })
  };

  function viewRoles() {
    db.query("SELECT * FROM roles", function (err, res) {
      if (err) throw err;
      console.table(res);
      init();
    })
  };

function viewEmployees() {
    db.query("SELECT * FROM employees", function (err, res) {
      if (err) throw err;
      console.table(res);
      init();
    })
  };

function addDepartment() {
    inquirer.prompt(addDepartmentPrompt)
    .then(body => {
        db.promise().query("INSERT INTO department SET ?", body)
        .then(function([body]) {
            console.table(body);
            init();
        })
    })
};

function addRole() {
    inquirer.prompt(addRolePrompt)
    .then(body => {
        db.promise().query("INSERT INTO roles SET ?", body)
        .then(function([body]) {
            console.table(body);
            init();
        })
    })
};

function addEmployee() {
    inquirer.prompt(addEmployeePrompt)
    .then(body => {
        db.promise().query("INSERT INTO employees SET ?", body)
        .then(function([body]) {
            console.table(body);
            init();
        })
    })
};

function updateEmployeeRole() {
    inquirer.prompt(updateRolePrompt)
  .then(body => {

    db.promise().query(`UPDATE employees SET role_id = ? WHERE id = ?`, [body.role_id, body.id])
    .then(function ([body]) {
      console.table(body);
      init();
    })
  })
}
init();