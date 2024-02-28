import React from 'react';

import css from './Pagination.module.css'
import {useAppPrevNextContext} from "../../hooks/useAppPrevNextContext";

const Pagination = () => {
//     const {setPrev, next, list} = useAppPrevNextContext();

     // const prevF = () => { prev () }
     // const nextF = () => { next () }

    return (
        <div className={css.Pagination}>
            {/*<button className={css.ButPrev} disabled={(list === 1)} onClick={setPrev}>prev</button>*/}
            {/*<div>{list}</div>*/}
            {/*<button className={css.ButNext} disabled={list === 500} onClick={next}>next</button>*/}
        </div>
    );
};

export {Pagination};