import React from "react";
import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayouts} from "./layouts";
import {MoviesPage} from "./pages";
import {Genres} from "./components/MoviesContainer/Genres";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayouts/>, children:[
            {index: true, element: <Navigate to={'moviesList'}/>},
            {path: 'moviesList', element: <MoviesPage/>},
            {path: 'genres', element: <Genres/>},
            // {path: 'moviesCard', element: <MoviesCardPage/>},
            // {path: 'movieInfo', element: <MovieInfo/>}
        ]
    }
])

export {router}