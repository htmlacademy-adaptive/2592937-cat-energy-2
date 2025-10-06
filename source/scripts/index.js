/* в этот файл добавляет скрипты*/
const nav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
if (nav && navToggle) {
  navToggle.addEventListener('click', () => {
    // Переключаем класс кнопки (иконку)
    navToggle.classList.toggle('main-nav__toggle--opened');
    navToggle.classList.toggle('main-nav__toggle--close');
    nav.classList.toggle('main-nav--opened');
  });
}
