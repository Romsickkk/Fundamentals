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

//            ================== setTimeout==================
// let x = 0;
// function xUp() {
//   x++;
// }
// const timerID = setInterval(function () {
//   xUp();
//   console.log(`Таймер сработал ${x} раз`);
// }, 1);
// clearInterval(timerID);

// ======== setInterval + setTimeOut =======
// const timerID = setInterval(function () {
//   console.log("SetInterval Worked!");
// }, 100);

// setTimeout(() => {
//   clearInterval(timerID);
// }, 1000);

// //         ================= Practis ==============
// const counterNum = document.querySelector("#counter");
// const startBtn = document.querySelector("#start");
// const pauseBtn = document.querySelector("#pause");
// const resetBtn = document.querySelector("#reset");
// pauseBtn.setAttribute("disabled", "");
// resetBtn.setAttribute("disabled", "");
// let x = 0;

// startBtn.addEventListener("click", () => {
//   timerID = setInterval(function () {
//     counterNum.textContent = `${x++}`;
//   }, 1000);
//   startBtn.setAttribute("disabled", "");
//   pauseBtn.removeAttribute("disabled");
//   resetBtn.removeAttribute("disabled");
// });

// pauseBtn.addEventListener("click", () => {
//   clearInterval(timerID);
//   startBtn.removeAttribute("disabled");
// });

// resetBtn.addEventListener("click", () => {
//   x = 0;
//   counterNum.textContent = x;
//   clearInterval(timerID);
//   startBtn.removeAttribute("disabled");
// });

// ===============Callback. callback hell ==================

// setTimeout(() => {
//   console.log("Step 1");
//   setTimeout(() => {
//     console.log("Step 2");
//     setTimeout(() => {
//       console.log("Step 3");
//     }, 1000);
//   }, 1500);
// }, 2000);

function chackRooms(success, failed) {
  setTimeout(() => {
    console.log("Проверяем номера в ателе...");
    const availableRooms = true;
    if (availableRooms) {
      let message = "Номера есть";
      success(message);
    } else {
      let message = "Номера закончились";
      failed(message);
    }
  }, 1000);
}

function checkTickets(message, success, failed) {
  setTimeout(function () {
    console.log("----- function checkTickets -----");
    console.log("Ответ на предыдущем шаге", message);
    console.log("Проверяем авиабилеты...");
    const availableTuckets = true;
    if (availableTuckets) {
      let message = "Билеты есть";
      success(message);
    } else {
      let message = "Билеты закончились";
      failed(message);
    }
  }, 500);
}

chackRooms(
  function (messageFromCheckRooms) {
    checkTickets(
      messageFromCheckRooms,
      function (messageFromCheckRooms) {
        submitVacation(messageFromCheckRooms);
      },
      function (messageFromCheckRooms) {
        submitVacation(messageFromCheckRooms);
      }
    );
  },
  function (messageFromCheckRooms) {
    cancelVacation(messageFromCheckRooms);
  }
);

function cancelVacation(message) {
  console.log("----- camcelVacation ------");
  console.log("Ответ на предыдущем шаге", message);
  console.log("Отпуск отменяется :(");
}

function submitVacation(message) {
  console.log("----- submitVacation ----");
  console.log("Ответ на предыдущем шаге", message);
  console.log("Едем в отпуск :) ");
}

function x(callFunction) {
  console.log("running x");
  console.log("calling callFuction");
  callFunction();
  console.log("callded function from x");
}

callFunction();
