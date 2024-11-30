const library = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;

  this.info = function () {
    console.log(
      this.title + "," + this.author + "," + this.pages + "," + this.isRead
    );
  };
}

function addBookToLibrary(title, author, pages, isRead) {
  const book = new Book(title, author, pages, isRead);
  library.push(book);
}

const container = document.querySelector(".lib__container");

function displayBookInLibrary() {
  container.innerHTML = ""; // Clear the container
  library.forEach((book, index) => {
    // Create book title element
    const title = document.createElement("div");
    title.textContent = book.title;

    // Create delete button
    const button = document.createElement("button");
    button.setAttribute("id", "delete");
    button.textContent = "Delete";
    button.setAttribute("data-index", index);

    // Add delete functionality directly here
    button.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      library.splice(index, 1); // Remove the book from the library
      displayBookInLibrary(); // Re-render the library
    });

    // Append elements to the container
    container.appendChild(title);
    container.appendChild(button);
  });
}

// Submit button logic
const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  // Retrieve form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const isRead = document.querySelector("#read").value;

  // Add book to library and re-render
  addBookToLibrary(title, author, pages, isRead);
  displayBookInLibrary();

  // Clear form inputs
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = "";
  document.querySelector("#read").value = "";
});
