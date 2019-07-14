var book = document.querySelector('li:first-child .name');
console.log(book);

var attr = book.getAttribute('class');
console.log(attr);

var setr = book.setAttribute('class' , 'name-2');
console.log(book);

var has = book.hasAttribute('class');
console.log(has);

var remov = book.removeAttribute('class');
console.log(book);

var setr = book.setAttribute('class' , 'name');

console.log(book);

