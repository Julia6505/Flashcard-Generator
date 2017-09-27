var basicCardFile = require("./BasicCard.js");
var clozeCardFile = require("./ClozeCard.js");

//new object info for basic questions
// var season = new basicCard("What season comes after fall?", "Winter");
// var liberty = new basicCard("In what city is the Statue of Liberty?", "New York");
// var sunflower = new basicCard("What kind of flower is yellow and looks like the sun?", "Sunflower")
// var redSox = new basicCard("Where do the Red Sox play baseball?", "Boston")
// var florida = new basicCard("What ocean surrounds Florida's east coast?", "Atlantic Ocean")

// console.log(basicCardFile, "WHAT UPPPP");
//basic flashcard questions
inquirer.prompt([
    {
        name: "front",
        message: "What season comes after fall?",
    },
    {
        name: "back",
        message: "Winter",
    },
    {
        name: "front",
        message: "In what city is the Statue of Liberty?",
    },
    {
        name: "back",
        message: "New York",
    },
    {
        name: "front",
        message: "What kind of flower is yellow and looks like the sun?"
    },
    {
        name: "back",
        message: "Sunflower",
    },
    {
        name: "front",
        message: "Where do the Red Sox play baseball?"
    },
    {
        name: "back",
        message: "Boston",
    },
    {
        name: "front",
        message: "What ocean surrounds Florida's east coast?"
    },
    {
        name: "front",
        message: "What ocean surrounds Florida's east coast?"
    },
    {
        name: "back",
        message: "Atlantic Ocean",
    }
]);

//cloze questions
inquirer.prompt([
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