const myLibrary = [
    new Book('Test', 'One', 45, true),
    new Book('Test', 'One', 45, false),
    new Book('Test', 'One', 45, true)
];

function Book(title, author, pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead ? 'already read' : 'not read yet'}.`;
    }
}

function addBookToLibrary(title, author, pages, isRead) {
    const book = new Book(title, author, pages, isRead);
    myLibrary.push(book);
}

function display() {
    const library = document.querySelector('.library');
    for (const book of myLibrary) {
        const bookElement = createBookElement(book);
        library.appendChild(bookElement);
    }
}

function createBookElement(book) {
    const element = document.createElement('div');
    element.classList.add('book');

    const image = document.createElement('div');
    image.classList.add('book-image');
    element.appendChild(image);

    const title = document.createElement('h2');
    title.textContent = book.title;
    title.classList.add('book-title');
    element.appendChild(title);

    const author = document.createElement('span');
    author.textContent = book.author;
    author.classList.add('book-author');
    element.appendChild(author);

    const pages = document.createElement('span');
    pages.textContent = `${book.pages} pages`;
    pages.classList.add('book-pages');
    element.appendChild(pages);

    const isRead = document.createElement('span');
    isRead.textContent = `${book.isRead ? 'Already read' : 'Not read yet'}`;
    isRead.classList.add('book-read-status');
    element.appendChild(isRead);

    const buttons = document.createElement('div');
    buttons.classList.add('book-buttons');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('book-delete-button');
    buttons.appendChild(deleteButton);

    const toggleReadButton = document.createElement('button');
    toggleReadButton.textContent = book.isRead ? 'Mark unread' : 'Mark read';
    toggleReadButton.classList.add('book-toggle-read-button');
    buttons.appendChild(toggleReadButton);

    element.appendChild(buttons);

    return element;
}

display();