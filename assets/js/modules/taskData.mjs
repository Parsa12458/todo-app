import setItemsLeft from './setItemsLeft.mjs';

export let tasks = [];

const setToLocalStorage = function () {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export function addTaskData(title, completed, id) {
  const task = { title, completed, id };
  tasks.push(task);

  setToLocalStorage();
}

export function renderTaskData(newTasks, type) {
  if (!newTasks) return;

  const taskContainer = document.querySelector('.tasks');

  if (type === 'string') {
    tasks = JSON.parse(newTasks);
    newTasks = JSON.parse(newTasks);
  }

  taskContainer.innerHTML = '';

  newTasks.forEach(task => {
    const html = `
    <li class="task task--${
      task.completed ? 'checked' : 'unchecked'
    }" data-id="${task.id}">
          <div class="${
            task.completed ? 'checked' : 'unchecked'
          }-circle task__state">
          &nbsp;
          </div>
          <p class="task__title">${task.title}</p>
          <img
          src="./assets/images/icon-cross.svg"
          alt="delete the task"
          class="task__delete"
          />
        </li>
        `;

    taskContainer.insertAdjacentHTML('beforeend', html);
  });
}

export function checkTaskData(id) {
  const task = tasks.find(task => task.id === +id);
  task.completed = !task.completed;

  setToLocalStorage();
  setItemsLeft();
}

export function deleteTaskData(id) {
  const index = tasks.findIndex(task => task.id === +id);

  index !== -1 && tasks.splice(index, 1);

  setToLocalStorage();
}

export function deleteCompletedTaskData(completedTasks) {
  completedTasks &&
    completedTasks.forEach(completedTask => {
      const index = tasks.findIndex(task => task.id === completedTask.id);
      index !== -1 && tasks.splice(index, 1);
    });

  setToLocalStorage();
}

export function updateOrderOfTasks(e) {
  const oldIndex = e.oldIndex;
  const newIndex = e.newIndex;

  // Update tasks array
  const moved = tasks[oldIndex];
  tasks.splice(oldIndex, 1);
  tasks.splice(newIndex, 0, moved);

  // Update local storage
  setToLocalStorage();
}
