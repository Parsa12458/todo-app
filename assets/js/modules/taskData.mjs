export let tasks = [];
export function addTaskData(title, completed) {
  tasks.push({ title, completed });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function renderTaskData() {
  const taskContainer = document.querySelector('.tasks');

  const tasksString = localStorage.getItem('tasks');
  if (!tasksString) return;

  tasks = JSON.parse(tasksString);
  console.log(tasks);

  tasks.forEach(task => {
    const html = `
        <li class="task task--${task.completed ? 'checked' : 'unchecked'}">
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
