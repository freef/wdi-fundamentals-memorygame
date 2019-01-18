

var cards = ["queen", "queen", "king", "king"];
var cardOne = cards[1];
var cardTwo = cards[0];
var cardsInPlay= [];

var flipCard = function(cardId){
	cardsInPlay.push(cardId);
	console.log("You flipped a "+cardId+"!");
	var matchCheck = cardsInPlay.length>=2? (cardsInPlay[0]===cardsInPlay[1]? "You found a match!":"No match this time!") : "Pick a card";
	var reset = cardsInPlay.length>=2? cardsInPlay=[]: "";
	return console.log(matchCheck);

}
flipCard(cardOne);
flipCard(cardTwo);
flipCard(cardOne);
flipCard(cardTwo);