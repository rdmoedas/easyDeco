var form = document.getElementById('form');
var fullName = document.getElementById('fullName');
var email = document.getElementById('email');
var password = document.getElementById('password');
var passwordRepeat = document.getElementById('passwordRepeat');

var passwordHelp = document.getElementById('passwordHelp');
var passwordRepeatHelp = document.getElementById('passwordRepeatHelp');

password.onfocus = showPasswordHelp;
password.onblur = removePasswordHelp;

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
    console.log('Erro')
    event.preventDefault();
  }
}

form.addEventListener('submit', formSubmit);

// <------------------->

// Botoões de teste
var fillButton = document.getElementById('fill-B');
var fillButtonDif = document.getElementById('fill-BDif');
var fillButton4 = document.getElementById('fill-B4');
var togglePasswordButton = document.getElementById('showPassword');

fillButton.onclick = preencheForm;
fillButtonDif.onclick = preencheFormDif;
fillButton4.onclick = preencheFormB4;
togglePasswordButton.onclick = showPassword;

function preencheForm() {
  fullName.value = 'Senhas Iguais';
  email.value = 'email@email.com';
  password.value = 'asd465A#';
  passwordRepeat.value = 'asd465A#';
}

function preencheFormDif() {
  fullName.value = 'Senhas Diferentes';
  email.value = 'email@email.com';
  password.value = 'asd465A#';
  passwordRepeat.value = 'vcx546B@';
}

function preencheFormB4() {
  fullName.value = 'Senhas Repetida Erro Four';
  email.value = 'email@email.com';
  password.value = 'asd465A#as';
  passwordRepeat.value = 'asd465A#as';
}

function showPassword() {
  if(password.type === 'password') {
    password.type = 'text';
    passwordRepeat.type = 'text';
  } else {
    password.type = 'password';
    passwordRepeat.type = 'password';
  }
}