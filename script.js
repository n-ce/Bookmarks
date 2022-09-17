const linksParent = document.querySelector('section');
const linksRemovers = document.getElementsByTagName('p');
let nameLinks = [];
let n = 0;
let arr = [];

const add = () => {
  nameLinks = prompt('Enter Name & URL separated by comma').split(',');

  if (nameLinks[1] != undefined && nameLinks[1] != '') {
    n = 0;
    arr.forEach((e, i) => {
      e.Name == nameLinks[0] ?
        document.getElementsByTagName('a')[i].href = e.URL = nameLinks[1] :
        n++;
    });
    if (n == arr.length) {
      linksParent.innerHTML += `<span><a href=${nameLinks[1]}>${nameLinks[0]}</a><p></p></span>`;
      arr.push({
           Name: nameLinks[0],
           URL: nameLinks[1]
         });
    }
    localStorage.setItem('data', JSON.stringify(arr));

    if (linksRemovers[0].classList.contains('display'))
      linksRemovers[linksRemovers.length - 1].classList.add('display');
  }
}

const remove = () => {
  for (k of linksRemovers) {
    k.classList.toggle('display');
    k.addEventListener('click', () => {
      k.parentElement.remove();
    });
  }
}


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
    linksParent.innerHTML += `<span><a href=${x.URL}>${x.Name}</a><p></p></span>`;
}

if (localStorage.getItem('data') != null) {
  Import(localStorage.getItem('data'));
}
