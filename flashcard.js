var cardBasic = require("./BasicCard.js");
var clozeCard = require("./ClozeCard.js");
var inquirer = require("inquirer");

// new object info for basic questions
var season = new basicCard("What season comes after fall?", "Winter");
var liberty = new basicCard("In what city is the Statue of Liberty?", "New York");
var sunflower = new basicCard("What kind of flower is yellow and looks like the sun?", "Sunflower")
var redSox = new basicCard("Where do the Red Sox play baseball?", "Boston")
var florida = new basicCard("What ocean surrounds Florida's east coast?", "Atlantic Ocean")

// console.log(season.front + season.back);
// console.log(liberty.front + "" + liberty.back);
// console.log(sunflower.front + sunflower.back);

// console.log(basicCard);

// //basic flashcard questions
inquirer.prompt([
    {
        message: season.front,
        name: "firstSeason",
        validate: function(name) {
        if (name !== season.back) {
            console.log(" You lose!")
            return false;
        }else {
            console.log(" You win")
            return true;
          }
        }
    },
    {
        name: "back",
        message: season.back,
        validate: function(name) {
            if (name !== season.back) {
                console.log(" You lose!")
                return false;
            }else {
                console.log(" You win")
                return true;
              }
            } 
    },
]);


//cloze questions
// inquirer.prompt([
    {
        name: "partial",
        message: "________ is the color at the top of the rainbow",
    },
    {
        name: "partial",
        message: "________ is the largest state (by size) in the United States",
    },
    {
        name: "partial",
        message: "________ is the month in which summer begins",
    },
    {
        name: "partial",
        message: "________ is the name of the princess in 'The Little Mermaid'",
    },
    {
        name: "partial",
        message: "________ is the city with the Eiffel Tower",
    }
]);