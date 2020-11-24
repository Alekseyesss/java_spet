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

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    let movieList = document.querySelector('.promo__interactive-list');
    const makeFavorite = document.querySelector('.add input[type="checkbox"]');

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ],

        // Функція renderMovieList берез дані з масиву movieDB.movies та на їх основі створює верстку списку фільмів
        renderMovieList() {
            let mewMovieList = '';
            for (let i = 0; i < this.movies.length; ++i) {
                mewMovieList += `
        <li class="promo__interactive-item">${i + 1 + ' ' + this.movies[i]}
            <div class="delete"></div>
        </li>
        `
            };
            movieList.innerHTML = mewMovieList;
            deleteFilm();
        },

        set addMovies(value) {
            this.movies.push(value);
            this.movies.sort();
            this.renderMovieList()
        }
    };


    document.querySelectorAll('.promo__adv img').forEach((item) => {
        item.remove();
    });
    document.querySelector('.promo__genre').textContent = 'ДРАМА';
    document.querySelector('.promo__bg').style.backgroundImage = "url('img/bg.jpg')";
    movieDB.movies.sort();
    movieDB.renderMovieList();

    document.querySelector('.promo__interactive .add button').addEventListener('click', (event) => {
        event.preventDefault()
        let film = document.querySelector('.adding__input').value.trim();
        if (film.length > 21) {
            film = film.slice(0, 21) + '...';
        }

        if (film) {
            movieDB.addMovies = film;
        }

        if (makeFavorite.checked) {
            console.log('Добавляем любимый фильм');
        }
        else {
            console.log('Добавляем такой себе фильм');
        }
    })


    function deleteFilm() {
        document.querySelectorAll('.delete').forEach((item, i) => {
            item.addEventListener('click', (event) => {
                movieDB.movies.splice(i, 1);
                movieDB.renderMovieList();
            })
        })
    }
})