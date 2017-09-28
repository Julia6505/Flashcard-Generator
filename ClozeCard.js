var inquirer = require("inquirer");
var clozeCard = require('./cloze.js');
var cardData = require('./cloze.json');
var count = 0;
var points = 0;

function startCloze() {
    if (count < cardData.length) {
    var chosenCard = new clozeCard(cardData[count].partial, cardData[count].cloze, cardData[count].fullText);     
        inquirer.prompt([
            {
                message: cardData[count].partial,
                name: "question"
            }
        ]).then(function (answer) {				
            if (answer.question === cardData[count].cloze) {
                console.log("You are correct.\n");
                count++;
                points++;
                startCloze();
            } else {
                console.log("That is incorrect. The correct answer is " + cardData[count].cloze + ".\n")
                count++;
                startCloze();
            }
        })
    }
}

startCloze();

