// event bubbling 

const list = document.querySelector('#book-list ul');

// delete books
list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
       // li.parentNode.removeChild(li);
       list.removeChild(li);

    }
});