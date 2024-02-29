import React from 'react';

import css from "./MoviesListCard.module.css";
import {useAppContext} from "../../../hooks";
import {PosterPreview} from "../../PosterPreview";
import {Outlet} from "react-router-dom";



const MoviesListCard = () => {
    const {card:{movie}} = useAppContext();
    // const {state:{movie}} = useLocation()
    const {original_title, overview, popularity,  release_date, title, vote_average, vote_count, genre_ids}= movie;
    return (
        <div>
            <Outlet/>
            <div className={css.MoviesListCard}>
                <div className={css.TitleBox}>
                    <div className={css.TitleOrig}>
                        <div className={css.TitleOrigValue}>{original_title}</div>
                    </div>
                    <div className={css.Title}>
                        <div className={css.TitleField}>original name:</div>
                        <div className={css.TitleValue}>{title}</div>
                    </div>
                </div>
                <div className={css.Card}>

                    <PosterPreview movie={movie}/>
                    <div className={css.Movie}>
                        <div>
                            {/*adult: {adult}*/}
                        </div>
                        <div>
                            genre_ids: {genre_ids}
                        </div>
                        <div>
                            {/*<div className={css.Field}>id:</div>*/}
                            {/*<div>{id}</div>*/}
                        </div>
                        <div>
                            {/*<div className={css.Field}>original_language:</div>*/}
                            {/*<div>{original_language}</div>*/}
                        </div>
                        <div>
                            <div className={css.Field}>popularity:</div>
                            <div>{popularity}</div>
                        </div>
                        <div>
                            {/*    <div className={css.Field}>poster_path:</div>*/}
                            {/*    <div>{poster_path}</div>*/}
                        </div>
                        <div>
                            <div className={css.Field}>Release date:</div>
                            <div className={css.Value}>{release_date}</div>
                        </div>
                        <div>
                            {/*<div className={css.Field}>video:</div>*/}
                            {/*<div>{video}</div>*/}
                        </div>
                        <div>
                            <div className={css.Field}>vote_average:</div>
                            <div>{vote_average}</div>
                        </div>
                        <div>
                            <div className={css.Field}>vote_count:</div>
                            <div>{vote_count}</div>
                        </div>
        </div>

                </div>
            </div>
            <div className={css.Overview}>
                <div className={css.OverviewField}>Overview:</div>
                <div className={css.OverviewValue}>{overview}</div>
            </div>
        </div>

    );
};

export {MoviesListCard};