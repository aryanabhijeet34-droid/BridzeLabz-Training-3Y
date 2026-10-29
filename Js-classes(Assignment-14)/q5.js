
const bookingForm = document.getElementById("bookingForm");
const ticketOutput = document.getElementById("ticketOutput");

const nameInput = document.getElementById("bookingName");
const emailInput = document.getElementById("bookingEmail");
const seatsInput = document.getElementById("bookingSeats");

const nameRegex = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showError(input, message) {
    input.style.borderColor = "red";
    input.parentElement.querySelector(".error").textContent = message;
}

function showValid(input) {
    input.style.borderColor = "green";
    input.parentElement.querySelector(".error").textContent = "";
}

function validateName() {
    const name = nameInput.value.trim();

    if (!nameRegex.test(name)) {
        showError(nameInput, "Use alphabets only.");
        return false;
    }

    showValid(nameInput);
    return true;
}

function validateEmail() {
    const email = emailInput.value.trim();

    if (!emailRegex.test(email)) {
        showError(emailInput, "Enter a valid email address.");
        return false;
    }

    showValid(emailInput);
    return true;
}

function validateSeats() {
    const value = seatsInput.value.trim();
    const seats = Number(value);

    if (
        value === "" ||
        !Number.isInteger(seats) ||
        seats < 1 ||
        seats > 10
    ) {
        showError(seatsInput, "Choose a whole number from 1 to 10.");
        return false;
    }

    showValid(seatsInput);
    return true;
}

// Validate as the user types
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
seatsInput.addEventListener("input", validateSeats);

// Handle booking submission
bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameValid = validateName();
    const emailValid = validateEmail();
    const seatsValid = validateSeats();

    if (!nameValid || !emailValid || !seatsValid) {
        ticketOutput.className = "";
        ticketOutput.textContent =
            "Please correct the errors before booking.";
        return;
    }

    const booking = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        seats: Number(seatsInput.value)
    };

    console.log("Booking Object:", booking);

    ticketOutput.className = "ticket";
    ticketOutput.textContent =
        "🎬 MOVIE TICKET CONFIRMED\n\n" +
        "Name: " + booking.name + "\n" +
        "Email: " + booking.email + "\n" +
        "Seats: " + booking.seats + "\n\n" +
        "Enjoy your movie!";

    // Keep the ticket visible after booking
    bookingForm.reset();
});
