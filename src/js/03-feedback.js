const form = document.querySelector('.feedback-form');
console.log(form);

const textArea = document.querySelector('.feedback-form textarea');
console.log(textArea);

form.addEventListener('submit', onFormSubmit);
textArea.addEventListener('input', onTextAreaInput);

function onFormSubmit(event) {
  event.preventDefault();
  console.log(aaa);
}

function onTextAreaInput(event) {
  const message = event.currentTarget.value;

  localStorage.setItem('feedback-msg', message);
}
