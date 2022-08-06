const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

/*
* 1. Напиши скрипт для создания галереи изображений по массиву данных.В HTML есть список ul.gallery.

* 2. Используй массив объектов images для создания элементов < img > вложенных в < li >.Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

* 3. Все элементы галереи должны добавляться в DOM за одну операцию вставки.
Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.
*/

const galleryListEl = document.querySelector('.gallery');
galleryListEl.style.display = 'flex';
galleryListEl.style.justifyContent = 'space-around';
galleryListEl.style.listStyleType = 'none';
const galleryItemEl = document.querySelector('li');

const generalGalleryEl = [];

images.forEach((item) => {
  const itemsEl = `<li><img src="${item.url}" alt="${item.alt}" class="gallary__item" width="400"></li>`;
  generalGalleryEl.push(itemsEl);

})
galleryListEl.insertAdjacentHTML('afterbegin', generalGalleryEl);
console.log(galleryListEl);
