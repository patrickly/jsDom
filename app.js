var titles = document.getElementsByClassName('title');

//will give error since titles is not an array, since it's an html collection

// titles.forEach(function(item){
//     console.log(item);
// });

console.log(Array.isArray(titles)); // false
console.log(Array.isArray(Array.from(titles))); // true

Array.from(titles).forEach(function(item){
    console.log(item);
});
