/*  Get all sketchpad elements */
const sketchPad = document.querySelector('#sketchPad');
const createGrid = document.querySelector('.createGrid');
const resetButton = document.querySelector('.reset');
const colorButton = document.querySelector('.color');
const inputContainer = document.querySelector('.inputContainer');
const gridContainer = document.createElement('div');

/* Create variables for grid */
let gridSize = 0;
const cellSize = 10;

function getGridSize() {
	gridSize = document.getElementById('input').value;

	/* Create the grid */
	if (gridSize <= 100 && gridSize >= 2) {
		gridContainer.className = 'gridContainer';
		gridContainer.style.width = `${gridSize * cellSize + gridSize * 2}px`; // dynamic resizing of grid plus 2px per pixel outline
		sketchPad.appendChild(gridContainer);
	} else {
		const error = document.createElement('p');
		error.textContent = 'Choose a number between 2 and 100.';
		inputContainer.appendChild(error);
	}
}

/* Create the cells of the grid */
function createSketchpad(size) {
	let gridSquared = size * size;
	for (let i = 1; i <= gridSquared; i++) {
		const pixel = document.createElement('div');
		pixel.className = 'pixel';
		pixel.style.cssText = `height: ${cellSize}px; 
            width: ${cellSize}px; 
            border: 1px solid lightblue;
            background-color: #f4f0e8;`;

		gridContainer.append(pixel);

		/* Create a hover effect for cells */
		const hoverEffect = document.querySelectorAll('.pixel');
		pixel.addEventListener('mouseover', () => {
			pixel.style.background = 'red';
		});
	}
}

createGrid.addEventListener('click', () => {
	gridContainer.textContent = '';

	getGridSize();
	createSketchpad(gridSize);
});
