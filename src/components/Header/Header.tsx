import React from 'react';

import css from './Header.module.css'
import {NavLink, useNavigate} from "react-router-dom";
import {useAppSwitcherContext} from "../../hooks";


const Header = () => {

    const navigate = useNavigate();
    const {switcher, changeSwitcher} = useAppSwitcherContext();

    const back = () => {
        navigate(-1)
    }

    const switchers = () => {
        changeSwitcher()
    }

    return (
        <div className={switcher ? css.HeaderLight : css.HeaderDark}>
            <button onClick={back}>back</button>
            <NavLink to={'moviesPage/movies'}>Movies</NavLink>
            <NavLink to={'moviesPage/genres'}>Genres</NavLink>
            <button onClick={switchers}>Theme</button>
        </div>
    );
}


export {Header};