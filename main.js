const canvas = document.querySelector('.canvas');
const numPixels = 16;

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
                pixelCol.style.background = 'red';
            });
        }
        pixelRow.addEventListener('mouseover', function () {
            pixelRow.style.background = 'red';
        });
    }
}

createGrid();
