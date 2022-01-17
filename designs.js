// Select color input
const colorPicker = document.getElementById('colorPicker');
let color = colorPicker.value;

// Update the `color` variable whenever a user picks a different color.
colorPicker.addEventListener('change', () => {
  color = colorPicker.value;
});


// When size is submitted by the user, call makeGrid()
const form = document.getElementById('sizePicker');
form.addEventListener('submit', evt => {
  evt.preventDefault();
  makeGrid();
});


/*
 * Set the background color of a cell to the chosen color.
 * Resets the background color to `white` if cell is clicked with same
 * highlighted color.
 *
 * params: target => HTMLElement
 */
function colorCell(target) {
  if (target.style.backgroundColor === hexToRgb(color)) {
    target.style.backgroundColor = `#ffffff`;
  } else {
    target.style.backgroundColor = color;
  }
}


/*
 * Convert `hex` colors to `rgb` format.
 *
 * params: hexColor => string representation of hex color format.
 */
function hexToRgb(hexColor) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);

  return result ?
    `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
    : null;
}


/*
 * Draw a grid on the Pixel-Canvas
 */
function makeGrid() {
  const height = Number(document.getElementById('inputHeight').value);
  const width = Number(document.getElementById('inputWidth').value);
  const table = document.getElementById('pixelCanvas');

  // Clear the table before drawing a new grid
  table.innerHTML = '';

  // Draw a `height` by `width` grid while adding `click` event-listener to the cells
  for (let w = 0; w < height; w++) {
    let row = table.insertRow();
    for (let h = 0; h < width; h++) {
      let cell = row.insertCell();
      cell.addEventListener('click', evt => colorCell(evt.target));
    }
  }
}
