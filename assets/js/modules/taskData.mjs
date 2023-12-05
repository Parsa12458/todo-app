export let tasks = [];

export function addTaskData(title, completed, id) {
  const task = { title, completed, id };
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
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
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
