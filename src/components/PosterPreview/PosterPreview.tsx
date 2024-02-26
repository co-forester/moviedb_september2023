import React, {FC, PropsWithChildren} from 'react';

import css from './PosterPreview.module.css'
import {IMovie} from "../../interfaces";
import {posterURL} from "../../constants";

interface IProps extends PropsWithChildren{
    movie: IMovie
}

const PosterPreview: FC<IProps>=  ({movie}) => {

    const { title, poster_path} = movie

    const poster = `${posterURL}/${poster_path}/&api_key=d031e7f38834f2d640ae4a98140c550f`;

    return (
        <div className={css.PosterPreview}>
            <img src={poster} alt={title}/>
        </div>
    );
};



export {PosterPreview};