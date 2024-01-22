const managerQuestions = (currentEmployeeId) => [
    {
        type: 'input',
        name: 'name',
        message: "Enter the team manager's name:",
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the team manager's employee ID:",
        default: currentEmployeeId.toString(),
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

const engineerQuestions = (currentEmployeeId) => [
    {
        type: 'input',
        name: 'name',
        message: "Enter the engineer's name:",
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the engineer's employee ID:",
        default: currentEmployeeId.toString(),
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

const internQuestions = (currentEmployeeId) => [
    {
        type: 'input',
        name: 'name',
        message: "Enter the intern's name:",
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the intern's employee ID:",
        default: currentEmployeeId.toString()
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

const mainMenuQuestions = {
    type: 'list',
    name: 'option',
    message: 'Choose an option?',
    choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
};

module.exports = {
    managerQuestions,
    engineerQuestions,
    internQuestions,
    mainMenuQuestions
};