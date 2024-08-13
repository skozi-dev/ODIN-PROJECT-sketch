const canvas = document.querySelector('.canvas');
const pixel = document.querySelectorAll('.pixel');

// pixel.addEventListener('mouseover', () => {
//     pixel.style.background = 'red';
// });

const numPixels = 16;

/* Create a dynamic grid */
function createGrid() {
    for (let i = 0; i < numPixels; i++) {
        const pixelRow = document.createElement('div');
        pixelRow.classList.add('pixelRow', 'pixel');
        canvas.appendChild(pixelRow);

        for (let k = 0; k < numPixels; k++) {
            const pixelCol = document.createElement('div');
            pixelCol.classList.add('pixelCol', 'pixel');
            pixelRow.appendChild(pixelCol);
        }
    }
}

createGrid();
