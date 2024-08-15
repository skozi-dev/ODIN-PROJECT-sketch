const canvas = document.querySelector('.canvas');
const body = document.querySelector('body'); //for testing purposes, delete when completed
const setSizeButton = document.querySelector('.setSize');
const errorContainer = document.querySelector('.errorContainer');
const randomButton = document.querySelector('.randomColor');

/* Add button functionality*/
randomButton.addEventListener('click', randomColor);

/* Set Global Variables*/
let numPixels = 16;
let drawColor = 'black';

/* Get the user */
setSizeButton.addEventListener('click', () => {
    canvas.textContent = '';
    setGrid();
});

/*  */
function setGrid() {
    numPixels = document.getElementById('userInput').value;

    if (numPixels < 2 || numPixels > 100) {
        const pError = document.createElement('p');
        pError.textContent = 'Please select a grid size between 2 and 100';
        pError.style.color = 'red';
        errorContainer.append(pError);
    } else {
        errorContainer.textContent = ''; // clears error message
        createGrid();
    }
}

/* Create a dynamic grid */
function createGrid() {
    for (let i = 0; i < numPixels; i++) {
        const pixelRow = document.createElement('div');
        pixelRow.classList.add('pixelRow', 'pixel');
        canvas.append(pixelRow);

        for (let k = 0; k < numPixels; k++) {
            const pixelCol = document.createElement('div');
            pixelCol.classList.add('pixelCol', 'pixel');
            pixelRow.append(pixelCol);
            pixelCol.addEventListener('mouseover', function () {
                pixelCol.style.background = drawColor;
            });
        }
    }
}

/*  */
function draw() {
    pixelRow.addEventListener('mouseover', function () {
        pixelRow.style.background = 'drawColor';
    });
}

function randomColor() {
    const rgb = [0, 0, 0];

    for (let i = 0; i < rgb.length; i++) {
        rgb[i] = Math.floor(Math.random() * 256);
    }

    drawColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
}
