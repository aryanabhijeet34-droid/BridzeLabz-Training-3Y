
class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            return `${this.title} is already issued.`;
        }

        this.isIssued = true;
        return `${this.title} issued successfully.`;
    }

    returnBook() {
        if (!this.isIssued) {
            return `${this.title} is already available.`;
        }

        this.isIssued = false;
        return `${this.title} returned successfully.`;
    }
}

const books = [
    new Book("Java Programming", "James Gosling", "101"),
    new Book("Python Basics", "Guido van Rossum", "102"),
    new Book("Data Structures", "Mark Allen", "103"),
    new Book("Web Development", "Jon Duckett", "104", true)
];

const isbnInput = document.getElementById("isbn");
const bookList = document.getElementById("bookList");
const message = document.getElementById("message");

function findBook() {
    const isbn = isbnInput.value.trim();

    if (isbn === "") {
        message.style.color = "red";
        message.textContent = "Please enter an ISBN.";
        return null;
    }

    const book = books.find(item => item.ISBN === isbn);

    if (!book) {
        message.style.color = "red";
        message.textContent = "Book not found.";
        return null;
    }

    return book;
}

function displayBooks(list) {
    bookList.innerHTML = "";

    if (list.length === 0) {
        bookList.textContent = "No books to display.";
        return;
    }

    list.forEach(book => {
        const div = document.createElement("div");
        div.className = "book";

        const title = document.createElement("strong");
        title.textContent = book.title;

        const details = document.createElement("p");
        details.textContent =
            `Author: ${book.author} | ISBN: ${book.ISBN}`;

        const status = document.createElement("p");
        status.textContent = book.isIssued ? "Status: Issued" : "Status: Available";

        div.append(title, details, status);
        bookList.appendChild(div);
    });
}

document.getElementById("issueBtn").addEventListener("click", () => {
    const book = findBook();

    if (book) {
        message.textContent = book.issueBook();
        message.style.color = book.isIssued ? "green" : "red";
        displayBooks(books);
    }
});

document.getElementById("returnBtn").addEventListener("click", () => {
    const book = findBook();

    if (book) {
        const wasIssued = book.isIssued;
        message.textContent = book.returnBook();
        message.style.color = wasIssued ? "green" : "red";
        displayBooks(books);
    }
});

document.getElementById("searchBtn").addEventListener("click", () => {
    const book = findBook();

    if (book) {
        message.style.color = "green";
        message.textContent = "Book found.";
        displayBooks([book]);
    }
});

document.getElementById("availableBtn").addEventListener("click", () => {
    const available = books.filter(book => !book.isIssued);
    message.textContent = "Available books";
    message.style.color = "green";
    displayBooks(available);
});

document.getElementById("allBtn").addEventListener("click", () => {
    message.textContent = "All books";
    message.style.color = "green";
    displayBooks(books);
});

displayBooks(books);
