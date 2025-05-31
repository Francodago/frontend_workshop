const myLibrary = [];

function Book(title, author, pages, isRead) {
  // the constructor...
  this.id =crypto.randomUUID();
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.isRead=isRead;

}

function addBookToLibrary(title, author, pages, isRead) {
  // take params, create a book then store it in the array
  const newBook =new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
}
//display the books on the page
//function to loop and display the books
const displayBooks =()=>{
    const container =document.querySelector("#book-container");
    container.innerHTML="";
    myLibrary.forEach(book=>{
        const bookCard =document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.setAttribute("data-id", book.id);
        bookCard.innerHTML=`<h3>${book.title}</h3>
        <p> Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Read: ${book.isRead ? "Yes" : "No"}</p>
      <button class="remove-btn">Remove</button>
     <button class="toggle-read-btn">Did you read?</button>
    `;
    container.appendChild(bookCard);
        
    })
}

document.querySelector("#new-book-btn").addEventListener("click", () => {
    document.querySelector("#book-form").style.display = "flex";
  });
  
  document.querySelector("#book-form").addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const isRead = document.querySelector("#isRead").checked;
  
    addBookToLibrary(title, author, pages, isRead);
    displayBooks();
  
    e.target.reset(); // Clear form
    e.target.style.display = "none";
  });

  document.querySelector("#book-container").addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
      const bookId = e.target.parentElement.getAttribute("data-id");
      const index = myLibrary.findIndex(book => book.id === bookId);
      if (index !== -1) {
        myLibrary.splice(index, 1);
        displayBooks();
      }
    }
    if (e.target.classList.contains("toggle-read-btn")) {
        const bookId = e.target.parentElement.getAttribute("data-id");
        const book = myLibrary.find(book => book.id === bookId);
        if (book) {
          book.toggleRead();
          displayBooks();
        }
      }
  });

  Book.prototype.toggleRead = function() {
    this.isRead = !this.isRead;
  };
