//grab DOM elements
const openButtons = document.querySelectorAll('.question-btn');
const questionText = document.querySelector('.question-text');

openButtons.forEach(function(btn) { //iterates through every item where class == question-btn's
    btn.addEventListener('click', function(e) { //listens for the click event
       const question = e.currentTarget.parentElement.parentElement.parentElement; //selects the great-granparent of the button pressed
       question.classList.toggle('show-text'); //toggles the class 'show-text' for every click
    });
});