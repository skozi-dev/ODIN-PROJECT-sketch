const canvas = document.querySelector('.canvas');
const setSizeButton = document.querySelector('.setSize');
const errorContainer = document.querySelector('.errorContainer');

let numPixels = 0;

function setGrid() {
    numPixels = document.getElementById('inputSize').value;

    if (numPixels < 2 || numPixels > 100) {
        const pError = document.createElement('p');
        pError.textContent = 'Please select a grid size between 2 and 100';
        pError.style.color = 'red';
        errorContainer.append(pError);
    } else {
        errorContainer.textContent = '';
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
                pixelCol.style.background = 'red';
            });
        }
        pixelRow.addEventListener('mouseover', function () {
            pixelRow.style.background = 'red';
        });
    }
}

setSizeButton.addEventListener('click', () => {
    canvas.textContent = '';
    setGrid();
});
