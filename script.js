const myLibrary = [];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    return book;
}

const myBookElement = document.createElement("div")

addBookToLibrary("The hobbit", "Some author", 102, false);
addBookToLibrary("The Harry Potter", "Some author", 102, false);

function createTable() {
    const tbl = document.getElementById("books-table");

    tbl.style.width = "100px";
    tbl.style.border = "1px solid black";


    myLibrary.forEach(book => {
        const tr = tbl.insertRow();
        
        const titleCell = tr.insertCell();
        titleCell.textContent = book.title;

        const authorCell = tr.insertCell();
        authorCell.textContent = book.author;

        const pagesCell = tr.insertCell();
        pagesCell.textContent = book.pages;

        const readCell = tr.insertCell();
        readCell.textContent = book.read ? "Read" : "Not read";
    });

    document.body.appendChild(tbl);

}

createTable();
document.body.appendChild(myBookElement)