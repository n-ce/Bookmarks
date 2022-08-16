const div = document.getElementById('container');
const auto = 'auto ';
let URL;
let col;
let grid = 0;

let add = () => {

  const a = document.createElement('a');

  URL = prompt('Enter URL');

  if (URL != '' && URL != null) {

    a.innerHTML = prompt('Enter Name');

    if (a.innerHTML != '') {
      a.href = URL;
      div.appendChild(a);
      gridFX(grid);
      grid++;

    }
  }
}

// increases decreases grid columns
let gridFX = (val) => {
  col = Math.sqrt(val);
  // only run when column limit reached
  if (col == Math.floor(col)) {
    div.style.gridTemplateColumns = auto.repeat(col + 1);
  }
}

