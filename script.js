const div = document.getElementsByTagName('section')[0];
let URL = [];
let col;
let grid = 0;

const add = () => {
  const a = document.createElement('a');
  URL = prompt('Enter Name & URL separated by comma').split(',');
  if (URL[1] != undefined && URL[1] != '') {
    a.innerHTML = URL[0];
    a.href = URL[1];
    div.appendChild(a);
    gridFX(grid);
    grid++;
  }
}

const cssVar = (p, q) => { document.querySelector(':root').style.setProperty(p, q); }
// increases decreases grid columns
const gridFX = (val) => {
  col = Math.sqrt(val);
  // only run when column limit reached
  if (col == Math.floor(col) && col < 7) {
    cssVar('--h1', (85 - (15 * col)) + '%');
    cssVar('--div', (15 + (15 * col)) + '%');
    cssVar('--fontSize', ((3 - (0.4 * col)) / 1.5) + 'rem');
    div.style.gridTemplateColumns = 'auto '.repeat(col + 1);
  }
}