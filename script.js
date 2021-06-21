var form = document.getElementById('form');
var fullName = document.getElementById('fullName');
var email = document.getElementById('email');
var password = document.getElementById('password');
var passwordRepeat = document.getElementById('passwordRepeat');
var passwordHelp = document.getElementById('passwordHelp');
var passwordRepeatHelp = document.getElementById('passwordRepeatHelp');

function showPasswordHelp() {
  passwordHelp.classList.remove('invisible');
}

function removePasswordHelp() {
  passwordHelp.classList.add('invisible');
}

function comparePassword(password, passwordRepeat) {
  if(password.value !== passwordRepeat.value) {
    passwordRepeatHelp.classList.remove('invisible')
    return false
  } else {
    passwordRepeatHelp.classList.add('invisible')
    return true
  }
}

function checkPassword(passwordString) {
  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,14}$/g;
  let regexTest = passwordRegex.test(passwordString.value);
  if(regexTest){
    return true;
  } else {
    return false;
  }
}

function checkRepetition(passwordString) {
  let noRepeatRegex = /([\w!@#$%^&*_=+\-]{2,}).*?\1/g;
  let noRepeatTest = noRepeatRegex.test(passwordString.value);
  if(!noRepeatTest){
    passwordHelp.classList.add('invisible')
    return true;
  } else {
    passwordHelp.classList.remove('invisible')
    return false;
  }
}

function formSubmit(event) {
  let checkRepeatPassword = comparePassword(password, passwordRepeat);
  let checkPasswordSafe = checkPassword(password);
  let checkPasswordRepetition = checkRepetition(password);
  if(checkRepeatPassword && checkPasswordSafe && checkPasswordRepetition) {
    alert('Conta cadastrada com sucesso');
  } else {
    event.preventDefault();
  }
}

password.onfocus = showPasswordHelp;
password.onblur = removePasswordHelp;
form.addEventListener('submit', formSubmit);