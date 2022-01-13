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
 * Set the background color of a cell to the chosen color
 * params: target => HTMLElement
 */
function colorCell(target) {
  target.style.cssText = `background-color: ${color}`;
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

  // draw a `height` by `width` grid
  for (let w = 0; w < height; w++) {
    let row = table.insertRow();
    for (let h = 0; h < width; h++) {
      let cell = row.insertCell();
      cell.addEventListener('click', evt => colorCell(evt.target));
    }
  }
}
