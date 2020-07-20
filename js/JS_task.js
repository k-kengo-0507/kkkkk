'use strict'

function popupDisplay() {
  let popup = document.getElementById('js-popup');
  if(!popup) return;

  
  let closeBtn = document.getElementById('js-close-btn');
  let showBtn = document.getElementById('push-popup');

  closePopUp(closeBtn);
  closePopUp(showBtn);

  function closePopUp(elem) {
    if(!elem) return;
    elem.addEventListener('click', ()=> {
      popup.classList.toggle('is-show');
    });
  }
}
popupDisplay();