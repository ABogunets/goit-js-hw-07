// TODO Task-10
// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає
// кнопку Створити, після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр
// - число.Функція створює стільки < div >, скільки вказано в amount
//  і додає їх у div#boxes.
// 1.Розміри найпершого <div> - 30px на 30px.
// 2. Кожен елемент після першого повинен бути ширшим і вищим від
//  попереднього на 10px.
// 3. Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий
//  спосіб видаляючи всі створені елементи.

const inputRef = document.querySelector('input');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const divBoxesRef = document.getElementById('boxes');


//визначення кількості боксів для коллекціі визначаеємо
//  з inputRef.value в момент обробки події createBtnRef

// слухачі кнопок Створення та Видалення
createBtnRef.addEventListener('click', () => {
  createBoxes(inputRef.value)});
destroyBtnRef.addEventListener('click', () => { destroyBoxes() });

// функція створює коллекцию боксів
function createBoxes(amount) {
  divBoxesRef.style.marginTop = "20px";
  
  const arrayOfDivs = [];

  for (let i = 0; i < amount; i += 1) {
    arrayOfDivs[i] = document.createElement('div');
    arrayOfDivs[i].style.width = 30 + i*10 + 'px';
    arrayOfDivs[i].style.height = 30 + i*10 + 'px';
    arrayOfDivs[i].style.backgroundColor = getRandomHexColor();
  }
  divBoxesRef.append(...arrayOfDivs);
}
//функція очищає коллекцію та инпут
function destroyBoxes() {
  divBoxesRef.innerHTML = '';
  inputRef.value = '';
}
//функція дає рандомний колір
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
