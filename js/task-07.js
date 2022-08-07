/*
Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.
*/

const refce = {
  inputFontSizeControl: document.querySelector('input#font-size-control'),
  inputTextSize: document.querySelector('span#text'),
}

refce.inputFontSizeControl.addEventListener('input', (event) => {
  refce.inputTextSize.style.fontSize = event.currentTarget.value + 'px';
}); 