const add = document.querySelector('button');
const div = document.querySelector('#container');
const auto = 'auto ';
let URL;
let grid = 0;

add.addEventListener('click', () => {

  const a = document.createElement('a');
  
  URL = prompt('Enter URL');
  
  if (URL != null) {
    
    a.href = URL;
    a.innerHTML = prompt('Enter Name');
    
    if (a.innerHTML != '') {
      
      div.appendChild(a);
      gridFX(grid);
      grid++;
   
    }
  }
});

// increases decreases grid columns
let gridFX = (val) => {
  div.style.gridTemplateColumns = auto.repeat(Math.floor(Math.sqrt(val)) + 1);
}