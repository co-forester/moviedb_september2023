import React from "react";
import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayouts} from "./layouts";
import {ErrorPage, MoviesPage} from "./pages";
import {Genres} from "./components/MoviesContainer/Genres";
import {MoviesContainer, MoviesListCard} from "./components";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayouts/>, errorElement: <ErrorPage/>, children:[
            {index: true, element: <Navigate to={'moviesPage/movies'}/>},
            {path: 'moviesPage', element: <MoviesPage/>, children:[
                    {path: 'genres', element: <Genres/>},
                    {path: 'movies', element: <MoviesContainer/>}
                ]},
            {path: 'moviesCard', element: <MoviesListCard/>},
            // {path: 'movieInfo', element: <MovieInfo/>}
        ]
    }
])

export {router}