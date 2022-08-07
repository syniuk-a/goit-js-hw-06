/*
Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output.
Если инпут пустой, в спане должна отображаться строка "Anonymous".
*/

const refc = {
  input: document.querySelector('input#name-input'),
  nameLabel: document.querySelector('span#name-output'),
};

refc.input.addEventListener('input', (event) => {
  refc.nameLabel.textContent = event.currentTarget.value;
  console.log(refc.nameLabel);  
  if (refc.input.value === '') refc.nameLabel.textContent = `Anonymous`;
});