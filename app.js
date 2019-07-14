const wmf = document.querySelector('#book-list li:nth-child(2) .name'); // one space before .name (span)
// console.log(wmf);

var books = document.querySelector('#book-list li .name');
//console.log(books); // returns only 1 element

books = document.querySelectorAll('#book-list li span.name');
// console.log(books); // returns collection of elements, so at least 1 . returns NodeList

//Array.from(books).forEach( book => console.log(book.textContent)); // since this is a NodeList, we don't have to convert books into an array to use the forEach.

// books.forEach( book => console.log(book.textContent)); 

books.forEach( book => console.log(book.textContent += ' (book title)')); 

const bookList = document.querySelector('#book-list');
// console.log(bookList.innerHTML);

// bookList.innerHTML = '<h2>Books and more books </h2>';

bookList.innerHTML += '<h2>Books and more books </h2>';
bookList.innerHTML += '<p>awesome book</p>'