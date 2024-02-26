import React, {useEffect, useState} from 'react';

import {genreService} from "../../../services";
import {Genre} from "./Genre";
import {IGenre} from "../../../interfaces";

const Genres = () => {
    const [genres, setGenres] = useState([])

    useEffect(() => {
        genreService.getAll().then(({data}) => setGenres(data))
    }, []);
    // console.log(genres)


    return (
        <div>
            {genres.map(genre => <Genre key={genre.id} genre = {genre}/>)}
        </div>
    );
};

export {Genres};