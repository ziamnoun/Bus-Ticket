
// // Get references
// const seatDesign = document.getElementById("seat-Design");
// // Get reference of seats
// const availableSeats = document.querySelectorAll(".side .seat");
// // Get reference of remain seats
// const remainSeats = document.getElementsByClassName("remain-seats")[0]; 
// // Get reference of Selected seats selected-seats
// const selectedSeatsElement = document.querySelector(".selected-seats"); 
// // Get reference of total prize
// const totalPrize = document.querySelector(".totall-prize"); 
// //Get refernce of grand prize
// const grandPrize=document.querySelector(".Grand-prize")

// seatDesign.addEventListener('click', (e) => {
//     const clickedSeat = e.target.closest(".seat");

//     if (clickedSeat && !isMaxSeatsSelected()) {
//         clickedSeat.classList.toggle("selected");
//         updateSelectedCount();
//     }
// });

// // Define function to update selected count
// function updateSelectedCount() {
//     const currentlySelectedSeats = document.querySelectorAll(".side .seat.selected");

//     // Sort selected seats by their index in ascending order
//     const sortedSeats = [...currentlySelectedSeats].sort((a, b) => a.dataset.index - b.dataset.index);

//     // Select only the highest 4 seats
//     const highest4Seats = sortedSeats.slice(-4);

//     // Getting an array of indices for the highest 4 seats
//     const seatIndex = highest4Seats.map(seat => Number(seat.dataset.index));
//     const currentlySelectedSeatsCounts = highest4Seats.length;

//     // Update the content of selectedSeats element
//     if (selectedSeatsElement) {
//         selectedSeatsElement.innerText = currentlySelectedSeatsCounts;
//     }

//     // Update the content of totalPrize element
//     if (totalPrize) {
//         totalPrize.innerText = currentlySelectedSeatsCounts * 550;
//     }
//     // Update the content of totalPrize element
//     if (grandPrize) {
//         grandPrize.innerText = currentlySelectedSeatsCounts * 550;
//     }
// }

// // Function to check if the maximum number of seats is selected
// function isMaxSeatsSelected() {
//     const selectedSeats = document.querySelectorAll(".side .seat.selected");
//     return selectedSeats.length >= 4;
// }
// Get references
const seatDesign = document.getElementById("seat-Design");
const availableSeats = document.querySelectorAll(".side .seat");
const listContainer = document.querySelector(".list ul"); // Assuming it's a specific element

seatDesign.addEventListener('click', (e) => {
    const clickedSeat = e.target.closest(".seat");

    if (clickedSeat && !isMaxSeatsSelected()) {
        clickedSeat.classList.toggle("selected");
        updateSelectedCount();
    }
});

// Define function to update selected count
function updateSelectedCount() {
    const currentlySelectedSeats = document.querySelectorAll(".side .seat.selected");

    // Clear existing content in the list container
    listContainer.innerHTML = '';

    // Iterate over the selected seats and append a new <li> for each seat to the <ul>
    currentlySelectedSeats.forEach(seat => {
        const listItem = document.createElement("li");
        listItem.innerText = `Seat No: ${seat.dataset.seatNumber} - ${seat.dataset.seatType} - ${seat.dataset.seatPrice}`;
        listContainer.appendChild(listItem);
    });

    // Continue with the rest of the code...
}

// Function to check if the maximum number of seats is selected
function isMaxSeatsSelected() {
    const selectedSeats = document.querySelectorAll(".side .seat.selected");
    return selectedSeats.length >= 4;
}
