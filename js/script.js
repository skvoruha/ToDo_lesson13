// перменная с формой
const todoControl = document.querySelector('.todo-control')
// перменная инпута
const headerInput = document.querySelector('.header-input')
// переенная со списоком дел
const todoList = document.querySelector('.todo-list')
// переенная со списоком выполненых дел
const todoCompleted = document.querySelector('.todo-completed')
// переменная с кнопкой удаления
const todoRemove = document.querySelector('.todo-remove')
// создаём объект с
const toDoData = []

// функция render будет выводить массив toDoData
const render = function () {
  // ЧТОБЫ СПИСКИ НЕ ВЫВОДИЛИ СОХРАНЕНЫЕ ДАННЫЕ
  // ИХ НУЖНО ОПУСТОШИТЬ
  todoList.innerHTML = ''
  todoCompleted.innerHTML = ''

  // перебор массива
  toDoData.forEach(function (item) {
    // console.log(item);
    const li = document.createElement('li')
    li.classList.add('todo-item')

    li.innerHTML = ' <span class="text-todo">' + item.text + '</span>' +
      ' <div class="todo-buttons">' +
      '<button class="todo-remove"></button>'+
      '<button class="todo-complete"></button>'+
      ' </div>'

    // ЕСЛИ item.completed true то записываем в завершенные дела
    if (item.completed) {
      todoCompleted.append(li)
    // ЕСЛИ item.completed false то записываем в  дела которые нужно сдеать
    } else {
      todoList.append(li)
    }
      // записываем все li в список todoList с помощью append
    // нахаодим конпку в li и вешаем на неё обработчик событий
    li.querySelector('.todo-complete').addEventListener('click', function(){
      // при нажати галочки нам нужно менять условие на противоположное
      item.completed = !item.completed
      render()
    })
    // находим через li кноку удалтт через querySelector .todo-remove

    li.querySelector('.todo-remove').addEventListener('click',function(event){

      // 4-13
      toDoData.forEach(function(item,index){
        console.log(item.text);
        if (event.path[2].textContent.trim() == item.text.trim()) {
          delete toDoData[index]
        }
      })

      render()
    })

  });
}

todoControl.addEventListener('submit', function(event){
  // чтобы оставноить отправку нужно использовать  preventDefault
  event.preventDefault()
  // 3-13 чтобы пустые дела не добавлялись
  if (headerInput.value !== '') {
    // создаём новый объект
    const newToDo = {
      text: headerInput.value,
      completed: false
    }
    // добавляем объёет в массив
    toDoData.push(newToDo)
    // очищаем value
    headerInput.value = ''
  } else {
    alert(" Вы хотитие добавить пустую задачу")
  }


  render()
})

