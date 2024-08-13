const canvas = document.querySelector('.canvas');

const numPixels = 16;

function createGrid() {
    for (let i = 0; i < numPixels; i++) {
        const pixelRow = document.createElement('div');
        pixelRow.classList.add('pixelRow');
        canvas.appendChild(pixelRow);

        for (let k = 0; k < numPixels; k++) {
            const pixelCol = document.createElement('div');
            pixelCol.classList.add('pixelCol');
            pixelRow.appendChild(pixelCol);
        }
    }
}

createGrid();
