import setItemsLeft from './setItemsLeft.mjs';
import { deleteTaskData } from './taskData.mjs';

export default function (e) {
  if (!e.target.classList.contains('task__delete')) return;

  const task = e.target.closest('.task');
  const id = task.dataset.id;
  console.log(id);

  // Delete task from DOM
  task.remove();

  // Update the tasks array in taskData
  deleteTaskData(id);

  // Update the items left
  setItemsLeft();
}
