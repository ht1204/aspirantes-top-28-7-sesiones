let taskInput = document.getElementById('task-input');
let taskList = document.getElementById('task-list');
let tasks = [];

function handleSubmit() {
  if (!taskInput.value) {
    alert('Por favor, ingrese una tarea');
    return;
  }

  const task = {
    id: tasks.length + 1,
    title: taskInput.value,
    completed: false,
  };

  tasks.push(task);
  taskInput.value = '';

  let taskElement = document.createElement('li');
  taskElement.innerHTML = task.title;
  taskElement.setAttribute('data-id', task.id);

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.onclick = function () {
    const taskId = parseInt(taskElement.getAttribute('data-id'));
    const taskIndex = tasks.findIndex(function (task) {
      return task.id === taskId;
    });
    tasks[taskIndex].completed = this.checked;
    taskElement.classList.toggle('checked', this.checked);
  };

  taskElement.appendChild(checkbox);

  taskList.appendChild(taskElement);
}

function handleDelete() {
  tasks = tasks.filter(function (task) {
    return !task.completed;
  });
  const doneTaskElements = taskList.querySelectorAll('.checked');

  for (let i = 0; i < doneTaskElements.length; i++) {
    const doneTaskElement = doneTaskElements[i];
    const taskId = parseInt(doneTaskElement.getAttribute('data-id'));
    if (taskId) taskList.removeChild(doneTaskElement);
  }
}
