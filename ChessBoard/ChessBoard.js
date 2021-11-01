/* const p = document.getElementById('test');
const row = document.querySelector('.row');
const column = document.querySelector('.column');
const button = document.querySelector('#submit');

button.addEventListener('click', chess);

function chess() {
    let givenWidth = document.querySelector('#getWidth').value;
    let givenHeight = document.querySelector('#getHeight').value; */
   
    const myRow = document.createElement('tr');
    const myColumn = document.createElement('td');
    const elementParent = document.getElementById("chessboard");
    elementParent.appendChild(myRow);
    elementParent.appendChild(myColumn);

   /* let grid = [];
    for(let i = 0; i < givenHeight; i++) {
        for (j = 0; j < givenWidth; j++) {
            if ((j % 2 === 0 && i % 2 === 0) || (j % 2 !== 0 && i % 2 !== 0)) {
                grid += "#";
            } else {
                grid += "C";
            }
        }
        grid += "<br>";
    }
    document.getElementById('test').innerHTML = grid;
}; */

/*  ----------Original Function--------------
function chess(w, h) {
    let grid = [];
    for(let i = 0; i < h; i++) {
        for (j = 0; j < w; j++) {
            if ((j % 2 === 0 && i % 2 === 0) || (j % 2 !== 0 && i % 2 !== 0)) {
                grid += "#";
            } else {
                grid += " ";
            }
        }
        grid += "\n";
    }
    console.log(grid);
    }
    chess(20,10); */