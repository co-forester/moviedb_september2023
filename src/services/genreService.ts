import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IGenre, IGenres} from "../interfaces";

const genreService = {
    getAll: (): IRes<IGenres> =>apiService.get(urls.genres.base)
}

export {genreService}