// Select color input
const colorPicker = document.getElementById('colorPicker');
let color = colorPicker.value;

colorPicker.addEventListener('change', () => {
  color = colorPicker.value;
});


// When size is submitted by the user, call makeGrid()
const form = document.getElementById('sizePicker');
form.addEventListener('submit', evt => {
  evt.preventDefault();
  makeGrid();
});


function colorBox(target) {
  target.style.cssText = `background-color: ${color}`;
}


function makeGrid() {
  const height = Number(document.getElementById('inputHeight').value);
  const width = Number(document.getElementById('inputWidth').value);

  const table = document.getElementById('pixelCanvas');
  table.addEventListener('click', evt => colorBox(evt.target));
  table.innerHTML = '';

  for (let w = 0; w < height; w++) {
    let row = document.createElement('tr');
    for (let h = 0; h < width; h++) {
      row.appendChild(document.createElement('td'));
    }
    table.appendChild(row);
  }
}
