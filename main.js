/* Create variables for grid */
const gridSize = 16;
const cellSize = 15;

/*  Get the Sketchpad element */
const sketchPad = document.querySelector('#sketchPad');

/* Create the grid */
const gridContainer = document.createElement('div');
gridContainer.className = 'gridContainer';
gridContainer.style.width = `${gridSize * cellSize}px`; // dynamic resizing of grid
sketchPad.appendChild(gridContainer);

/* Create the cells of the grid */
function createSketchpad(size) {
	let gridSquared = size * size;
	for (let i = 1; i <= gridSquared; i++) {
		const pixel = document.createElement('div');
		pixel.className = 'pixel';

		gridContainer.appendChild(pixel);
	}
}

createSketchpad(gridSize);
