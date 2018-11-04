// Select color input

// Select size input

// When size is submitted by the user, call makeGrid()

// Your code goes here!
const sizePicker=document.getElementById('sizePicker');
const table=document.getElementById('pixelCanvas');


sizePicker.addEventListener('submit', function(event) {
  event.preventDefault();
  makeGrid();
});


function makeGrid() {
  let userheight = document.querySelector('#inputHeight').value;
  let userwidth = document.querySelector('#inputWidth').value;

  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }

  for (var r=1; r<=userheight; r++){
    let row= document.createElement('tr');
    table.appendChild(row);
    for (var c=1; c<=userwidth; c++){
       let cell = document.createElement('td');
       row.appendChild(cell);
       cell.addEventListener('click', function() {
        const usercolor = document.getElementById('colorPicker').value;
        cell.style.backgroundColor = usercolor;
      });
    }
  }
}
