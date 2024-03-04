import React, {createContext, FC, PropsWithChildren, useState} from 'react';

import {IGenre, IMovie} from "../interfaces";

interface IProps extends PropsWithChildren{

}

const Context = createContext(null);
const ContextSwitcher = createContext(null);
const ContextPoster= createContext(null);
const ContextPrevNext = createContext(null);
const ContextMovies = createContext(null);

const ContextProvider: FC<IProps> = ({children}) => {
    const [card, setCard] = useState<IMovie>(null);
    const [switcher, setSwitcher] = useState<boolean>(true );
    const [poster, setPoster] = useState<object>(null);
    const [movies, setMovies] =useState<IMovie[]>([]);
    const [genreId, setGenreId] = useState<number>(null);
    const [page, setPage] = useState<number>(1);
    const [total_pages, setTotal_pages] = useState<number>(null);
    const [gen, setGen] = useState<IGenre[]>([]);
    const changeSwitcher = () => {
        setSwitcher(prev => !prev)
    };

    return (
        <div>
            <ContextMovies.Provider value={{movies, setMovies}}>
                <ContextPrevNext.Provider value={{ genreId, setGenreId, page, setPage, total_pages, setTotal_pages}}>
                    <Context.Provider value = {{card, setCard, gen, setGen}}>
                        <ContextSwitcher.Provider  value = {{switcher, setSwitcher, changeSwitcher}}>
                            <ContextPoster.Provider  value = {{poster, setPoster}}>
                                {children}
                            </ContextPoster.Provider>
                        </ContextSwitcher.Provider>
                    </Context.Provider>
                </ContextPrevNext.Provider>
            </ContextMovies.Provider>
        </div>
    );
};

export {ContextProvider, Context, ContextSwitcher, ContextPoster, ContextPrevNext, ContextMovies};