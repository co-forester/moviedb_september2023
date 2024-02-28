import React, {useEffect, useState} from 'react';

import {genreService, movieService} from "../../../services";
import {IGenre, IMovie} from "../../../interfaces";
import css from './Genres.module.css';
import {MoviesList} from "../MoviesList"
import {Genre} from "./Genre";
import {useAppPrevNextContext} from "../../../hooks/useAppPrevNextContext";

const Genres = () => {
    const [genres, setGenres] = useState<IGenre[]>([]);
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [page, setPage] = useState<number>(1);
    const {genreId} = useAppPrevNextContext();

    useEffect(() => {
        genreService.getAll().then(({data:{genres}})=>setGenres(genres))
    }, []);

    useEffect(() => {
    movieService.getAllByGenre(genreId, page).then(({data:{page, results}}) => {
        setMovies(results);
        setPage(page)
    })
    }, [page, genreId]);

    const prev = () => {
        setPage(page-1)
    };

    const next = () => {
        setPage(page+1)
    };

    return (
        <div className={css.Genres}>
            <div className={css.GenresMap}>
                {genres.map(genre => <Genre genre={genre}/>)}
            </div>
            <div className={css.Pagination}>
                <button className={css.ButPrev} disabled={(page === 1)} onClick={prev}>prev</button>
                <div>{page}</div>
                <button className={css.ButNext} disabled={page === movies.length} onClick={next}>next</button>
            </div>
            <MoviesList movies={movies}/>
        </div>
    );
};

export {Genres};