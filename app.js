const wmf = document.querySelector('#book-list li:nth-child(2) .name'); // one space before .name (span)
// console.log(wmf);

var books = document.querySelector('#book-list li .name');
//console.log(books); // returns only 1 element

books = document.querySelectorAll('#book-list li .name');
//console.log(books); // returns collection of elements, so at least 1 

Array.from(books).forEach( book => console.log(book));