/*
Напиши скрипт который:

* Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
* Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента(тега < h2 >) и количество элементов в категории(всех вложенных в него < li >).
*/

const itemsEl = document.querySelectorAll('li.item');
console.log('Кількість категорій -> ', itemsEl.length);

itemsEl.forEach((item) => {
  const itemTitle = item.querySelector('.item > h2');
  console.log('Категорія -> ', itemTitle.textContent);
  const itemLength = item.querySelectorAll('.item > ul > li');
  console.log('Елементи -> ', itemLength.length);  
});

