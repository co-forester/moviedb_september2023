import React from 'react';
import {Outlet} from "react-router-dom";


import css from './MainLayout.module.css'
import {Header} from "../components";
import {useAppContext} from "../hooks";

const MainLayouts = () => {
    const {switcher} = useAppContext();

    return (
        <div className={switcher ? css.MainLayoutLight : css.MainLayoutDark}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayouts};