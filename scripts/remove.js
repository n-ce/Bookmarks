import { linksRemovers , footbtn} from './constants.js';

footbtn[0].addEventListener('click',() => {
  
  for (let k of linksRemovers) {
    k.classList.toggle('display');
    k.addEventListener('click', () => {
      k.parentElement.remove();
    });
  }
  footbtn[0].classList.toggle('click');
}
);
