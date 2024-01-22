const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
// import questions to use here
const questions = require("./src/user-questions.js");

//store all team employees here
var employees = [];

// use async/await as per https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises#async_and_await
// to work easier with nested promises

//method to ask Main Meny questions
async function askMainMenuQuestions() {
    const answers = await inquirer.prompt(questions.mainMenuQuestions)
    return answers.option;
}

// method to ask Engineer questions and add it to array
async function askAddEngineer() {
    const answers = await inquirer.prompt(questions.engineerQuestions)
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    employees.push(engineer);
}

// method to ask Intern questions and add it to array
async function askAddIntern() {
    const answers = await inquirer.prompt(questions.internQuestions)
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    employees.push(intern);
}

// method to ask manager questions and add it to array and then while to add rest team employees
async function askAddManager() {
    const answers = await inquirer.prompt(questions.managerQuestions)
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    employees.push(manager);

    var mainMenu = await askMainMenuQuestions();

    // if user asks to add engineer show engineer questions
    // if user asks to add intern show intern questions
    // otherwise for 'Finish building the team' just move on and finish executing the js
    while (mainMenu == "Add an engineer" || mainMenu == "Add an intern") {
        if (mainMenu == "Add an engineer") {
            await askAddEngineer();
        } else if (mainMenu == "Add an intern") {
            await askAddIntern();
        }

        mainMenu = await askMainMenuQuestions();
    }
}

function writeToFile(content, pathToFile) {
    fs.writeFile(pathToFile, content, (err) =>
        err ? console.error(err) : console.log(`HTML file (${pathToFile}) generated successfully!`)
    );
}

askAddManager()
    .then(() => {
        // build html
        const html = render(employees);

        // Check if the 'output' directory exists, create it if not
        // https://www.basedash.com/blog/javascript-check-if-file-exists
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR);
        }

        //write to file html with file name from variables
        writeToFile(html, outputPath);
    });
