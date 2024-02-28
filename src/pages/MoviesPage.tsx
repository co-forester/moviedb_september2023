import React from 'react';

import {MoviesContainer} from "../components";
import {Outlet} from "react-router-dom";


const MoviesPage = () => {
    return (
        <div>
            <Outlet/>
            <MoviesContainer/>
        </div>
    );
};

export {MoviesPage};