// node traversal

const bookList = document.querySelector('#book-list');
console.log('the parent node is: ' + bookList.parentNode); //  [object HTMLDivElement]
console.log('the parent node is: ' , bookList.parentNode); // <div id="wrapper" > ... </div>

// https://stackoverflow.com/questions/33339688/why-comma-and-plus-log-the-console-output-in-different-pattern

console.log('the parent element is: ' , bookList.parentElement); // <div id="wrapper" > ... </div>

console.log('the parent element of bookLists parent element is: ' , bookList.parentElement.parentElement); // <body></body>

console.log('the child nodes are: ' , bookList.childNodes); //  [text, h2.title, text, ul, text]  text as line-break, total of 3 line breaks

console.log('the child elements are ' , bookList.children); // HTMLCollection(2) [h2.title, ul]
