const taskList = [];
const taskAddTaskForm = document.querySelector('.todo__add-task-from');
const todo__input = document.querySelector('.todo__input');

function submitTask(){
    let inputValue = todo__input.value;
    addNewTask(inputValue);
    insertTaskOnHTML(inputValue);
}

function addNewTask(task) {
    taskList.push(task);
}

function deleteTask(task){

}

function insertTaskOnHTML(text){
    taskAddTaskForm.insertAdjacentHTML('afterend',
        '<form action="" class="todo__task-form">\n' +
        '        <input class="todo__input-radio" type="radio">\n' +
        `        <p class="todo__task-text">${text}</p>\n` +
        '        <span class="close-button"></span>\n' +
        '    </form>');
}
