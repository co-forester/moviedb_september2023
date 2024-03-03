import React from 'react';
import {Badge, Rating, Typography} from "@mui/material";

import css from "./MoviesListCard.module.css";
import {useAppContext} from "../../../hooks";
import {PosterPreview} from "../../PosterPreview";

const MoviesListCard = () => {
    const {card:{movie}} = useAppContext();
    const {original_title, overview, release_date, title, vote_average, genre_ids}= movie;
    const {gen} = useAppContext();
    console.log(gen)
    console.log({movie});
    const genresMovie = genre_ids.join();
        genre_ids.forEach( () =>{
    //     switch (genre_ids.id) {
    //     case 28 :
    //         genresMovie.unshift('Action');
    //         break;
    //     case 12:
    //         genresMovie.unshift('Adventure');
    //         break;
    //     case 16:
    //         genresMovie.unshift('Animation');
    //         break;
    //     case 35 :
    //         genresMovie.unshift('Comedy');
    //         break;
    //     case 80:
    //         genresMovie.unshift('Crime');
    //         break;
    //     case 99:
    //         genresMovie.unshift('Documentary');
    //         break;
    //     case 18:
    //         genresMovie.unshift('Drama');
    //         break;
    //     case 10751:
    //         genresMovie.unshift('Family');
    //         break;
    //     case 14:
    //         genresMovie.unshift('Fantasy');
    //         break;
    //     case 36:
    //         genresMovie.unshift('History');
    //         break;
    //     case 27:
    //         genresMovie.unshift('Horror');
    //         break;
    //     case 10402:
    //         genresMovie.unshift('Music');
    //         break;
    //     case 9648 :
    //         genresMovie.unshift('Mystery');
    //         break;
    //     case 10749 :
    //         genresMovie.unshift('Romance');
    //         break;
    //     case 878 :
    //         genresMovie.unshift('Science Fiction');
    //         break;
    //     case 10770 :
    //         genresMovie.unshift('TV Movie');
    //         break;
    //     case 53 :
    //         genresMovie.unshift('Thriller');
    //         break;
    //     case 10752 :
    //         genresMovie.unshift('War');
    //         break;
    //     case 37 :
    //         genresMovie.unshift('Western');
    //         break;
    //     default:
    //         genresMovie.unshift('genre another');
    // }
        });


    const vote: number =vote_average / 2;

    return (
        <div className={css.MoviesListCard}>
            <div className={css.Card}>
                <div className={css.Img}>
                    <Badge badgeContent={genresMovie} color="primary">
                        <PosterPreview movie={movie}/>
                    </Badge>
                </div>
                <div className={css.Movie}>
                    <div className={css.TitleBox}>
                        <div className={css.TitleOrig}>
                            <div className={css.TitleOrigValue}>{original_title}</div>
                        </div>
                        <div className={css.Title}>
                            <div className={css.TitleField}>original name:</div>
                            <div className={css.TitleValue}>{title}</div>
                        </div>
                    </div>
                    <div>
                        <div className={css.Field}>Release date:</div>
                        <div className={css.Value}>{release_date}</div>
                    </div>
                    <div className={css.Rating}>
                        <Typography className={css.Legend} component="legend">Rating</Typography>
                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} value={vote} readOnly
                                size='large'/>
                    </div>
                    <div className={css.Overview}>
                        <div className={css.OverviewField}>Overview:</div>
                        <div className={css.OverviewValue}>{overview}</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export {MoviesListCard};