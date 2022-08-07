function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
/*
Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

Для генерации случайного цвета используй функцию getRandomHexColor.
*/

const refec = {
  btnChangeColor: document.querySelector('button.change-color'),
  spanColor: document.querySelector('span.color'),
  bodyColor: document.querySelector('body'),
};
// console.log(refec.btnChangeColor);
// console.log(refec.spanColor);
// console.log(refec.bodyColor)

refec.btnChangeColor.addEventListener('click', onChangeColor);

function onChangeColor() {
  // вызов функции getRandomHexColor записали в randomColor
  const randomColor = getRandomHexColor();
  // просвоить цвет body
  refec.bodyColor.style.backgroundColor = randomColor;
  // запись цвета в спан
  refec.spanColor.textContent = randomColor;
};
// console.log(refec);
