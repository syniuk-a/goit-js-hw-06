const itemsEl = document.querySelectorAll('li.item');
console.log('Кількість категорій -> ', itemsEl.length);

itemsEl.forEach((item) => {
  const itemTitle = item.querySelector('.item > h2');
  console.log('Категорія -> ', itemTitle.textContent);
  const itemLength = item.querySelectorAll('.item > ul > li');
  console.log('Елементи -> ', itemLength.length);  
});