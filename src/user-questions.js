const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the team manager's name:",
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the team manager's employee ID:",
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the team manager's email address:",
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Enter the team manager's office number:",
    },
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the engineer's name:",
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the engineer's employee ID:",

    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the engineer's email address:",
    },
    {
        type: 'input',
        name: 'github',
        message: "Enter the engineer's GitHub username:",
    },
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the intern's name:",
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the intern's employee ID:",
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the intern's email address:",
    },
    {
        type: 'input',
        name: 'school',
        message: "Enter the intern's school:",
    },
];

const chooseTeamRole = {
    type: 'list',
    name: 'role',
    message: 'Choose the role for the team member:',
    choices: ['Engineer', 'Intern'],
};

const addNewTeamMember = {
    type: 'list',
    name: 'needToAddNewTeamMember',
    message: 'Do you want to add another team member?',
    choices: ['yes', 'no'],
};

module.exports = {
    managerQuestions,
    engineerQuestions,
    internQuestions,
    chooseTeamRole,
    addNewTeamMember,
};