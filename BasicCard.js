var inquirer = require("inquirer");

function basicCard(front, back) {
this.front = front;
this.back = back;
}

var season = new basicCard("What season comes after fall?", "Winter");
var liberty = new basicCard("In what city is the Statue of Liberty?", "New York");
var sunflower = new basicCard("What kind of flower is yellow and looks like the sun?", "Sunflower")
var redSox = new basicCard("Where do the Red Sox play baseball?", "Boston")
var florida = new basicCard("What ocean surrounds Florida's east coast?", "Atlantic Ocean")

// module.exports = basicCard(front,back);

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



