import throttle from 'lodash.throttle';

import '../css/03-feedback.css';

import '../css/common.css';

const allForm = document.querySelector('.feedback-form');

const textarea = document.querySelector('.feedback-form textarea');

const input = document.querySelector('input');
// console.log(input);

const STORAGE_KEY = 'feedback-form-state';

let feedbackFormData = {};

allForm.addEventListener('submit', formSubmit);

allForm.addEventListener('input', throttle(onFormInput, 500));

textareaInputMessage();

// textarea.addEventListener('input', throttle(onFormInput, 500));

function formSubmit(e) {
  e.preventDefault();

  console.log(feedbackFormData);

  e.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);

  feedbackFormData = {};
}

function onFormInput(e) {
  feedbackFormData[e.target.name] = e.target.value;

  const data = JSON.stringify(feedbackFormData);

  localStorage.setItem(STORAGE_KEY, data);

  //   console.log(data);
}

function textareaInputMessage() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  // if (savedData === null) {
  //   return;
  // }
  // textarea.value = savedData['message'];
  // input.value = savedData['email'];

  if (savedData.email) {
    input.value = savedData.email;
    feedbackFormData.email = savedData.email;
  }

  if (savedData.message) {
    textarea.value = savedData.message;
    feedbackFormData.message = savedData.message;
  }
}
