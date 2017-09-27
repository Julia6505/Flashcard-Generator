var inquirer = require("inquirer");

function clozeCard(text, partial, cloze, fullText){
    this.text = text;
    this.partial = partial;
    this.cloze = cloze;
    this.fullText = fullText;
}

// module.exports = closeCard(text,close);
//this is weird? how do I make a dynamic value?
// clozeCard.prototype.partial = "value" 
// var testing = new clozeCard("Oh wow?", "YESSSS");
// console.log(testing.partial);

var red = new clozeCard("", "...is the color at the top of the rainbow", "Red", "Red is the color at the top of the rainbow");
var alaska = new clozeCard("", "... is the largest state (by size) in the United States", "Alaska", "Alaska is the largest state (by size) in the United States");
var June = new clozeCard("", "...is the month in which summer begins", "June", "June is the month in which summer begins");
var Ariel = new clozeCard("", "...is the name of the princess in 'The Little Mermaid'", "Ariel", "Ariel is the name of the princess in 'The Little Mermaid");
var Paris = new clozeCard("", "...is the city with the Eiffel Tower", "Paris", "Paris is the city with the Eiffel Tower");

// console.log(red);

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