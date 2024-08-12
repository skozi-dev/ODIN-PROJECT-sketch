/* Create variables for grid */
const gridSize = 30;
const cellSize = 20;

/*  Get the Sketchpad element */
const sketchPad = document.querySelector('#sketchPad');

/* Create the grid */
const gridContainer = document.createElement('div');
gridContainer.className = 'gridContainer';
gridContainer.style.width = `${gridSize * cellSize + gridSize * 2}px`; // dynamic resizing of grid plus 2px per pixel outline
sketchPad.appendChild(gridContainer);

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

createSketchpad(gridSize);
