import { tasks } from './taskData.mjs';

const itemsLeftEl = document.querySelector('.action__items-left');

export default function () {
  const itemsLeft = tasks.filter(task => task.completed === false).length;
  if (itemsLeft === 1 || itemsLeft === 0)
    itemsLeftEl.textContent = `${itemsLeft} item left`;
  if (itemsLeft > 1) itemsLeftEl.textContent = `${itemsLeft} items left`;
}
