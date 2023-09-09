// 1. Переберите массив и запишите каждый элемент в консоль:
const arr = [1, 2, 3, 4, 5];

arr.forEach((el) => {
  console.log(el);
});

// 2. Умножьте каждый элемент массива на определенное значение и сохраните результат в новом массиве:
const arr = [1, 2, 3, 4, 5];
const multiplier = 2;
const newArr = [];

arr.forEach((el) => {
  newArr.push(el * multiplier);
});

console.log(newArr);

// 3. Отфильтруйте массив, чтобы удалить элементы, не соответствующие определенным критериям:
const arr = [1, 2, 3, 4, 5];
const filteredArr = [];

arr.forEach((el) => {
  if (el % 2 === 0) {
    filteredArr.push(el);
  }
});

console.log(filteredArr);

// 4. Выполните итерацию по массиву и обновите каждый элемент до нового значения:
const arr = [1, 2, 3, 4, 5];

arr.forEach((el, index, arr) => {
  arr[index] = el * 2;
});

console.log(arr);

// 5. Найдите максимальное или минимальное значение в массиве, используя forEach:
const arr = [1, 2, 3, 4, 5];
let max = arr[0];

arr.forEach((el) => {
  if (el > max) {
    max = el;
  }
});

console.log(max);

// 6. Создайте новый массив, выбрав определенные свойства объектов в существующем массиве:
const objectsArr = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const selectedProperties = [];

objectsArr.forEach((obj) => {
  selectedProperties.push({ id: obj.id });
});

console.log(selectedProperties);
