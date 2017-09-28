var inquirer = require("inquirer");
var basicCard = require('./basic.js');
var cardData = require('./basic.json');
var count = 0;
var playAgain; 

function startGame() {
    if (count < cardData.length) {
        var chosenCard = new basicCard(cardData[count].front, cardData[count].back);
        inquirer.prompt([
            {
                message: cardData[count].front,
                name: "question"
            }
        ]).then(function (answer) {				
            if (answer.question === cardData[count].back) {
                console.log("You are correct.\n");
                count++;
                startGame();
            } else {
                console.log("That is incorrect. The correct answer is " + cardData[count].back + ".\n")
                count++;
                startGame();
            }
        })
    }
}


startGame();





// function round(){
//     //codes
// }

// function prompts(){
//     //codes
// }


