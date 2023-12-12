import Sortable from 'sortablejs';
import { tasks, updateOrderOfTasks } from './taskData.mjs';

export default function () {
  const taskContainer = document.querySelector('.tasks');

  new Sortable(taskContainer, {
    animation: 150,
    ghostClass: 'sortable-ghost',
    onEnd: updateOrderOfTasks,
  });
}
