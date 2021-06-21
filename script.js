
// Verificação do nome, remover ' ' sequidos

// trim validation
var fillButton = document.getElementById('fill-B');
var fillButtonDif = document.getElementById('fill-BDif');
var fillButton4 = document.getElementById('fill-B4');

var form = document.getElementById('form');
var fullName = document.getElementById('fullName');
var email = document.getElementById('email');
var password = document.getElementById('password');
var passwordRepeat = document.getElementById('passwordRepeat');

var passwordHelp = document.getElementById('passwordHelp');


password.onfocus = showPasswordHelp;

fillButton.onclick = preencheForm;
fillButtonDif.onclick = preencheFormDif;
fillButton4.onclick = preencheFormB4;

function showPasswordHelp() {
  // passwordHelp.classList.remove('invisible');
}

function preencheForm() {
  fullName.value = 'Senhas Iguais';
  email.value = 'email@email.com';
  password.value = 'asd465A#';
  passwordRepeat.value = 'asd465A#';
}

function preencheFormDif() {
  fullName.value = 'Senhas Diferentes';
  email.value = 'email@email.com';
  password.value = 'aaaaa123123A';
  passwordRepeat.value = 'vcx546B@';
}

function preencheFormB4() {
  fullName.value = 'Senhas Repetida Erro Four';
  email.value = 'email@email.com';
  password.value = 'asd465A#as';
  passwordRepeat.value = 'asd465A#as';
}

function comparePassword(password, passwordRepeat) {
  if(password.value !== passwordRepeat.value) {
    console.log('senhas diferentes')
    return false
  } else {
    console.log('senhas iguais')
    return true
  }
}

function checkPassword(passwordString) {
  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,14}$/g;
  let regexTest = passwordRegex.test(passwordString.value);
  if(regexTest){
    console.log('senha segura');
    return true;
  } else {
    console.log('senha ruim');
    return false;
  }
}

function checkEmail(email) {
  let emailRegex = new RegExp();
  let emailTest = emailRegex.test(email.value);

}

function checkRepetition(passwordString) {
  let noRepeatRegex = /([\w!@#$%^&*_=+\-]{2,}).*?\1/g;
  // let noRepeatRegex = new RegExp("asd465A#as");
  // console.log('regex', noRepeatRegex);
  let noRepeatTest = noRepeatRegex.test(passwordString.value);
  // console.log('password', passwordString.value);
  // console.log('regex test', noRepeatTest);
  if(!noRepeatTest){
    console.log('password obedece regra 4', true)
    return true;
  } else {
    console.log('não obedeceu a regra 4', false);
    return false;
  }
}

function formSubmit(event) {
  event.preventDefault();
  let temp = comparePassword(password, passwordRepeat);
  let tempCheck = checkPassword(password);
  let tempCheck3 = checkRepetition(password);
  if(temp && tempCheck && tempCheck3) {
    console.log('Valido')
    // this.submit()
  } else {
    console.log('Erro')
  }
}

form.addEventListener('submit', formSubmit);