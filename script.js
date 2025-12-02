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
function makeDataCard() {
	const notStartedArr = [];
	const inProgressArr = [];
	const completedArr = [];

	const title = cardTitle.value;
	const date = cardDate.value;
	const status = cardStatus.value;
	const description = cardDescription.value;

	console.log(title, date, status, description);

	const info = `<div class="infoCards"><h3>Title:${title}</h3><p>Date:${date}</p>
    <p>Status: ${status}</p>
    <p>Description: ${description}</p></div>`;

	switch (status) {
		case "Not Started":
			console.log("Not Started");
			notStartedCol.innerHTML += info;
			notStartedArr.push(info);
			break;
		case "In Progress":
			console.log("In Progress");
			inProgressCol.innerHTML += info;
			inProgressArr.push(info);
			break;

		case "Completed":
			console.log("Completed");
			completedCol.innerHTML += info;
			completedArr.push(info);
			break;
		default:
			console.log("Please set a status");
	}
}

//Create event listener for modal form being submitted
modalForm.addEventListener("submit", (event) => {
	event.preventDefault();

	makeDataCard();
});

//Determine which column the card should be added to. I think a switch statement could be helpful here

//Create event listener for cards being dragged
