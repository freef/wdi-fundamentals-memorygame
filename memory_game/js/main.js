

var cardFaces = ["queen-of-diamonds", "queen-of-hearts", "king-of-hearts", "king-of-diamonds"];
var cards = ["queen","queen","king","king"];
var cardsInPlay= [];

var createBoard=function(){
	for (i=0; i<cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('alt','back of card');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);};
};

var resetBoard=function(){
		for (i=0; i<cards.length; i++){
			document.getElementsByTagName('img')[i].setAttribute('src','images/back.png');
			cardsInPlay=[];};
};

var flipCard = function(){

	if(cardsInPlay.length===2){ resetBoard(); }
	else {

	var cardId= this.getAttribute('data-id');
	console.log("You flipped a "+cards[cardId]+"!");
	this.setAttribute('src','images/'+cardFaces[cardId]+'.png');
	this.setAttribute('alt','A '+cardFaces[cardId]);

	//step 2: check what kind of card it is
	cardsInPlay.push(cards[cardId]);

	//step 3: determine match
	var matchCheck = cardsInPlay.length>=2? (cardsInPlay[0]===cardsInPlay[1]? "You found a match!":"No match this time!") : "Pick another card";
	if(cardsInPlay.length===2){
	return alert(matchCheck);
}

	}
};
createBoard();