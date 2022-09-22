import { getData, setData, linksParent } from './constants.js';


const Import = (val) => {
  let newData = val;

  if (newData != getData && getData != null)
    newData = getData.concat(newData);
  
  setData(newData);

  linksParent.innerHTML = null;

  for (const x of newData)
    linksParent.innerHTML +=
    `<span>
      <a href=${x.URL}>${x.Name}</a>
      <p></p>
    </span>`;

}


if (getData != null) Import(getData);

const inputbtn = document.querySelector('#upload');

inputbtn.addEventListener('change',
  async () => {
    Import(JSON.parse(await inputbtn.files[0].text()))
  }
);