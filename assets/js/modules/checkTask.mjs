import { checkTaskData } from './taskData.mjs';

export default function (e) {
  if (!e.target.classList.contains('task__state')) return;

  const task = e.target.closest('.task');
  const taskCheckBox = e.target;

  task.classList.toggle('task--checked');
  task.classList.toggle('task--unchecked');

  taskCheckBox.classList.toggle('checked-circle');
  taskCheckBox.classList.toggle('unchecked-circle');

  checkTaskData(task.dataset.id);
}
