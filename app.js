"use strict";
const init = function() {
    window.location.hash = "header";
    console.log('Initialzation');
}

init();

document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape') {
        const target = e.target.baseURI;
        const num = target.search("#popup");
        if (num > 0) {
            console.log('escape key')
            window.location.hash = "section-tours";
        }
    }
})

var navListItems = document.getElementsByClassName("navigation__item"); // this returns an array with each item that contains the class name navigation__item.
 
for(var i = 0; i < navListItems.length; i++){ // you can only apply condition to individual elements so we need to call each element of the array by using [] and an index so [index]. Here we are looping on all the elements of the array and assigning them a condition
    navListItems[i].onclick = function(){ // for each item of the array execute the following function when it becomes clicked.
        document.getElementById("navi-toggle").checked = false; //close the menu by unchecking the checkbox
    };
}
/*
const elements = {
    book: document.querySelector('.popup')
};

elements.book.addEventListener('click', function() {

    console.log('click in popup');    
});*/