'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    }
}

//start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};

function rememberMyfilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?',''),
              b = +prompt('На сколько оцените его?','');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('data is OK');
        } else {
            console.log('error');
            i--;
        }
    }
}

//rememberMyfilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Киноман');
    } else {
        alert('Произошла ошибка');
    }
}

//detectPersonalLevel();


function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        const a = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = a;
    }
}

writeYourGenres();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);
