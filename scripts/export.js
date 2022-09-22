import { getData, linksParent, footbtn } from './constants.js';

footbtn[3].addEventListener('click', () => {
  
  if (linksParent.innerHTML != '') {
    
    const textToBLOB = new Blob([JSON.stringify(getData)], { type: 'application/json' });
    newLink = document.createElement("a");
    newLink.download = `BookMarkData_${Math.floor(Math.random() * 999)}.json`;
    
    if (window.webkitURL != null) {
      newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
      newLink = window.URL.createObjectURL(textToBLOB);
      newLink.style.display = "none";
      document.body.appendChild(newLink);
    }
    
    newLink.click();
  }
});