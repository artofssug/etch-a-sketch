/* 
    create a container div in html
    select this div in js
    create a function that creates a given number of rows and adds them to the div container
    create a function that creates a given number of squares for each line created and adds them to the lines
    create a function that changes the background color of a square
    create a function that uses the function that changes the background color of a square whenever the mouse passes over it

    ok... part 1 done. part 2:

    create a button in html
    select this button in js
    create a function/event that causes the button, when clicked, to ask the user(prompt) to set a number of squares for each side
    save this number in a variable
    once the user has defined the number of squares, the current grid should be deleted and a new one should be generated with the number of squares and lines defined by the user. ps: the number cannot exceed 100
*/

// part 1:

let container = document.querySelector('#container');

let squaresPerSide = 16;

function createRows() {
    for (let i = 1; i <= squaresPerSide; i++) {
        let div = document.createElement('div');
        div.classList.add('row');
        container.appendChild(div);
    }
}

createRows();

let rows = document.querySelectorAll('.row');

function createSquares() {
    let rows = document.querySelectorAll('.row');
    for (let i = 1; i <= squaresPerSide; i++) {
        for (let i = 0; i < squaresPerSide; i++) {
            let square = document.createElement('div')
            square.classList.add('square');
            rows[i].appendChild(square);
        }
    }
}

createSquares();

function generateRandomColor() {
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor
}

function mouseOverNormalMode() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = generateRandomColor();
            
        });
    })
}

function mouseOverNormalMode() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', (e) => {
            square.style.backgroundColor = 'black';
            console.log(square)
        });
    })
}

mouseOverNormalMode()

function mouseOverRainbowMode() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = generateRandomColor();
            
        });
    })
}

// part 2:

function getSquarePerSide() {
    while (true) {
        squaresPerSide = prompt('Define number of squares per side for the new grid(It cannot extend 100):', '');
        if (squaresPerSide > 100 || squaresPerSide < 0) {
            continue
        }
        return
    }
}

function removeSquaresAndRows() {
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.remove();
    });

    let rows = document.querySelectorAll('.row');
    rows.forEach((row) => {
        row.remove();
    });
}

let btnChanger = document.querySelector('#changer');

let btnRainbowMode = document.querySelector('#rainbowMode');

let btnNormalMode = document.querySelector('#normalMode');

let btnReset = document.querySelector('#reset');

btnChanger.addEventListener('click', () => {

    removeSquaresAndRows();

    getSquarePerSide();

    createRows();

    createSquares();

    mouseOverNormalMode()
});

btnRainbowMode.addEventListener('click', () => {
    mouseOverRainbowMode()
});

btnNormalMode.addEventListener('click', () => {
    mouseOverNormalMode()
});

btnReset.addEventListener('click', (e) => {
    removeSquaresAndRows();

    createRows();

    createSquares();

    mouseOverNormalMode()
});