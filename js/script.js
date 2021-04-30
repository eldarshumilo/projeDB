/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelector('.promo__adv');
const genre = document.querySelector('.promo__genre');
const bg = document.querySelector('.promo__bg');
const filmList= movieDB.movies.sort();
const list = document.querySelector('.promo__interactive-list');


adv.remove();
genre.innerHTML = 'Драма';
bg.style.background = 'url("../img/bg.jpg")';
for (let i = 0; i < filmList.length; i++){
    list.insertAdjacentHTML('beforeend', `<li class="promo__interactive-item">${(i+1) +' ' + filmList[i]}
    <div class="delete"></div></li>`);
}
