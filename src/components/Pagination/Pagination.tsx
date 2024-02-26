import React from 'react';

import css from './Pagination.module.css'

const Pagination = () => {
    // const{setList, list} = useAppContext()
    //
    // const prev = () => {
    //         setList((+list - 1).toString())
    // }
    //
    // const next = () => {
    //     setList((+list + 1).toString())
    // }


    return (
        <div className={css.Pagination}>
            <div className={css.Buttons}>
                {/*<button className={css.ButPrev}  onClick={prev}>prev</button>*/}
                {/*<button className={css.ButNext}  onClick={next}>next</button>*/}
            </div>
        </div>
    );
};

export {Pagination};