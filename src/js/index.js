/* Here goes your JS code */
const popupDiv = document.querySelector('.popup');
const showPopupBtn = document.getElementById('show-popup-form');
const closePopupBtn = popupDiv.querySelector('.popup__close');

//shop popup on click
showPopupBtn.addEventListener('click', function(){
  popupDiv.classList.add('popup--active');
});

//close popup when clicks 'X' button
closePopupBtn.addEventListener('click', function(){
  popupDiv.classList.remove('popup--active');
});
