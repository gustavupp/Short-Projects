//grab DOM elements
const hiddenMenu = document.querySelector('.links-mobile');
const toggle1 = document.querySelector('.nav-toggle1');
const toggle2 = document.querySelector('.nav-toggle2');

function hideReviewMenu(targetMenu) {
    if (targetMenu.style.display === 'none') {
        targetMenu.style.display = 'block';
    } else {
        targetMenu.style.display = 'none';
    }
}

toggle1.addEventListener('click', () => hideReviewMenu(hiddenMenu));
hiddenMenu.addEventListener('mouseleave', (hiddenMenu) => hiddenMenu.target.style.display = 'none');

//I could do it this way too

/*toggle1.addEventListener('click', function() {
    if (hiddenMenu.style.display === 'none') {
        hiddenMenu.style.display = 'block';
    } else {
        hiddenMenu.style.display = 'none';
    }
});*/


