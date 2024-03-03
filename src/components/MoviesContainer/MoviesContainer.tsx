import React, {useEffect, useState} from 'react';

import {MoviesList} from "./MoviesList";
import {IMovie} from "../../interfaces";
import css from "./MoviesContainer.module.css";
import {movieService} from "../../services";
import {useAppPrevNextContext} from "../../hooks/useAppPrevNextContext";
import {Pagination} from "../Pagination";

const MoviesContainer = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const {page, setPage, setTotal_pages} = useAppPrevNextContext();

    useEffect(() => {
        movieService.getAll(page).then(({data: {page, results}}) => {
            setMovies(results);
            setPage(page)
            setTotal_pages(500)
        })
    }, [page]);

    return (
        <div className={css.MoviesContainer}>
            <Pagination/>
            <MoviesList movies={movies}/>
        </div>
    );
};

export {MoviesContainer};
