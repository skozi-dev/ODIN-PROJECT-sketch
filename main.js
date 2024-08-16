// ======================================
// The Odin Project: Etch-A-Sketch
// ======================================

const canvas = document.querySelector('.canvas');
const setSizeButton = document.querySelector('.setSize');
const errorContainer = document.querySelector('.errorContainer');
const randomButton = document.querySelector('.randomColor');
const controlsContainer = document.querySelector('.controlsContainer');
const historyContainer = document.querySelector('.history');
const displayHistory = document.querySelector('.displayHistory');
const blackButton = document.querySelector('.black');
const redButton = document.querySelector('.red');
const greenButton = document.querySelector('.green');
const blueButton = document.querySelector('.blue');
const yellowButton = document.querySelector('.yellow');
const resetButton = document.querySelector('.reset');

//  Add button functionality
randomButton.addEventListener('click', randomColor);
blackButton.addEventListener('click', blackColor);
redButton.addEventListener('click', redColor);
greenButton.addEventListener('click', greenColor);
blueButton.addEventListener('click', blueColor);
yellowButton.addEventListener('click', yellowColor);
resetButton.addEventListener('click', () => {
    canvas.textContent = '';
    setGrid();
});

// Set Global Variables
let numPixels = 16;
let drawColor = 'black';

/* User sets input value*/
setSizeButton.addEventListener('click', () => {
    canvas.textContent = '';
    setGrid();
});

/*   */
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
    colorHistory();
}

/*  */
function draw() {
    pixelRow.addEventListener('mouseover', function () {
        pixelRow.style.background = 'drawColor';
    });
}

/* Display to the user what the currently selected draw color is
this may also be useful to help create a history of colors and a panel to save favorite colors */
function colorHistory() {
    const currentColor = document.createElement('div');
    currentColor.classList.add('currentColor');
    currentColor.textContent = drawColor;
    currentColor.style.background = drawColor;
    displayHistory.textContent = '';
    displayHistory.append(currentColor);
}

// All color functions
function randomColor() {
    const rgb = [0, 0, 0];

    for (let i = 0; i < rgb.length; i++) {
        rgb[i] = Math.floor(Math.random() * 256);
    }

    drawColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
    colorHistory();
}

function blackColor() {
    drawColor = 'black';
    colorHistory();
}

function redColor() {
    drawColor = 'red';
    colorHistory();
}

function greenColor() {
    drawColor = 'green';
    colorHistory();
}

function blueColor() {
    drawColor = 'blue';
    colorHistory();
}

function yellowColor() {
    drawColor = 'yellow';
    colorHistory();
}
