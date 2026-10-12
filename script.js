const myLibrary = [];

const tbl = document.getElementById("books-table");
const booksBody = document.getElementById("books-body");

tbl.style.width = "100%";
tbl.style.border = "1px solid black";
tbl.style.borderCollapse = "collapse";

function createTable() {
    booksBody.replaceChildren();

    myLibrary.forEach(book => {
        const tr = booksBody.insertRow();

        const titleCell = tr.insertCell();
        titleCell.textContent = book.title;

        const authorCell = tr.insertCell();
        authorCell.textContent = book.author;

        const pagesCell = tr.insertCell();
        pagesCell.textContent = book.pages;

        const readCell = tr.insertCell();

        const readBox = document.createElement("input");
        readBox.type = "checkbox";
        readBox.checked = book.read;

        readBox.addEventListener("click", () => {
            book.read = readBox.checked;
            console.log("Updated");
        })

        readCell.appendChild(readBox);

        const removeCell = tr.insertCell();

        const removeButton = document.createElement("input");
        removeButton.type = "button";
        removeButton.value = "remove";
        removeButton.id = "remove-button";

        removeButton.addEventListener("click", () => {
            const index = myLibrary.findIndex(
                libraryBook => libraryBook.id === book.id
            );
            if (index !== -1) {
                myLibrary.splice(index, 1);
            }

            createTable();
        });

        removeCell.appendChild(removeButton);

    });
}

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);

    myLibrary.push(book);
    createTable();

    return book;
}

const addNewButton = document.getElementById("add-new");
const bookForm = document.getElementById("book-form");

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const numberInput = document.getElementById("pages");
const readInput = document.getElementById("read");

addNewButton.addEventListener("click", () => {
    bookForm.style.display = "block";
});

bookForm.addEventListener("submit", event => {
    event.preventDefault();

    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const pages = Number(numberInput.value);
    const read = readInput.checked;

    addBookToLibrary(title, author, pages, read);

    bookForm.reset();
    bookForm.style.display = "none";
});

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, false);
addBookToLibrary("Harry Potter", "J.K. Rowling", 223, false);

createTable();