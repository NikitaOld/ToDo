const taskList = [];
const taskAddTaskForm = document.querySelector('.todo__add-task-from');
const todo__input = document.querySelector('.todo__input');

function addTask() {
    let inputValue = todo__input.value;
    insertTaskOnHTML(inputValue);
    taskList.push(inputValue);
}

function deleteTask(task){
    task.parentElement.remove();
}

function insertTaskOnHTML(text){
    taskAddTaskForm.insertAdjacentHTML('afterend',
        '<div class="todo__task-form">\n' +
        '        <input class="todo__input-radio" type="radio">\n' +
        `        <p class="todo__task-text">${text}</p>\n` +
        '        <span onclick="deleteTask(this)" class="close-button" >\n' +
        '    </div>');
}
