const inputPhone = document.getElementById('phone');
const inputName = document.getElementById('name');
const callbackForm = document.getElementById('callbackForm');

new Inputmask('+7 (999) 999-99-99').mask(inputPhone);

callbackForm.addEventListener('submit', event => {
  event.preventDefault();
  const phoneErrorContainer = inputPhone.parentElement.firstElementChild;
  const nameErrorContainer = inputName.parentElement.firstElementChild;
  const phoneLength = inputPhone.inputmask.unmaskedvalue().length;
  const nameLength = inputName.value.length;
  console.log(nameLength)
  if(phoneLength < 10) {
    inputPhone.style = 'border-color: red';
    phoneErrorContainer.textContent = phoneLength === 0 ? 'Введите номер телефона' : 'Номер введен не полностью';
  } else {
    inputPhone.style = 'border-color: black';
    phoneErrorContainer.textContent = '';
  }

  if(nameLength < 3) {
    inputName.style = 'border-color: red';
    nameErrorContainer.textContent = nameLength === 0 ? 'Введите имя' : 'Имя слишком короткое';
  } else {
    inputName.style = 'border-color: black';
    nameErrorContainer.textContent = '';
  }
});

inputPhone.addEventListener('input', event => event.currentTarget.style.borderColor = 'black');
inputName.addEventListener('input', event => event.currentTarget.style.borderColor = 'black');
