var cardData = require('./basic.json');

function basicCard(front, back) {
this.front = front;
this.back = back;
}


// console.log(chosenCard);



// console.log()
// var season = new basicCard("What season comes after fall?", "Winter");
// var liberty = new basicCard("In what city is the Statue of Liberty?", "New York");
// var sunflower = new basicCard("What kind of flower is yellow and looks like the sun?", "Sunflower")
// var redSox = new basicCard("Where do the Red Sox play baseball?", "Boston")
// var florida = new basicCard("What ocean surrounds Florida's east coast?", "Atlantic Ocean")

module.exports = basicCard;

// put the new basicCard in the for loop but out of the function…otherwise it’s breaks. But like you say PROGRESS!!!!!!