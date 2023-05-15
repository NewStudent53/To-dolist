const userAnswer = document.querySelector('input');
const btn = document.querySelector('.add-task-button');
const list = document.querySelector('.todos-list');


let todos = JSON.parse(localStorage.getItem('todos')) || [];

window.addEventListener('DOMContentLoaded', showAllTodos);

function getRandomId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function addToDo(userAnswer) {
    let task = {
        id: getRandomId(),
        task: userAnswer.value,
        completed: false
    }
    todos.push(task);
}

userAnswer.addEventListener('keyup', (e) => {
    if (e.keyCode === 13 && userAnswer.value.length > 0) {
        addToDo(userAnswer);
        saveToLocalStorage();
        userAnswer.value = '';
        showAllTodos();
    }
});

btn.addEventListener('click', () => {
    if (userAnswer.value === '') {
        //---->{function$}
    } else {
        addToDo(userAnswer);
        saveToLocalStorage();
        showAllTodos();
        userAnswer.value = '';
    }
});

function showAllTodos() {
    list.innerHTML = '';
    todos.forEach((todo) => {
        list.innerHTML += `
            <li class="todo-item" data-id="${todo.id}">
                <p class="task-body">
                    ${todo.task}
                </p>
                <div class="todo-actions">
                    <button class="btn btn-error" onclick="deleteTodo('${todo.id}')">
                        <i class="bx bx-trash bx-sm"></i>
                    </button>
                </div>
            </li>
        `;
    });
}

function saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function showAlertMessage(message, type) {
//Add function to show alert===>red(bad)/green(good)
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveToLocalStorage();
    showAllTodos();
}

function clearAllTodos() {
    if(todos.length > 0) {
        todos = [];
        saveToLocalStorage();
        showAllTodos();
    }else{
    }
}

//Ask deimian about the $object import in class