import React from 'react';
import {Outlet} from "react-router-dom";

import css from './MainLayout.module.css'
import {Header, Pagination} from "../components";
import {useAppSwitcherContext} from "../hooks";

const MainLayouts = () => {
    const {switcher} = useAppSwitcherContext();

    return (
        <div className={switcher ? css.MainLayoutLight : css.MainLayoutDark}>
            <Header/>
            {/*<Pagination/>*/}
            <Outlet/>
        </div>
    );
};

export {MainLayouts};