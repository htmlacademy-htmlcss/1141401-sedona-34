const button = document.querySelector('.hotel_search_button');
const popup = document.querySelector('.modal_container');
const popupClose = document.querySelector('.modal_close_button');

button.addEventListener('click', ()=> {
  popup.style.display = 'flex';
  popupClose.addEventListener('click', ()=> {
    popup.style.display = 'none';
  });
});