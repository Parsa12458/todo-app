// Imports
import switchTheme from './modules/switchTheme.mjs';
import addTask from './modules/addTask.mjs';
import { renderTaskData, tasks } from './modules/taskData.mjs';
import checkTask from './modules/checkTask.mjs';

// Variables
const switchThemeBtn = document.querySelector(
  '.header__toggle-theme-container'
);
const form = document.querySelector('.form form');
const itemsLeftEl = document.querySelector('.action__items-left');
const taskContainer = document.querySelector('.tasks');

// Functions
const getTheme = function () {
  const localStorageValue = localStorage.getItem('darkTheme');
  if (!localStorageValue) return;
  if (localStorageValue === 'true') document.body.classList.add('dark-theme');
};

const setItemsLeft = function () {
  const itemsLeft = tasks.length;
  if (itemsLeft === 1 || itemsLeft === 0)
    itemsLeftEl.textContent = `${itemsLeft} item left`;
  if (itemsLeft > 1) itemsLeftEl.textContent = `${itemsLeft} items left`;
};

// init Function
const init = function () {
  // Switching Theme
  getTheme();
  switchThemeBtn.addEventListener('click', switchTheme);

  // Render tasks from local storage if exists
  renderTaskData();

  // Set items left
  setItemsLeft();

  // Adding task
  form.addEventListener('submit', e => {
    e.preventDefault();
    addTask();

    // Update items left
    setItemsLeft();
  });

  // Checking tasks
  taskContainer.addEventListener('click', checkTask);
};

init();
