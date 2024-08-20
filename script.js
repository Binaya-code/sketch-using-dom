const container = document.getElementById('gridContainer');
const resizeButton = document.getElementById('resizeButton');
const clearButton = document.getElementById('clearButton');

// Function to create the grid
function createGrid(size) {
    container.innerHTML = '';

    if (size < 1) size = 1;
    if (size > 100) size = 100;

    // Calculate the size of each square
    const squareSize = container.clientWidth / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('gridSquare');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });

        container.appendChild(square);
    }
}

// Function to clear the grid colors
function clearGrid() {
    const squares = document.querySelectorAll('.gridSquare');
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
}

// Event listener for resize button
resizeButton.addEventListener('click', () => {
    let newSize = prompt('Enter new grid size (1-100):');
    newSize = parseInt(newSize);
    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert('Please enter a valid number between 1 and 100.');
    } else {
        createGrid(newSize);
    }
});

clearButton.addEventListener('click', clearGrid);

createGrid(16);