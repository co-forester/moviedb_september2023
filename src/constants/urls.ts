const baseURL = 'https://api.themoviedb.org/3';

const movies = '/discover/movie';
const genres = '/genre/movie/list';
const search  = '/search/keyword';
const posterURL = 'https://image.tmdb.org/t/p/w500'

const urls = {
    movies: {
        base: movies,
        byGenreId: (genreIds: number, pageId: number) : string => `${movies}?api_key=d031e7f38834f2d640ae4a98140c550f&with_genres=${genreIds}&page=${pageId}`
    },
    genres: {
        base: genres,
    },
    search: {
        byKeyWord: (keyWord: string) : string => `${search}?query=${keyWord}`
    }
}

export {baseURL, urls, posterURL}