function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
/*
Напиши скрипт создания и очистки коллекции элементов.
Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

Размеры самого первого <div> - 30px на 30px.
Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
*/

const refec = { // находим эдементы
  inputControl: document.querySelector('input'), // находим input
  buttonCreate: document.querySelector('[data-create]'), //находим btn Сreate
  buttonDestroy: document.querySelector('[data-destroy]'), // находим btn Destroy
  boxColor: document.querySelector('#boxes'), // находим Div
};

// функция генерации дивов
function createBoxes(amount) {
  // начальные значения
  let width = 30;
  let heigth = 30;
  // генерируем див
  for (let i = 0; i < amount; i += 1) {
    // записываем в память новый див
    const newColorDiv = document.createElement('div');
    // присваеваем класс
    newColorDiv.classList.add('boxes');
    // рахмер нового дива
    newColorDiv.style.width = width + 'px';
    newColorDiv.style.height = heigth + 'px';
    width += 10;
    heigth += 10;
    // присваеваем диву случаный цвет
    newColorDiv.style.background = getRandomHexColor();
    // добавляем новые дивы
    refec.boxColor.append(newColorDiv);
  };
};

// добавляев новые дивы по колличеству при наэатии кнопки Create
refec.buttonCreate.addEventListener('click', (event) => {
  const amount = Number(refec.inputControl.value);
  createBoxes(amount);
});
// удаляем дивы
function destroyBoxes() {
  refec.boxColor.innerHTML = '';
};
refec.buttonDestroy.addEventListener('click', () => {
  destroyBoxes();
});