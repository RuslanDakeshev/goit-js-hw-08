// import throttle from 'lodash.throttle';

// // const throttle = require("lodash.throttle");

// const form = document.querySelector('.feedback-form');
// const textArea = document.querySelector('.feedback-form textarea');
// const inputEmail = document.querySelector('.feedback-form input');
// const formData = {};

// form.addEventListener('submit', onFormSubmit);
// textArea.addEventListener('input', throttle(onTextAreaInput, 500));
// inputEmail.addEventListener('input', throttle(onTextAreaInput, 500));
// form.addEventListener('input', event => {
//   // console.log(event.target.name);
//   // console.log(event.target.value);

//   formData[event.target.name] = event.target.value;

//   localStorage.setItem('feedback-form-state', JSON.stringify(formData));
// });

// // inputEmail.addEventListener('input', event => {
// //   console.log(event.target.name);
// //   console.log(event.target.value);
// // });

// const STORAGE_KEY = 'feedback-msg';
// const STORAGE_EMAIL = 'feedback-email';

// populateTextarea();

// function onFormSubmit(event) {
//   event.preventDefault();
//   console.log('Отправка формы');

//   event.currentTarget.reset();

//   //   localStorage.removeItem(STORAGE_KEY);
//   //   localStorage.removeItem(STORAGE_EMAIL);
//   localStorage.removeItem('feedback-form-state');
// }

// function onTextAreaInput(event) {
//   const message = event.target.value;

//   localStorage.setItem('feedback-form-state', message);
// }

// // function onTextAreaInputEmail(event) {
// //   const message = event.target.value;

// //   localStorage.setItem(STORAGE_EMAIL, message);
// // }

// function populateTextarea() {
//   const saveMessage = localStorage.getItem(STORAGE_KEY);
//   const saveEmail = localStorage.getItem(STORAGE_EMAIL);
//   if ((saveMessage, saveEmail)) {
//     console.log(saveMessage, saveEmail);
//   }

//   textArea.value = saveMessage;
//   inputEmail.value = saveEmail;
// }

import throttle from 'lodash.throttle';

// const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const textArea = document.querySelector('.feedback-form textarea');
const inputEmail = document.querySelector('.feedback-form input');
const formData = {};

form.addEventListener('submit', onFormSubmit);
textArea.addEventListener('input', throttle(onTextAreaInput, 500));
inputEmail.addEventListener('input', throttle(onTextAreaInput, 500));
form.addEventListener('input', event => {
  // console.log(event.target.name);
  // console.log(event.target.value);

  formData[event.target.name] = event.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

// inputEmail.addEventListener('input', event => {
//   console.log(event.target.name);
//   console.log(event.target.value);
// });

const STORAGE_KEY = 'feedback-msg';
const STORAGE_EMAIL = 'feedback-email';

populateTextarea();

function onFormSubmit(event) {
  event.preventDefault();
  console.log('Отправка формы');

  event.currentTarget.reset();
  const restoredSession = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  console.log(restoredSession);

  //   localStorage.removeItem(STORAGE_KEY);
  //   localStorage.removeItem(STORAGE_EMAIL);
  localStorage.removeItem('feedback-form-state');
}

function onTextAreaInput(event) {
  const message = event.target.value;

  localStorage.setItem('feedback-form-state', message);
}

// function onTextAreaInputEmail(event) {
//   const message = event.target.value;

//   localStorage.setItem(STORAGE_EMAIL, message);
// }

function populateTextarea() {
  const saveMessage = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(saveMessage);

  if (saveMessage) {
    console.log(saveMessage);
  }

  textArea.value = saveMessage.message;
  inputEmail.value = saveMessage.email;
}

// import throttle from 'lodash.throttle';

// // const throttle = require("lodash.throttle");

// const form = document.querySelector('.feedback-form');
// const textArea = document.querySelector('.feedback-form textarea');
// const inputEmail = document.querySelector('.feedback-form input');
// const formData = {};

// form.addEventListener('submit', onFormSubmit);
// textArea.addEventListener('input', throttle(onTextAreaInput, 500));
// inputEmail.addEventListener('input', throttle(onTextAreaInputEmail, 500));
// form.addEventListener('input', event => {
//   // console.log(event.target.name);
//   // console.log(event.target.value);

//   formData[event.target.name] = event.target.value;

//   localStorage.setItem('feedback-form-state', JSON.stringify(formData));
// });

// // inputEmail.addEventListener('input', event => {
// //   console.log(event.target.name);
// //   console.log(event.target.value);
// // });

// const STORAGE_KEY = 'feedback-msg';
// const STORAGE_EMAIL = 'feedback-email';

// populateTextarea();

// function onFormSubmit(event) {
//   event.preventDefault();
//   console.log('Отправка формы');

//   event.currentTarget.reset();

//   localStorage.removeItem(STORAGE_KEY);
//   localStorage.removeItem(STORAGE_EMAIL);
//   localStorage.removeItem('feedback-form-state');
// }

// function onTextAreaInput(event) {
//   const message = event.target.value;

//   localStorage.setItem(STORAGE_KEY, message);
// }

// function onTextAreaInputEmail(event) {
//   const message = event.target.value;

//   localStorage.setItem(STORAGE_EMAIL, message);
// }

// function populateTextarea() {
//   const saveMessage = localStorage.getItem(STORAGE_KEY);
//   const saveEmail = localStorage.getItem(STORAGE_EMAIL);
//   if ((saveMessage, saveEmail)) {
//     console.log(saveMessage, saveEmail);
//   }

//   textArea.value = saveMessage;
//   inputEmail.value = saveEmail;
// }
