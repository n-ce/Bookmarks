const linksParent = document.getElementsByTagName('section')[0];
const linksRemovers = document.getElementsByTagName('p');
let nameLinks = [];
let col;
let gridNo = 0;
let n = 0;
let arr = [];
let obj;

const cssVar = (p, q) => document.querySelector(':root').style.setProperty(p, q);

// increases decreases grid columns
const gridChange = (no) => {
  col = Math.sqrt(no);

  // only run when col is an absolute value

  if (col == Math.floor(col) && col < 7) {
    cssVar('--top', (85 - (15 * col)) + '%');
    cssVar('--bottom', (15 + (15 * col)) + '%');
    cssVar('--fontSize', ((3 - (0.4 * col)) / 1.5) + 'rem');
    linksParent.style.gridTemplateColumns = 'auto '.repeat(col + 1);
  }
}



const add = () => {
  nameLinks = prompt('Enter Name & URL separated by comma').split(',');

  if (nameLinks[1] != undefined && nameLinks[1] != '') {
    //
    obj = {
      Name: nameLinks[0],
      URL: nameLinks[1]
    };
    n = 0;
    arr.forEach((e, i) => {
      e.Name == obj.Name ?
        document.getElementsByTagName('a')[i].href = e.URL = obj.URL :
        n++;
    });
    if (n == arr.length) {
      linksParent.innerHTML += `<span><a href=${obj.URL}>${obj.Name}</a><p class="gg-close-o"></p></span>`;
      arr.push(obj);
    }
    localStorage.setItem('data', JSON.stringify(arr));
    //
    gridChange(gridNo++);

    if (linksRemovers[0].classList.contains('display'))
      linksRemovers[linksRemovers.length - 1].classList.add('display');
  }
}

const closer = () => {
  for (k of linksRemovers) {
    k.classList.toggle('display');
    k.addEventListener('click', () => {
      k.parentElement.remove();
      gridChange(gridNo--);
    });
  }
}

document.getElementsByTagName('button')[0].addEventListener('click', () => {
  for (let i = 1; i < 5; i++)
    document.getElementsByTagName('button')[i].classList.toggle('hide');
})


let Export = () => {
  if (linksParent.innerHTML != '') {
    const textToBLOB = new Blob([JSON.stringify(arr)], { type: 'application/json' });
    let newLink = document.createElement("a");
    newLink.download = `BookMarkData_${Math.floor(Math.random() * 999)}.json`;
    if (window.webkitURL != null) {
      newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
      newLink.href = window.URL.createObjectURL(textToBLOB);
      newLink.style.display = "none";
      document.body.appendChild(newLink);
    }
    newLink.click();
  }
}

let Import = (val) => {
  arr = arr.concat(JSON.parse(val));
  linksParent.innerHTML = null;
  for (const x of arr)
    linksParent.innerHTML += `<span><a href=${x.URL}>${x.Name}</a><p class="gg-close-o"></p></span>`;
}

if (localStorage.getItem('data') != null) {
  Import(localStorage.getItem('data'));
}
