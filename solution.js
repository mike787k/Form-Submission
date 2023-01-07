window.onload = () => {
  // Code your solution here, feel free to modify to your liking...

  /*
  * Hint: This problem is focused around the form submission event.
  *       You'd probably want a reference to the form and assign an
  *       event listener for the 'submit' event.
  *
  *       You would then receive the submitted input values and validate them in the
  *       callback function that you define.
  * */

  const form = document.getElementById('form-container');
  const firstName = document.getElementById("fname");
  const lastName = document.getElementById("lname");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default submission behaviour to prevent page from refreshing.

    // Do stuff based input values in the event "e"

    // Lastly, you'd want a reference to all the error <div>'s and assign the proper
    // error message(s) to the right divs.

    // const errorNodes = ...? Will need to access the right node.
    //                         i.e errorNodes[1].innerText = "First Name Error"
    validateFNAME();
    validateLNAME();
    validateEMAIL(); 
    validatePHONE();

  });

  function errorMess(e, mess){
      const elementInput = e.parentElement;
      const displayforErr = elementInput.querySelector('.error-msg');
      displayforErr.innerText = mess;
      elementInput.classList.add('error-msg');

  }

  
  function validateSpecial(input){
    const specialChars = /^[A-Za-z]+$/;
    if(input.value.match(specialChars)){
      return true;
    }
    else{
      return false;
    }
  }


  function validateNum(input){
    const specialChars = /^\d{10}$/;
    if(input.value.match(specialChars)){
      return true;
    }
    else{
      return false;
    }
  }
 
  function validateEmailAdd(input){
    const specialChars = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(input.value.match(specialChars)){
      return true;
    }
    else{
      return false;
    }
  }


  function validateFNAME (){
      const firstNameVal = firstName.value.trim();

      if(firstNameVal === "" || firstNameVal == null){
        errorMess(firstName, "Invalid!");
      }
      else if(!validateSpecial(firstName) == true){
        errorMess(firstName, "Invalid!");
      }
      else{
        errorMess(firstName," ")
      }
  }

  
  function validateLNAME () {
      const lastNameVal = lastName.value.trim();

      if(lastNameVal === "" || lastNameVal == null){
        errorMess(lastName, "Invalid!");
      }
      else if(!validateSpecial(lastName) == true){
        errorMess(lastName, "Invalid!");
      }
      else{
        errorMess(lastName," ")
      }
  }

  function validateEMAIL(){
      const emailVal = emailInput.value.trim();

      if(emailVal === ""|| emailVal == null ){
        errorMess(emailInput, "Invalid!");
      }
      else if (!validateEmailAdd(emailInput) == true){
        errorMess(emailInput, "Invalid!");
      }

      else{
        errorMess(emailInput," ")
      }
  }

  function validatePHONE(){
  
      const phoneVal = phoneInput.value.trim();

      if(phoneVal === ""||phoneVal == null){
        errorMess(phoneInput, "Invalid!");
      }

      else if (!validateNum(phoneInput) == true){
        errorMess(phoneInput, "Invalid!");
      }

      else{
        errorMess(phoneInput," ")
      }

  }

};