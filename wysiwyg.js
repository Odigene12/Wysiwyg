// used strict 
"use strict";
// used let instead of var to set array and objects within array
let people = [{
	"title": "Knight",
	"name": "Brutus Erlacker",
	"bio": "As the strongest of the knights, Brutus Erlacker led many battles to victory for his kingdom.",
	"image": "Knights/Brutus.png",
	"lifespan": {
		"birth": "1801",
		"death": "1901"
		}	
	},
	{
		"title": "Knight",
	"name": "Giovani Odinson",
	"bio": "As second in command of the knights, Giovani Odinson is the reasoning behind the actions of the knights as a collective.",
	"image": "Knights/Giovani.png",
	"lifespan": {
		"birth": "1801",
		"death": "1901"
		}	
	},
	{
	"title": "Knights",
	"name": "Gordon Ramsey",
	"bio": "Being the colorful chef of the knights, Gordon Ramsey's love for food is only rivaled by his short temper.",
	"image": "Knights/Gordon.jpg",
	"lifespan": {
		"birth": "1801",
		"death": "1901"
		}	
	},
	{
	"title": "Knights",
	"name": "Imperius Baronholtz",
	"bio": "Imperius Baronholtz is the lazy one of the group. Getting him to do anything is like trying to wrestle an elephant.",
	"image": "Knights/Imperius.jpg",
	"lifespan": {
		"birth": "1801",
		"death": "1901"
		}	
	},
	{
	"title": "Knights",
	"name": "Zerxes Lament",
	"bio": "Zerxes Lament is like the petty boy of the group. He detests the thought of battling because it stains his nails.",
	"image": "Knights/Zerxes.jpg",
	"lifespan": {
		"birth": "1801",
		"death": "1901"
		}
}];

// created variable for container div
let container = document.getElementById("contain");

// created variable for input text from html
let input = document.getElementById("input");

// created variable for card class within html elements in buildcard function
let card = document.getElementsByClassName("card");

// created variable that will target bio class name created within build card function in order to use it in keyEvent function
let bio = document.getElementsByClassName("bio");

// created function that includes for-loop that will go through each item in array and call the ClickEvent function for each
function populateDom(){
for (let i = 0; i < people.length; i++){
	let person = people[i];
		buildCard(person)
	}
	addClickEvent();
}

// created function that will remove the selected class so that only one card is selected (has selected class in it)
function removeSelected(){
	for(let i=0; i < card.length; i++){
		card[i].classList.remove("Selected");
	}
}

// Create function that goes contains for-loop that will go through each card and add event listener that will clear input value when selected and call the keyEvent function and pass through currentCard and currentBio and remove selected class at the beginning
function addClickEvent(){
	for(let i=0; i < card.length; i++){
		let currentCard = card[i];
		let currentBio = bio[i];
	currentCard.addEventListener("click", function(){
			removeSelected();
			input.value= "";
			input.focus();
			removeSelected();
			currentCard.classList.add("Selected");
			keyEvent(currentCard, currentBio);
		})
	};
};


// create the card and post on the dom
function buildCard(person) {
	container.innerHTML += `<person class = "card"><header> ${person.title} ${person.name}</header><section><p class= "bio">${person.bio}</p><img src="${person.image}"></section><footer>${person.lifespan.birth}-${person.lifespan.death}</footer></person>`
	}

//create keyEvent function that goes through currentCard and currentBio and addes the event listener for binding the bio to the input field and clear out when enter key is pressed. 
function keyEvent(currentCard, currentBio){
	input.addEventListener("keyup", function(event) {
		if(currentCard.classList.contains("Selected")){
		let newBio = event.currentTarget.value;
		currentBio.innerHTML = newBio;
	
		if(event.keyCode === 13){
			currentBio.innerHTML = newBio;
			input.value = "";
			}
		}
	}
)};

//create function that populates the dom 
populateDom();