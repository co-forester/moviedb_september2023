import React, {FC, PropsWithChildren} from 'react';
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../../interfaces";
import css from './Movies.module.css'
import {useAppContext, useAppPosterContext, useAppSwitcherContext} from "../../../hooks";
import {posterURL} from "../../../constants";

interface IProps extends PropsWithChildren{
    movie : IMovie;

}

const Movies: FC<IProps>= ({movie}) => {
     const {poster_path, title, original_title }= movie;
     const navigate = useNavigate();
     const {switcher} = useAppSwitcherContext();
     const {setCard} = useAppContext();
     // const {setPoster} = useAppPosterContext();

     const toMoviesListCard = () => {
         setCard({movie});
         // setPoster({poster});
         navigate('/moviesCard')
     }
    const poster = `${posterURL}/${poster_path}/&api_key=d031e7f38834f2d640ae4a98140c550f`;

    return (
        <div className={switcher ? css.MoviesDark : css.MoviesLight} onClick={toMoviesListCard}>
            <div className={css.MoviesPoster}>
                <img src={poster} alt={original_title}/>
            </div>
            <div>
                <div>{title}</div>
            </div>

        </div>
    );
};

export {Movies};