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

function addNewBook(bookTitle, bookAuthor,favouritePage){

    // let bookTitle = prompt(" Please enter the title of the book you want to add");
    // let bookAuthor = prompt("Please enter the author of the book you want to add");
    // let favoritePage= prompt("What page is your favorite in the book?");

    let newBook = bookName(bookTitle , bookAuthor, favoritePage);
    bookArray.push(newBook);
    console.log(bookList);
} 

addNewBook(jumanji, jumanjiAuthor, page5)


function searchBook(title){
    for (let i = 0; i < bookList.length; i++){
        if (bookTitle = bookList[i].title){
            console.log(bookList[i]);
        }
    }
}

searchBook(title)


// Create a constructor function for the Account object with properties for accountNumber, balance, and owner.
function account(accountNumber, balance, owner){
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}

// Implement methods within the Account object to deposit, withdraw, and check the balance. 
function deposit(){
    this.balance += amount
}

function withdraw(){
    this.balance -= balance
}


function compoundInterest(){ 

    function compoundInterest(p,n,r,t){ 
        // const p = 1000; 
        // const n = 12; 
        // const r = 5; 
        // const t = 2; 
        
        const numberCompounded = (n, r) => 1 + (r / 100) / n; 
        const rightSide = (p, numberCompounded, t, n) => p * (numberCompounded ** (n * t)); 
    
        console.log ("Here is your current amount: $" + rightSide(p, numberCompounded(n, r), t, n))   
    }
    
}


//Test
    
compoundInterest(1000,12,5,10)

