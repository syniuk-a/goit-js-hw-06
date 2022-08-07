const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

/*
  Напиши скрипт, который для каждого элемента массива ingredients:

  * 1. Создаст отдельный элемент < li >.Обзательно используй метод document.createElement().
  * 3. Добавит название ингредиента как его текстовое содержимое.
  * 2. Добавит элементу класс item.
  * 4. После чего вставит все < li > за одну операцию в список ul#ingredients.
*/


const ingredientsListEl = document.querySelector('#ingredients');

const totalIngredientsListEl = [];

ingredients.forEach((item) => {
  const ingredientsItemEl = document.createElement('li');
  ingredientsItemEl.classList.add('item');
  ingredientsItemEl.textContent = item;
  totalIngredientsListEl.push(ingredientsItemEl);
});

ingredientsListEl.append(...totalIngredientsListEl);
console.log(ingredientsListEl);
