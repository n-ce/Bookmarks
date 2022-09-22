import { getData,setData,linksParent,linksRemovers,footbtn } from './constants.js';

let nameLinks = [];
let n = 0;
let arr = getData;


footbtn[1].addEventListener('click',() => {
  
  nameLinks = prompt('Add or Edit an exisiting bookmark by entering Name & URL separated by comma').split(',');

  if (nameLinks[1] != undefined && nameLinks[1] != '') {
    n = 0;
    
    // Edit
    arr.forEach((e, i) => {
      e.Name == nameLinks[0] ?
        document.querySelectorAll('a')[i].href = e.URL = nameLinks[1] :
        n++;
    });
    
    if (n == arr.length) {
      linksParent.innerHTML += `<span><a href=${nameLinks[1]}>${nameLinks[0]}</a><p></p></span>`;
      arr.push({ Name: nameLinks[0], URL: nameLinks[1] });
    }
    
    setData(arr);

    if (linksRemovers[0].classList.contains('display'))
      linksRemovers[linksRemovers.length - 1].classList.add('display');
  }

});
