import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {Avatar} from "@mui/material";

import css from './Header.module.css'
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
            <button className={css.Button} onClick={back}>back</button>
            <NavLink to={'movies/search'}>Search</NavLink>
            <NavLink to={'movies/moviesList'}>Movies</NavLink>
            <NavLink to={'movies/genres'}>Genres</NavLink>
            <div className={css.ButtonBox}>
                <button className={css.Button} onClick={switchers}>Theme</button>
            </div>
            <Avatar alt="Remy Sharp" src="./icon8-gjbcr.svg" />
        </div>
    );
}

export {Header};