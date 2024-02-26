import React from 'react';

import css from './Header.module.css'
import {NavLink, useNavigate} from "react-router-dom";
import {useAppContext} from "../../hooks";
// import {useAppContext} from "../../hooks";


const Header = () => {

    const navigate = useNavigate();
    const {switcher, changeSwitcher} = useAppContext();

    const back = () => {
        navigate(-1)
    }

    const switchers = () => {
        changeSwitcher()
    }

    return (
        <div className={switcher ? css.HeaderLight : css.HeaderDark}>
            <button onClick={back}>back</button>
            <NavLink to={'home'}>Home</NavLink>
            <NavLink to={'moviesList'}>Movies</NavLink>
            <NavLink to={'genres'}>Genres</NavLink>
            <button onClick={switchers}>Theme</button>
        </div>
    );
}


export {Header};