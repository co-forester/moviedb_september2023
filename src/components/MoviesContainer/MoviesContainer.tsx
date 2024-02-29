import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {MoviesList} from "./MoviesList";
import {IMovie} from "../../interfaces";
import css from "./MoviesContainer.module.css";
import {movieService} from "../../services";

const MoviesContainer = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [query, setQuery] = useSearchParams({page: '1'});
    const [list, setList] = useState( 1);

    console.log(movies)
    // const pageId = query.get('page')
    useEffect(() => {
        movieService.getAll(query.get('page')).then(({data: {page, results}}) => {
            setMovies(results);
            setList(page)
        })
    }, [query]);

    const prev = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') - 1).toString());
            return prev
        })
    }

    const next = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') + 1).toString());
            return prev
        })
    }

    return (
        <div className={css.MoviesContainer}>
            <div className={css.Pagination}>
                <button className={css.ButPrev} disabled={(list === 1)} onClick={prev}>prev</button>
                <div>current {list}</div>
                <button className={css.ButNext} disabled={list === 500} onClick={next}>next</button>
            </div>
            <MoviesList movies={movies}/>
        </div>
    );
};

export {MoviesContainer};
