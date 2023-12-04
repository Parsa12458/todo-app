import switchTheme from './modules/switchTheme.mjs';

const switchThemeBtn = document.querySelector(
  '.header__toggle-theme-container'
);

const getTheme = function () {
  const localStorageValue = localStorage.getItem('darkTheme');
  console.log(localStorageValue);
  if (!localStorageValue) return;
  if (localStorageValue === 'true') document.body.classList.add('dark-theme');
};

const init = function () {
  getTheme();
  switchThemeBtn.addEventListener('click', switchTheme);
};

init();
