/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице заменить на основании данных из этого JS файла.
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

document.querySelectorAll('.promo__adv img').forEach((item) => {
    item.remove();
});
document.querySelector('.promo__genre').textContent = 'ДРАМА';
document.querySelector('.promo__bg').style.backgroundImage = "url('img/bg.jpg')";

// movieDB.movies.sort();
// document.querySelectorAll('.promo__interactive-item').forEach(
//     (item, i) => {
//         item.textContent = `${i+1}. ` + movieDB['movies'][i];
//     }
// )

let movieList = document.querySelector('.promo__interactive-list');

movieDB.movies.sort();

let mewMovieList = '';
for (let i = 0; i < movieDB.movies.length; ++i) {
    mewMovieList += `
    <li class="promo__interactive-item">${i + ' ' + movieDB.movies[i]}
        <div class="delete"></div>
    </li>
    `
};

movieList.innerHTML = mewMovieList;