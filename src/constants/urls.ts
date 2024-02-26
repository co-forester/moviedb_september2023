const baseURL = 'https://api.themoviedb.org/3';

const movies = '/discover/movie';
const genres = '/genre/movie/list';
const search  = '/search/keyword?query=super';
const posterURL = 'https://image.tmdb.org/t/p/w500'

const urls = {
    movies: {
        base: movies,
        // byId: (id: number): string => ``
    },
    genres: {
        base: genres,
        // byId: ()
    },
    search: {
        base: search
    }
}

export {baseURL, urls, posterURL}