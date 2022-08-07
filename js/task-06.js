/*
Напиши скрипт, который при потере фокуса на инпуте(событие blur), проверяет его содержимое на правильное количество введённых символов.

* Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
* Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.

* Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

*/
const inputText = document.querySelector('input#validation-input');
const inputTextFieldLength = Number(inputText.dataset.length);

console.log(inputText);
console.log(inputTextFieldLength);

inputText.addEventListener('blur', (event) => {
  if (event.currentTarget.value.length === inputTextFieldLength) {
    inputText.classList.add('valid')
    inputText.classList.remove('invalid')
  } else {
    inputText.classList.add('invalid')
    inputText.classList.remove('valid')
  }
}); // потерял фокус


