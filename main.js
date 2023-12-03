/* • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • JavaScript необходимые основы для начинающих • • • • •
• • • • • • • • • • • • практический курс • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • */
// ================== 0. Настройка окружения ===============
/*
- Установка редактора
- Установка плагина liveServer
- Моя тема Ayu
- Создание проекта
*/

// =================== 1. Подключение ===================
/*
- index.html
- файл main.js
- тег <script src></script>
- Запуск в liveServer
- команда console.log для вывода информации в консоль браузера
- комментарии
*/

// document.querySelector("h2").classList.add("red");
// document.querySelector(".heding-3").classList.add("green");
// const heading = document.querySelectorAll("h2");
// console.log(heading);
// for (let item of heading) {
//   item.classList.add("color-blue");
// }

// // const paragraph = document.querySelectorAll("p");
// // for (const p of paragraph) {
// //   p.classList.add("green");
// //   p.classList.add("green-text");
// // }
// heading.classList.add("green");
// heading.classList.toggle("green");

// const img = document.querySelector("#logo");

// console.log(img.getAttribute("src"));

// img.setAttribute("src", "./img/php.png");
// img.setAttribute("width", "200");
// img.src = "./img/js.png";

// const buttom = document.querySelector("#button");
// buttom.setAttribute("value", "najmi");

// const button = document.querySelector("#button");
// const img = document.querySelector("#logo");
// button.value = "udali";

// button.addEventListener("click", function () {
//   if (img.getAttribute("src") == "./img/js.png") {
//     img.setAttribute("src", "");
//     button.value = "sozdai";
//     console.log("click", img);
//   } else {
//     img.setAttribute("src", "./img/js.png");
//     console.log("click 2");
//     button.value = "udali2";
//   }
//   console.log();
// });

// const inputText = document.querySelector("#input-text");
// const textBlock = document.querySelector("#text-block");

// inputText.addEventListener("input", inputHandler);

// inputText.addEventListener("input", function () {
//   console.log(inputText.value);
//   textBlock.innerText = inputText.value;
// });

// function inputHandler() {
//   console.log(inputText.value);
//   textBlock.innerText = inputText.value;
// }

// var newHtml =
//   "\
// <th>\
//   <td>New Name</td>\
//   <td>New Name</td>\
//   <td>New Name</td>\
// </th>";

// document.getElementById("myTable").append(newHtml);
///
///
///
///
// ////////////              ======= СОЗДАНИЕ И УДАЛЕНИЕ НОВЫХ ЕЛЕМЕНТВО В HTML =======
// const todoList = document.querySelector("#todo-list");
// const todoForm = document.querySelector("#todo-form");
// const todoInput = document.querySelector("#todo-input");

// todoForm.addEventListener("submit", formHandler);

// function formHandler(event) {
//   event.preventDefault();
//   const taskText = todoInput.value;

//   // Create tag li
//   // const li = `<li>${taskText}</li>`;
//   // console.log(li);

//   //Добавляем разметку на страницу
//   // todoList.insertAdjacentHTML("beforeend", li);

//   //Создаем тег li с помащю создания элемента
//   const newTask = document.createElement("li");
//   newTask.innerText = taskText;

//   // Создаем кнопку удалить
//   const delButton = document.createElement("button");
//   delButton.setAttribute("role", "button");
//   delButton.innerText = "Удалить";
//   newTask.append(delButton);

//   // Удаляем событие по клику
//   delButton.addEventListener("click", function delTask() {
//     this.closest("li").remove();
//   });

//   //Создаен событие по клику
//   taskText != "" ? todoList.append(newTask) : console.log("No tex in input");

//   //Чистим поле ввода
//   todoInput.value = "";

//   //Фокус на поле ввода
//   todoInput.focus();
// }

//             ============ setTimeout==================
// let x = 0;
// function xUp() {
//   x++;
// }
// const timerID = setInterval(function () {
//   xUp();
//   console.log(`Таймер сработал ${x} раз`);
// }, 1);
// clearInterval(timerID);

// ======== setTimeOut =======
if (condition) {
}
