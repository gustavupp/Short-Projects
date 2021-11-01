//const p = document.getElementById('test');
//const row = document.querySelector('.row');
//const column = document.querySelector('.column');
const button = document.querySelector('#submit');

button.addEventListener('click', chess);

function chess() {
    let givenWidth = document.querySelector('#getWidth').value;
    let givenHeight = document.querySelector('#getHeight').value;
   
    var tblBody = document.createElement('tbody');
    var parentTable = document.getElementById('chessboard');

    for(let i = 0; i < givenHeight; i++) {
        for (j = 0; j < givenWidth; j++) {
            if ((j % 2 === 0 && i % 2 === 0) || (j % 2 !== 0 && i % 2 !== 0)) {
                var cell = document.createElement('td');
            } else {
                var cell = document.createElement('td');
            }
        }
        var row = document.createElement('tr');
        row.appendChild(cell);
        var parentRow = document.querySelector('tr');
        tblBody.appendChild(row);
    }
    parentTable.appendChild(tblBody);  
};

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