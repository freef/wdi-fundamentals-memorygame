

var cardThree = 'queen';
var cardFour = 'queen';
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay= [];
var cardOne = cards[1];
var cardTwo = cards[2];

cardsInPlay.push(cardOne, cardTwo);

if(cardsInPlay.length===2){

console.log("User flipped " + cardTwo);
console.log("User flipped " + cardOne);

if(cardsInPlay[0]===cardsInPlay[1]){
	console.log("you found a match!");
}
else{
	alert("Sorry, try again!");
}

}
else{
	console.log("Select a card");
}

