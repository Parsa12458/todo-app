export default function () {
  let darkTheme;
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')) darkTheme = true;
  else darkTheme = false;

  localStorage.setItem('darkTheme', darkTheme);
}
