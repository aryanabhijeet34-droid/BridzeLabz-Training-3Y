
const form = document.getElementById("studentForm");
const result = document.getElementById("result");

const fields = [
    {
        id: "studentName",
        regex: /^[A-Za-z]+$/,
        message: "Name must contain alphabets only."
    },
    {
        id: "studentEmail",
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Enter a valid email, e.g. abc@example.com."
    },
    {
        id: "studentPhone",
        regex: /^\d{10}$/,
        message: "Phone must contain exactly 10 digits."
    },
    {
        id: "studentPassword",
        regex: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S+$/,
        message: "Include 1 uppercase, 1 number and 1 special character."
    }
];

function validateField(field) {
    const input = document.getElementById(field.id);
    const error = input.parentElement.querySelector(".error");
    const value = input.value.trim();

    if (!field.regex.test(value)) {
        input.style.borderColor = "red";
        error.style.color = "red";
        error.textContent = field.message;
        return false;
    }

    input.style.borderColor = "green";
    error.style.color = "green";
    error.textContent = "Valid";
    return true;
}

// Validate each field while typing
fields.forEach(field => {
    document.getElementById(field.id).addEventListener("input", () => {
        validateField(field);
        result.textContent = "";
    });
});

// Validate all fields when submitted
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const allValid = fields
        .map(field => validateField(field))
        .every(valid => valid);

    if (allValid) {
        result.style.color = "green";
        result.textContent = "Registration successful!";
        alert("Student registered successfully!");
    } else {
        result.style.color = "red";
        result.textContent = "Please correct the invalid fields.";
    }
});
