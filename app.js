// dom traversal - siblings

const bookList = document.querySelector('#book-list');
console.log('book-list next sibling' , bookList.nextSibling); // #text     line break
console.log('book-list next element sibling' , bookList.nextElementSibling); // <form id="add-book">...</form>

console.log('book-list previous sibling' , bookList.previousSibling); // #text     line break
console.log('book-list previous element sibling' , bookList.previousElementSibling); // <header>...</header>

bookList.previousElementSibling.querySelector('p').innerHTML += '<br> TOo cool for every1 else!';