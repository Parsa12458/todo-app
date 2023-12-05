import setItemsLeft from './setItemsLeft.mjs';

export let tasks = [];

const setToLocalStorage = function () {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export function addTaskData(title, completed, id) {
  const task = { title, completed, id };
  tasks.push(task);
  setToLocalStorage();
  console.log('ADD: ', tasks);
}

export function renderTaskData() {
  const taskContainer = document.querySelector('.tasks');

  const tasksString = localStorage.getItem('tasks');
  if (!tasksString) return;

  tasks = JSON.parse(tasksString);

  tasks.forEach(task => {
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
    console.log('RENDER: ', tasks);
  });
}

export function checkTaskData(id) {
  const task = tasks.find(task => task.id === +id);
  task.completed = !task.completed;
  console.log('CHECK OR UNCHECK: ', tasks);
  setToLocalStorage();
  setItemsLeft();
}

export function deleteTaskData(id) {
  const index = tasks.findIndex(task => task.id === +id);

  index !== -1 && tasks.splice(index, 1);
  console.log('AFTER DELETE: ', tasks);

  setToLocalStorage();
}
