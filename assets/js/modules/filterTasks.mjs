import { renderTaskData, tasks } from './taskData.mjs';

export default function (e) {
  if (!e.target.classList.contains('action__filter')) return;
  console.log('CLICKED');
  const allFilterEl = document.querySelectorAll('.action__filter');
  const clickedClasses = e.target.classList;
  const allTasks = tasks;
  const checkedTasks = tasks.filter(task => task.completed === true);
  const uncheckedTasks = tasks.filter(task => task.completed === false);
  console.log(allTasks, checkedTasks, uncheckedTasks);

  allFilterEl.forEach(el => el.classList.remove('action__filter--active'));

  if (clickedClasses.contains('action__filter--all')) {
    renderTaskData(allTasks, 'array');
    clickedClasses.add('action__filter--active');
  }

  if (clickedClasses.contains('action__filter--unchecked')) {
    renderTaskData(uncheckedTasks, 'array');
    clickedClasses.add('action__filter--active');
  }

  if (clickedClasses.contains('action__filter--checked')) {
    renderTaskData(checkedTasks, 'array');
    clickedClasses.add('action__filter--active');
  }
}
