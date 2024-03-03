import React, {FC, PropsWithChildren} from 'react';

import {Movies} from "../Movies";
import {IMovie} from "../../../interfaces";
import css from './Movieslist.module.css'

interface IProps extends PropsWithChildren{
    movies: IMovie[]
}

const MoviesList: FC<IProps>= ({movies}) => {

    return (
        <div className={css.MoviesListBox}>
            <div className={css.MoviesList}>
                {movies.map(movie => <Movies key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {MoviesList};