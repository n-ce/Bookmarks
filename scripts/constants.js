const linksParent = document.querySelector('section');
const linksRemovers = document.getElementsByTagName('p');
const getData = JSON.parse(localStorage.getItem('data'));
const setData = param => localStorage.setItem('data', JSON.stringify(param));
const footbtn = document.querySelectorAll('footer span');

export { linksParent, linksRemovers, getData, setData,footbtn };
