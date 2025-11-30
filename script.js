//Connect HTML
const notStartedCard = document.querySelector(".not-started-card");
const inProgressCard = document.querySelector(".in-progress-card");
const completedCard = document.querySelector(".completed-card");
//The below 3 variables are the fields to put the cards
const notStartedCol = document.getElementById("not-started-col");
const inProgressCol = document.getElementById("in-progress-col");
const completedCol = document.getElementById("completed-col");
//The below 6 are form related
const modalForm = document.getElementById("modal-form");
const modalSubmitBtn = document.querySelector(".modal-submit-btn");
const cardTitle = document.getElementById("title");
const cardDate = document.getElementById("date");
const cardStatus = document.getElementById("status");
const cardDescription = document.getElementById("description");

//😊Create modal to add new cards

//Take input from the form and make it a card.
function makeDataCard(title, date, status, description) {
	title = cardTitle.value;
	date = cardDate.value;
	status = cardStatus.value;
	description = cardDescription.value;

	console.log(title, date, status, description);
}

//Create event listener for modal form being submitted
modalForm.addEventListener("submit", (event) => {
	event.preventDefault();

	makeDataCard();
});

//Determine which column the card should be added to. I think a switch statement could be helpful here

//Create event listener for cards being dragged
