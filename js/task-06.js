// TODO Task-6
// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), 
// перевіряє його вміст щодо правильної кількості введених символів.
//  Яка кількість символів повинна бути в інпуті, зазначається
//   в його атрибуті data - length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
//   якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid,
//   які ми вже додали у вихідні файли завдання.

const textInput = document.getElementById('validation-input');
const dataLength = Number(textInput.dataset.length);

textInput.addEventListener("blur", onInputBlur);

function onInputBlur (event) {
  const inputTextLength = event.currentTarget.value.length;

  if (inputTextLength === dataLength) {
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
  }
  else {
    textInput.classList.remove('valid');
    textInput.classList.add('invalid');
  };
};


