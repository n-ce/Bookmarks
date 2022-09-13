const div = document.getElementsByTagName('section')[0];
const removers = document.getElementsByTagName('p');
let URL = [];
let col;
let grid = 0;

const add = () => {
  URL = prompt('Enter Name & URL separated by comma').split(',');
  
  if (URL[1] != undefined && URL[1] != '') {
    
    div.innerHTML += `<span><a href=${URL[1]}>${URL[0]}</a><p class="gg-close-o"></p></span>`;
    gridFX(grid++);
    
    if (removers[0].classList.contains('display'))
      removers[removers.length - 1].classList.add('display');
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

const closer = () => {
  for (k of removers) {
    k.classList.toggle('display');
    k.addEventListener('click', () => {
      k.parentElement.remove();
      gridFX(grid--);
    });
  }
}