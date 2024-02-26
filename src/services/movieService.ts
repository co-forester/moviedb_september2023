import {apiService} from "./apiService";

import {urls} from "../constants";
import {IRes} from "../types";
import {IMovies} from "../interfaces";

const  movieService = {
    getAll: (page: string ='page'): IRes<IMovies> => apiService.get(urls.movies.base, {params:{page}})
}

export {movieService}