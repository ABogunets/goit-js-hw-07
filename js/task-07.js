// TODO TASK-7
// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
//  і змінює інлайн - стиль span#text, оновлюючи властивість font - size.В результаті,
//   перетягуючи повзунок,
//   буде змінюватися розмір тексту.

const inputRef = document.getElementById('font-size-control');
const textRef = document.getElementById('text');

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
  const barRangeSize = event.currentTarget.value;
  textRef.style.fontSize = `${barRangeSize}px`;
}

