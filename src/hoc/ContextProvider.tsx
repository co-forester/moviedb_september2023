import React, {createContext, FC, PropsWithChildren, useState} from 'react';
import {IMovie} from "../interfaces";

interface IProps extends PropsWithChildren{
    card: IMovie;
    switcher: boolean;
    poster: object
}

const Context:any = createContext(null)

const ContextProvider: FC<IProps> = ({children}) => {
    // const [trigger, setTrigger] = useState(null);
    // const [list, setList] = useState({page: '1'});
    const [card, setCard] = useState(null);
    const [switcher, setSwitcher] = useState(true);
    const [poster, setPoster] = useState(null)
    // const changeTrigger = () => {
        // setTrigger(prev => !prev)
    // };
    const changeSwitcher = () => {
        setSwitcher(prev => !prev)
    };

    return (
        <div>
            <Context.Provider value = {{switcher, setSwitcher,card, setCard, poster, setPoster, changeSwitcher}}>
                {children}
            </Context.Provider>
        </div>
    );
};

export {ContextProvider, Context};