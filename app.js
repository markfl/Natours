// "use strict";

function init() {
    
};

init();

const elements = {
    book: document.querySelector('.popup')
};

document.addEventListener('click', function() {

    console.log('click anywhere');    
});

elements.book.addEventListener('click', function() {

    console.log('click in popup');    
});