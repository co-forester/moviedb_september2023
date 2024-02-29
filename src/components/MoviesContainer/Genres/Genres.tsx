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
    const [total_pages, setTotal_pages] = useState<number>(null);
    const {genreId} = useAppPrevNextContext();

    useEffect(() => {
        genreService.getAll().then(({data:{genres}})=>setGenres(genres))
    }, []);

    useEffect(() => {
    movieService.getAllByGenre(genreId, page).then(({data:{total_pages, page, results}}) => {
        setMovies(results);
        setPage(page);
        setTotal_pages(total_pages)

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
                {genres.map(genre => <Genre  key={genre.id} genre={genre}/>)}
            </div>
            <div className={css.Pagination}>
                <button className={css.ButPrev} disabled={(page === total_pages)} onClick={prev}>prev</button>
                <div>current {page}</div>
                <button className={css.ButNext} disabled={page === 4000} onClick={next}>next</button>
                <div>total {total_pages}</div>
            </div>
            <MoviesList movies={movies}/>
        </div>
    );
};

export {Genres};