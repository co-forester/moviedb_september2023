import React from "react";
import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayouts} from "./layouts";
import {MoviesPage} from "./pages";
import {Genres, MoviesContainer, MoviesListCard, Search} from "./components";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayouts/>, children:[
            {index: true, element: <Navigate to={'movies'}/>},
            {path: 'movies', element: <MoviesPage/>, children:[
                    {index: true, element: <Navigate to={'moviesList'}/>},
                    {path: 'moviesList', element: <MoviesContainer/>},
                    {path: 'genres', element: <Genres/>},
                    {path: 'search', element: <Search/>},
                    // {path: 'poster', element: <PosterPreview/>}
                ]},
            {path: 'card', element: <MoviesListCard/>}
        ]
    }
])

export {router}
