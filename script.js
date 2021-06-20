
// Verificação do nome, remover ' ' sequidos

// trim validation

let password = document.getElementById('password');
let passwordRepeat = document.getElementById('passwordRepeat');
let form = document.getElementById('form');

function comparePassword(password, passwordRepeat) {
  console.log('psw', password);
  console.log('pswR', passwordRepeat);
  if(password !== passwordRepeat) {

  }
}

function formSubmit(event) {
  event.preventDefault();
  comparePassword(password, passwordRepeat);
}

form.addEventListener('submit', formSubmit);