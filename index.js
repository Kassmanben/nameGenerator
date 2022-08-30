import * as fs from "fs";
import {realFirstLast, realFirstMiddleLast, realFirstLastHyphenated, realFirstMiddleLastHyphenated} from "./realisticNames.js";
import inquirer from 'inquirer';

const questions = [
    {
        type: 'list',
        name: 'nameType',
        message: "What kind of name(s) do you want to generate?",
        choices: [
            "Fuck Me Up With Names",
            "First & Last",
            "First Middle & Last",
            "First & Hyphenated Last",
            "First Middle & Hyphenated Last"
        ],
        filter(val) {
            return val.toLowerCase();
        },
    },
    {
        type: 'input',
        name: 'numNames',
        message: 'How many names?',
        default: 10,
        validate(value) {
            const valid = !isNaN(parseFloat(value)) && parseFloat(value) < 100;
            return valid || 'Please enter a number less than 100';
        },
        filter: Number,
    }
]

inquirer
    .prompt(questions)
    .then((answers) => {
        switch (answers.nameType) {
            case "fuck me up with names": {
                for (let i = 0; i <= answers.numNames; i++) {
                    var rand = Math.floor(Math.random() * 100)
                    if(rand < 50 ) {
                        console.log(realFirstLast())
                    } else if (rand >= 50 && rand < 80) {
                        console.log(realFirstMiddleLast ())
                    } else if (rand >= 80 && rand < 97) {
                        console.log(realFirstLastHyphenated ())
                    } else {
                        console.log(realFirstMiddleLastHyphenated())
                    }
                }
                break
            }
            case "first & last": {
                for (let i = 0; i <= answers.numNames; i++) {
                    console.log(realFirstLast())
                }
                break
            }
            case "first middle & last": {
                for (let i = 0; i <= answers.numNames; i++) {
                    console.log(realFirstMiddleLast())
                }
                break
            }
            case "first & hyphenated last": {
                for (let i = 0; i <= answers.numNames; i++) {
                    console.log(realFirstLastHyphenated())
                }
                break
            }
            case "first middle & hyphenated last" : {
                for (let i = 0; i <= answers.numNames; i++) {
                    console.log(realFirstMiddleLastHyphenated())
                }
                break
            }
        }
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });


