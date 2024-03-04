import React, {useEffect, useState} from 'react';

import {genreService, movieService} from "../../../services";
import {IGenre, IMovie} from "../../../interfaces";
import css from './Genres.module.css';
import {MoviesList} from "../MoviesList"
import {Genre} from "./Genre";
import {useAppPrevNextContext} from "../../../hooks/useAppPrevNextContext";
import {Pagination} from "../../Pagination";
import '@fontsource/roboto/400.css';
import {useAppContext} from "../../../hooks";

const Genres = () => {
    const [genres, setGenres] = useState<IGenre[]>([]);
    const [movies, setMovies] = useState<IMovie[]>([]);
    const {setGen} = useAppContext();
    const {genreId, page, setPage, setTotal_pages} = useAppPrevNextContext();

    useEffect(() => {
        genreService.getAll().then(({data:{genres}})=> {
            setGenres(genres);
            setGen(genres)
        })
    }, []);

    useEffect(() => {
    movieService.getAllByGenre(genreId, page).then(({data:{total_pages, page, results}}) => {
        setMovies(results);
        setPage(page);
        setTotal_pages(total_pages);
    })
    }, [page, genreId]);

    return (
        <div className={css.Genres}>
            <div className={css.GenresMap}>
                {genres.map(genre => <Genre  key={genre.id} genre={genre}/>)}
            </div>
            <Pagination/>
            <MoviesList movies={movies}/>
        </div>
    );
};

export {Genres};