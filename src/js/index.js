/* Here goes your JS code */
const mainSection = document.querySelector('.main');
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
  //delete error msg(<p class="p--error">) if exists
  if (loginForm.contains(loginForm.querySelector(".p--error"))) {
    loginForm.querySelector(".p--error").remove();
  }
  //get data from the <form>
  let form = new FormData(event.target);
  let userEmail = form.get("email");
  let userTerms = form.get("terms");
  let userPassword = form.get("pass");
  //check if email is valid and if user agrees to terms and conditions and if password has at least 5 characters
  if(validateEmail(userEmail) && userTerms==='yes' && userPassword.length >=5){
    setTimeout(function(){
      //hide popup div
      popupDiv.classList.remove('popup--active');
      //display "Thank you" msg & remove "Click me" text
      let heading = document.createElement("H1");
      let headingText = document.createTextNode("Thank you!");
      heading.appendChild(headingText);
      heading.classList.add("main__heading");
      mainSection.innerHTML="";
      mainSection.appendChild(heading);
    }, 3000);
  }else{
    //show error msg if there is something wrong with the form
    let errorElem = document.createElement("P");
    let errorMsg = document.createTextNode("Please make sure that all values in the form are correct. Password has to have 5 characters or more");
    errorElem.appendChild(errorMsg);
    errorElem.classList.add("p--error");
    loginForm.appendChild(errorElem);
  }
}

//if string is an email returns true
function validateEmail(email){
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
