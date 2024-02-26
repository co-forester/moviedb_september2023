import React from "react";
import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayouts} from "./layouts";
import {GenresPage, HomePage, MoviesCardPage, MoviesPage} from "./pages";
import {Genres} from "./components/MoviesContainer/Genres";
import {MovieInfo} from "./components";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayouts/>, children:[
            {index: true, element: <Navigate to={'home'}/>},
            {path: 'home', element: <HomePage/>},
            {path: 'moviesList', element: <MoviesPage/>},
            {path: 'moviesCard', element: <MoviesCardPage/>},
            {path: 'genres', element: <GenresPage/>},
            {path: 'movieInfo', element: <MovieInfo/>}
        ]
    }
])

export {router}