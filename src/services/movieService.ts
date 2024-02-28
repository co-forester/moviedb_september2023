import {apiService} from "./apiService";

import {urls} from "../constants";
import {IRes} from "../types";
import {IMovie, IMovies} from "../interfaces";

const  movieService = {
    getAll: (page: string ='page'): IRes<IMovies> => apiService.get(urls.movies.base, {params:{page}}),
    getAllByGenre: (genreIds: number, page: number): IRes<IMovies> => apiService.get(urls.movies.byGenreId(genreIds, page))
}

export {movieService}