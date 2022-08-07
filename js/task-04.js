/*
Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
Обновляй интерфейс новым значением переменной counterValue.
*/

const decrementButtonEl = document.querySelector('[data-action=decrement]'); const incrementButtonEl = document.querySelector('[data-action=increment]');
const valueButtonEl = document.querySelector('#value');


// создали переменную с текущим значением
let counterValue = 0;
// клик минус единица
decrementButtonEl.addEventListener('click', () => {
  counterValue -= 1;
  valueButtonEl.textContent = counterValue;
});
// клик прибавить единицу
incrementButtonEl.addEventListener('click', () => {
  counterValue += 1;
  valueButtonEl.textContent = counterValue;
});