/* Here goes your JS code */
const popupDiv = document.querySelector('.popup');
const showPopupBtn = document.getElementById('show-popup-form');
const loginForm = popupDiv.querySelector('.popup__form');
const closePopupBtn = popupDiv.querySelector('.popup__close');

//shop popup on click
showPopupBtn.addEventListener('click', function(){
  popupDiv.classList.add('popup--active');
});

//close popup when clicks 'X' button
closePopupBtn.addEventListener('click', function(){
  popupDiv.classList.remove('popup--active');
});

loginForm.addEventListener('submit', submitForm);

function submitForm(event){
  event.preventDefault();
  //get data from the <form>
  let form = new FormData(event.target);
  let userEmail = form.get("email");
  let userTerms = form.get("terms");
  let userPassword = form.get("pass");
  //check if email is valid and if user agrees to terms and conditions and if password has at least 5 characters
  if(validateEmail(userEmail) && userTerms==='yes' && userPassword.length >=5){
    console.log("LOGED IN");
  }else{
    console.log("Invalid form");
  }
}

//if string is an email returns true
function validateEmail(email){
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
