import { addTaskData } from './taskData.mjs';

const taskContainer = document.querySelector('.tasks');
const input = document.querySelector('.form__input');

export default function () {
  const id = Date.now();
  const html = `
        <li class="task task--unchecked" data-id="${id}" >
          <div class="unchecked-circle task__state">
            &nbsp;
          </div>
          <p class="task__title">${input.value}</p>
          <img
            src="./assets/images/icon-cross.svg"
            alt="delete the task"
            class="task__delete"
          />
        </li>
  `;
  taskContainer.insertAdjacentHTML('beforeend', html);

  // Add to task Data
  addTaskData(input.value, false, id);

  // Clear input
  input.value = '';
  input.blur();
}
