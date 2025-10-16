/* в этот файл добавляет скрипты*/
const nav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

nav.classList.remove('main-nav--nojs');

if (nav && navToggle) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('main-nav__toggle--opened');
    navToggle.classList.toggle('main-nav__toggle--close');
    nav.classList.toggle('main-nav--opened');
  });
}
