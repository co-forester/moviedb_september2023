import React from 'react';

import css from './Pagination.module.css';
import {useAppPrevNextContext} from "../../hooks/useAppPrevNextContext";

const Pagination = () => {
    const {page, setPage, total_pages} = useAppPrevNextContext();

    const prev = () => {
        setPage(page-1)
    };
    const next = () => {
        setPage(page+1)
    };

    return (
        <div className={css.Pagination}>
            {/*<form>*/}
            {/*    <input type={'number'} className={css.Input} placeholder={'enter page number'}*/}
            {/*           onChange={(event) => setPage(event.target.value)}*/}
            {/*    />*/}
            {/*    <button className={css.ButPage}>go page</button>*/}
            {/*</form>*/}
            <button className={css.ButPrev} disabled={(page === 1)} onClick={prev}>prev</button>
            <div>current {page}</div>
            <button className={css.ButNext} disabled={page === total_pages} onClick={next}>next</button>
            <div>total {total_pages}</div>
        </div>
    );
};

export {Pagination};