//test test test
function scrollToTarget(targetId) {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
  const buyTicketsButton = document.querySelector('.banner button.btn');
  buyTicketsButton.addEventListener('click', () => {
    scrollToTarget('seat-Design');
  });
// Get references
const seatDesign = document.getElementById("seat-Design");
const listContainer = document.querySelector(".list ul");
// Get reference of seats
const availableSeats = document.querySelectorAll(".side .seat");
// Get reference of remain seats
const remainSeats = document.getElementsByClassName("remain-seats")[0]; 
// Get reference of Selected seats selected-seats
const selectedSeatsElement = document.querySelector(".selected-seats"); 
// Get reference of total prize
const totalPrize = document.querySelector(".totall-prize"); 
//Get refernce of grand prize
const grandPrize=document.querySelector(".Grand-prize")
//get refernece phone number and next button
const phoneNumberInput = document.getElementById('phoneNumber');
const nextButton = document.getElementById('nextButton');
const couponInput = document.querySelector('.input input');
const applyButton = document.getElementById('applyButton');

seatDesign.addEventListener('click', (e) => {
    const clickedSeat = e.target.closest(".seat");

    if (clickedSeat && !isMaxSeatsSelected()) {
        clickedSeat.classList.toggle("selected");
        updateSelectedCount();
        checkEnableNextButton()
    }
});

// Define function to update selected count
function updateSelectedCount() {
    const currentlySelectedSeats = document.querySelectorAll(".side .seat.selected");

    // Sort selected seats by their index in ascending order
    const sortedSeats = [...currentlySelectedSeats].sort((a, b) => a.dataset.index - b.dataset.index);

    // Select only the highest 4 seats
    const highest4Seats = sortedSeats.slice(-4);

    // Getting an array of indices for the highest 4 seats
    const seatIndex = highest4Seats.map(seat => Number(seat.dataset.index));
    const currentlySelectedSeatsCounts = highest4Seats.length;

    // Update the content of selectedSeats element
    if (selectedSeatsElement) {
        selectedSeatsElement.innerText = currentlySelectedSeatsCounts;
    }
    //Update remain seats
    if (remainSeats) {
        const remainingSeatsCount = 20 - currentlySelectedSeatsCounts;
        remainSeats.innerText = remainingSeatsCount;
    }
    // Update the content of totalPrize element
    if (totalPrize) {
        totalPrize.innerText = currentlySelectedSeatsCounts * 550;
    }
    // Update the content of totalPrize element
    if (grandPrize) {
        grandPrize.innerText = currentlySelectedSeatsCounts * 550;
    }

    listContainer.innerHTML = '';

    // Iterate over the selected seats and append a new <li> for each seat to the <ul>
    currentlySelectedSeats.forEach(seat => {
        const listItem = document.createElement("li");
        listItem.innerText = 'Seat No: -------------------------------- Economy ------------------------------550';
        listContainer.appendChild(listItem);
    });
    //kksk
    
}

// Function to check if the maximum number of seats is selected
function isMaxSeatsSelected() {
    const selectedSeats = document.querySelectorAll(".side .seat.selected");
    return selectedSeats.length >= 4;
}
//enabling next button

phoneNumberInput.addEventListener('input', () => {
    checkEnableNextButton();
});
function checkEnableNextButton() {
    const phoneNumber = phoneNumberInput.value.trim();
    const selectedSeats = document.querySelectorAll(".side .seat.selected");
    nextButton.disabled = !(selectedSeats.length > 0 && phoneNumber.length > 0);
}
checkEnableNextButton();
//next button funtionality
nextButton.addEventListener('click', () => {
    const phoneNumber = phoneNumberInput.value.trim();
    const selectedSeats = document.querySelectorAll(".side .seat.selected");

    if (selectedSeats.length > 0 && phoneNumber.length > 0) {
        window.location.href = "successful.html"; 
    }
});



couponInput.addEventListener('input', () => {
    const couponCode = couponInput.value.trim().toUpperCase(); 

    if (couponCode === 'NEW15' || couponCode === 'COUPLE20') {
        
        applyButton.disabled = false;
    } else {
  
        applyButton.disabled = true;
    }
});

