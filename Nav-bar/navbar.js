//grab DOM elements
const hiddenMenu = document.querySelector('.links-mobile');
const toggle1 = document.querySelector('.nav-toggle1');


//hideReviewMenu() is called on click
toggle1.addEventListener('click', () => hideReviewMenu(hiddenMenu));

function hideReviewMenu(targetMenu) {
    if (targetMenu.style.display === 'none') {
        targetMenu.style.display = 'block';
        
    } else {
        targetMenu.style.display = 'none';
    }
}

//hides menu on mouseleave
hiddenMenu.addEventListener('mouseleave', (hiddenMenu) => hiddenMenu.target.style.display = 'none');

//hides menu (if left open) when window is resized beyond 600px
window.addEventListener('resize', onResize);

function onResize() {
    if (window.outerWidth > 600) {
        hiddenMenu.style.display = 'none'
    }
}


//I could do it this way too

/*toggle1.addEventListener('click', function() {
    if (hiddenMenu.style.display === 'none') {
        hiddenMenu.style.display = 'block';
    } else {
        hiddenMenu.style.display = 'none';
    }
});*/


