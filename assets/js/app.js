// Imports
import switchTheme from './modules/switchTheme.mjs';
import addTask from './modules/addTask.mjs';
import { renderTaskData, tasks } from './modules/taskData.mjs';
import checkTask from './modules/checkTask.mjs';
import deleteTask from './modules/deleteTask.mjs';
import setItemsLeft from './modules/setItemsLeft.mjs';
import deleteCompletedTasks from './modules/deleteCompletedTasks.mjs';
import filterTasks from './modules/filterTasks.mjs';
import dragAndDropTask from './modules/dragAndDropTask.mjs';
dragAndDropTask;

// Variables
const switchThemeBtn = document.querySelector(
  '.header__toggle-theme-container'
);
const form = document.querySelector('.form form');
const taskContainer = document.querySelector('.tasks');
const deleteCompletedBtn = document.querySelector('.action__delete-all');
const filterContainer = document.querySelector('.action__filters');

// Functions
const getTheme = function () {
  const localStorageValue = localStorage.getItem('darkTheme');
  if (!localStorageValue) return;
  if (localStorageValue === 'true') document.body.classList.add('dark-theme');
};

// init Function
const init = function () {
  // Switching Theme
  getTheme();
  switchThemeBtn.addEventListener('click', switchTheme);

  // Render tasks from local storage if exists
  renderTaskData(localStorage.getItem('tasks'), 'string');

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

  // Deleting tasks
  taskContainer.addEventListener('click', deleteTask);

  // Delete all tasks
  deleteCompletedBtn.addEventListener('click', deleteCompletedTasks);

  // Filter tasks
  filterContainer.addEventListener('click', filterTasks);

  // Drag and drop tasks
  dragAndDropTask();
};

init();
