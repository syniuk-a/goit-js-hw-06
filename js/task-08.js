/*
Напиши скрипт управления формой логина.

* Обработка отправки формы form.login-form должна быть по событию submit.
* При отправке формы страница не должна перезагружаться.
* Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
* Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
* Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.
*/

const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) { // перезагрузка страницы
  event.preventDefault();


const formElements = event.currentTarget.elements; // ссылка на элементы формы

const email = formElements.email.value;
const password = formElements.password.value;
// console.log('email, password => ', email, password);

if (email === '' || password === '') {
  return alert('Все поля должны быть заполнены')
};

const onFormResult = {};
  const formData = new FormData(form);
  // console.log(formData);
formData.forEach((value, name) => {
  onFormResult[name] = value;
    // console.log("onFormSubmit -> name", name);
    // console.log("onFormSubmit -> value", value);
});
  console.log(onFormResult);
  form.reset(); // русет после ввода
};