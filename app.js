const h2 = document.querySelector('#book-list h2');
// console.log(h2);

window.count = 10;

h2.addEventListener('click', function(event){
    console.log(event);
    console.log(event.target); // target is property of the event 
    window.count++;
    console.log(window.count); // target is property of the event 
});

// https://www.w3schools.com/jsref/dom_obj_event.asp

// delete buttons

var btns = document.querySelectorAll("#book-list .delete");
//console.log(btns);

btns.forEach(function(btn){
   // console.log(btn);
   btn.addEventListener('click', function(e)
   {
     //  console.log("deleted");
     const li = e.target.parentElement;
    // console.log(li);

     li.parentNode.removeChild(li);

   });
});

const link = document.querySelector('#page-banner a');
link.addEventListener('click', function(e){
    e.preventDefault();
    console.log('navigation to ', e.target.textContent , ' was prevented');
});

console.log('window.count: ', window.count);

if(window.count > 2){
    console.log('yolo');
}