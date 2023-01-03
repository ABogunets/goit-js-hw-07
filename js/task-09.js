// TODO Task-9
// Напиши скрипт, який змінює кольори фону елемента < body >
//   через інлайн - стиль по кліку на button.change - color і 
//   виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const bodyRef = document.querySelector('body');
const buttonRef = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

buttonRef.addEventListener('click', onButtonClick);

function onButtonClick(event) {
  const currentBackgroundColor = getRandomHexColor();
  bodyRef.style.backgroundColor = currentBackgroundColor;
  spanColor.textContent = currentBackgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
