//: Create a constructor function for the Book object with properties for title, author, and pages.
function Book(title,author, page){
    this.title = title;
    this.author = author;
    this.page   = page; 

}
// Implement a method within the Book object to display book information.
const  newBook = bookName(`Allison and the Wonderland`,  "Lewis Carroll", 33);


// Create an array to store book objects and implement functions to add new books and search for books by title or author.

let bookList = [];

function addNewBook(){

    let bookTitle = prompt(" Please enter the title of the book you want to add");
    let bookAuthor = prompt("Please enter the author of the book you want to add");
    let favoritePage= prompt("What page is your favorite in the book?");

    let newBook = bookName(bookTitle , bookAuthor, favoritePage);
    bookArray.push(newBook);
    console.log(bookList);
} 

