import {apiService} from "./apiService";

import {urls} from "../constants";
import {IRes} from "../types";
import {IMovies} from "../interfaces";
import {IMoviesGenre} from "../interfaces/moviesGenreInterface";

const  movieService = {
    getAll: (page: string ='page'): IRes<IMovies> => apiService.get(urls.movies.base, {params:{page}}),
    getAllByGenre: (genreIds: number, page: number): IRes<IMoviesGenre> => apiService.get(urls.movies.byGenreId(genreIds, page)),
    getKeyWord: (keyWord: string): IRes<IMoviesGenre> => apiService.get(urls.search.byKeyWord(keyWord))
}

export {movieService}