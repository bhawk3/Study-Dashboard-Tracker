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
const rowWithColumnCards = document.getElementById("row-with-column-cards");
//😊Create modal to add new cards

const userInput = [];
let itemId = 0;

//Take input from the form and make it a card.
function makeDataCard() {
	/*
    What if I add all cards into a single array then map over them. This way
    I can calc IDs and then when you map over an array it returns a new array. 
    This means I would have to map 3 times to get the columns
    */

	const title = cardTitle.value;
	const date = cardDate.value;
	const status = cardStatus.value;
	const description = cardDescription.value;

	const userData = {
		id: itemId++,
		title: title,
		date: date,
		status: status,
		desc: description,
	};

	userInput.push(userData);
	renderBoard();
}

function renderBoard() {
	notStartedCol.innerHTML = "";
	inProgressCol.innerHTML = "";
	completedCol.innerHTML = "";

	userInput.forEach((task) => {
		const info = `<div class="infoCards dragElement" draggable="true" data-id="${task.id}"><button aria-label="delete" class="card-delete-btn" type="button">X</button><h3>Title:&nbsp; ${task.title}</h3><p>Date:&nbsp; ${task.date}</p>
    					<p>Status: ${task.status}</p>
    					<p>Description: ${task.desc}</p></div>`;
		if (task.status === "Not Started") {
			notStartedCol.innerHTML += info;
		} else if (task.status === "In Progress") {
			inProgressCol.innerHTML += info;
		} else if (task.status === "Completed") {
			completedCol.innerHTML += info;
		}
	});
}

//Create event listener for modal form being submitted
modalForm.addEventListener("submit", (event) => {
	event.preventDefault();

	makeDataCard();
	modalForm.reset();
});

rowWithColumnCards.addEventListener("click", (e) => {
	//remove from arr
	//remove from column/clear DOM
	if (e.target.classList.contains("card-delete-btn")) {
		const cardElement = e.target.closest(".infoCards");
		const idToDelete = parseInt(cardElement.dataset.id);

		const index = userInput.findIndex((item) => item.id === idToDelete);
		if (index !== -1) {
			userInput.splice(index, 1);
			renderBoard();
		}
		cardElement.remove();
		console.log("Delete");
	}
});

//Determine which column the card should be added to. I think a switch statement could be helpful here

//Create event listener for cards being dragged

rowWithColumnCards.addEventListener("dragstart", (e) => {
	if (e.target.classList.contains("infoCards")) {
		//"saving" the ID of the card being dragged into browser's memory
		e.dataTransfer.setData("text/plain", e.target.dataset.id);
	}
});

const dragElement = document.querySelector(".dragElement");
const dropZoneSet = Array.from(document.querySelectorAll(".dropZone"));

dropZoneSet.forEach((dropzone) => {
	//Have event listener for which dropzone the dragElement is over then append it to the back of it.
	dropzone.addEventListener("dragover", (e) => {
		e.preventDefault();
	});

	dropzone.addEventListener("drop", (e) => {
		e.preventDefault();

		//Get the ID we saved earlier
		//Find the actual HTML element with that ID
		const draggedCard = parseInt(e.dataTransfer.getData("text/plain"));

		//Update the status in the userInput array
		const task = userInput.find((t) => t.id === draggedCard);
		if (task) {
			if (dropzone.classList.contains("One")) task.status = "Not Started";
			if (dropzone.classList.contains("Two")) task.status = "In Progress";
			if (dropzone.classList.contains("Three")) task.status = "Completed";
			renderBoard();
		}

		//console.log("Updated Data: ", userInput);
	});
});
