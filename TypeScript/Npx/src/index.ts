#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from 'chalk';
import chalkAnimation from "chalk-animation";

const runAnimation = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    })
};

async function welcome() {
    let animation = chalkAnimation.rainbow("Let Start");

    await runAnimation();

    animation.stop();

    await data();
};

await welcome();

async function data() {

    const myData = await inquirer.prompt({
        name: "name",
        type: "input",
        message: "Enter your Name: ",
    });

    console.log(chalk.red("Welcome " + myData.name));
};