/* const p = document.getElementById('test');
const row = document.querySelector('.row');
const column = document.querySelector('.column');
const button = document.querySelector('#submit');

button.addEventListener('click', chess);

function chess() {
    let givenWidth = document.querySelector('#getWidth').value;
    let givenHeight = document.querySelector('#getHeight').value; */
   
    const tblBody = document.createElement('tbody');
    const row = document.createElement('tr');
    const cell = document.createElement('td');

    const parentTable = document.getElementById('chessboard');
    const parentRow = document.querySelector('tr');

    row.appendChild(cell);
    tblBody.appendChild(row);
    parentTable.appendChild(tblBody);
    
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