import {useContext} from "react";

import {ContextMovies} from "../hoc";

const useAppMoviesContext = () => useContext(ContextMovies)

export  {useAppMoviesContext}