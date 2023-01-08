const todo = document.querySelector('#todo'),
      todoForm = document.querySelector('#todo-form'),
      todoInput = document.querySelector('#todo-input'),
      todoTaskItems = document.querySelectorAll('.todo__task-item');

function deleteTask(event){
    const item = event.target.closest('.todo__task-item');
    item.remove();
}

function bindEvents(todoItem) {
    const deleteBtn = todoItem.querySelector('.close-button');
    deleteBtn.addEventListener('click', deleteTask);
}

function createElement(tag, props, ...children) { // '...' - остаточные параметры
    const element = document.createElement(tag);

    Object.keys(props).forEach( key => {
        element[key] = props[key];
    })

    if (children.length > 0) {
        children.forEach(child => {
            if (typeof child === "string") {
                child = document.createTextNode(child);
            }

            element.append(child);
        });
    }

    return element;
}

function createToDoItem(text) {
    const todoInputRadio = createElement('input', { type: 'radio', className: 'todo__input-radio' }),
          todoTaskText = createElement('textarea', { className: 'todo__task-text' }, text),
          closeButton = createElement('button', { className: 'close-button' }),
          todoTaskItem = createElement('div', { className: 'todo__task-item' }, todoInputRadio, todoTaskText, closeButton);

    bindEvents(todoTaskItem);

    return todoTaskItem;
}

function addToDoItem(event) {
    event.preventDefault(); // изменение сценария по умолчанию (форма не отправляется на сервер)
    if (todoInput.value !== ''){
        const taskItem = createToDoItem(todoInput.value);
        todo.append(taskItem);
    } else alert('Нельзя ввести пустуя строку!')
}

function main(){
    todoForm.addEventListener("submit", addToDoItem);
    todoTaskItems.forEach(item => {
        bindEvents(item);
    })
}

main();
