import throttle from 'lodash.throttle';

import '../css/03-feedback.css';

import '../css/common.css';

const allForm = document.querySelector('.feedback-form');

const textarea = document.querySelector('.feedback-form textarea');

const input = document.querySelector('input');
// console.log(input);

const STORAGE_KEY = 'feedback-form-state';

const feedbackFormData = {};

textareaInputMessage();

allForm.addEventListener('submit', formSubmit);

allForm.addEventListener('input', throttle(onFormInput, 500));

// textarea.addEventListener('input', throttle(onFormInput, 500));

function formSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);

  console.log(feedbackFormData);
}

function onFormInput(e) {
  feedbackFormData[e.target.name] = e.target.value;

  const data = JSON.stringify(feedbackFormData);

  localStorage.setItem(STORAGE_KEY, data);

  //   console.log(data);
}

function textareaInputMessage() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData === null) {
    return;
  }

  textarea.value = savedData['message'];
  input.value = savedData['email'];
}
