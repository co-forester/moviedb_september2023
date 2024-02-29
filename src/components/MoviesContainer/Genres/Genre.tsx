import React, {FC, PropsWithChildren} from 'react';

import {IGenre} from "../../../interfaces";
import  css from './Genre.module.css'
import {useAppPrevNextContext} from "../../../hooks/useAppPrevNextContext";
import {useAppSwitcherContext} from "../../../hooks";

interface IProps extends  PropsWithChildren{
    genre: IGenre
}

const Genre: FC<IProps> = ({genre}) => {
    const {id, name} = genre;
    const {setGenreId} = useAppPrevNextContext();
    const {switcher} = useAppSwitcherContext();

    const byGenre = () => {
        setGenreId(id)
    };

    return (
        <div className={css.Genre}>
            <div className={switcher? css.ButGenreLight : css.ButGenreDark} onClick={byGenre}>name: {name}</div>
        </div>
    );
};

export {Genre};