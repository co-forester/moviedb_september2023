import React, {createContext, FC, PropsWithChildren, useState} from 'react';

import {IMovie} from "../interfaces";

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
    const [prev, setPrev] = useState<number>(null);
    const [next, setNext] = useState<number>(null);
    const [list, setList] = useState<number>(1);
    const [movies, setMovies] =useState<IMovie[]>([])
    const [genreId, setGenreId] = useState<number>(null)
    const changeSwitcher = () => {
        setSwitcher(prev => !prev)
    };

    return (
        <div>
            <ContextMovies.Provider value={{movies, setMovies}}>
                <ContextPrevNext.Provider value={{prev, next, setNext, setPrev, list, setList, genreId,
                    setGenreId}}>
                    <Context.Provider value = {{card, setCard}}>
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