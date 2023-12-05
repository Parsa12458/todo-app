import { deleteCompletedTaskData, tasks } from './taskData.mjs';

export default function () {
  const completedTasks = tasks.filter(task => task.completed === true);
  const completedTasksEl = document.querySelectorAll('.task--checked');

  // Delete completed tasks from tasks array
  deleteCompletedTaskData(completedTasks);

  // Delete completed tasks from DOM
  completedTasksEl && completedTasksEl.forEach(el => el.remove());
}
