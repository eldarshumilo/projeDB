/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded',() => {
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
    const films = movieDB.movies;
    const list = document.querySelector('.promo__interactive-list');
    const addForm = document.querySelector('form.add');
    const checkbox = addForm.querySelector('[type="checkbox"]');
    const addInput = addForm.querySelector('.adding__input');
    
    const sortArr = (arr) => {
        arr.sort();
    };
    
    const deleteAdv = (arr) => {
        arr.remove();
    };
    
    const makeChanges = () => {
        genre.innerHTML = 'Драма';
        bg.style.background = 'url("../img/bg.jpg")';
    };
    
    
    addForm.addEventListener('submit', (event)=>{
        event.preventDefault();
    
        let newFilm = addInput.value;
        const favorite = checkbox.checked;
        if (favorite){
            console.log('Добавляем любимый фильм');
        }
        if(newFilm){
            if(newFilm.length > 21){
                newFilm = `${newFilm.substr(0, 22)}...`;
            }
            films.push(newFilm);
            sortArr(films);

            createMovieList(films, list);
        }

        event.target.reset();
    });
    
   


    function createMovieList(film, parent){
        parent.innerHTML = '';
        sortArr(film);
        film.forEach((film, i) => {
            parent.innerHTML += 
                `<li class="promo__interactive-item">${(i+1)} ${film}
                <div class="delete"></div></li>`;
        });
        
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click',() =>{
                btn.parentElement.remove();
                films.splice(i, 1);
                createMovieList(film, parent);
            });
        });
    }
    
    deleteAdv(adv);
    makeChanges();
    
    createMovieList(films, list);
}
)

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

//// My variant
// const btn = document.querySelector('.add').lastElementChild;
// btn.addEventListener('click', () => {
//     const addFilm = document.getElementsByTagName("input")[1].value;
//     films.push(addFilm);
//     if (films[films.length-1].length > 21){
//         list.insertAdjacentHTML('beforeend', `<li class="promo__interactive-item">
//         ${films.length +' ' + films[films.length-1].substr(0, 20)+'...'}
//         <div class="delete"></div></li>`);
//     }else {
//         list.insertAdjacentHTML('beforeend', `<li class="promo__interactive-item">
//         ${films.length +' ' + films[films.length-1]}
//         <div class="delete"></div></li>`);
//     }
//     sortArr(films);
//     }

// );
// const sortArr = (arr) => {
//     arr.sort();
// };
// sortArr(films);
// adv.remove();
// genre.innerHTML = 'Драма';
// bg.style.background = 'url("../img/bg.jpg")';
// for (let i = 0; i < films.length; i++){
//     list.insertAdjacentHTML('beforeend', `<li class="promo__interactive-item">${(i+1) +' ' + films[i]}
//     <div class="delete"></div></li>`);
// }
