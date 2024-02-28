import React, {FC, PropsWithChildren, useState} from 'react';

import css from './GenresPage.module.css'
import {IMovie} from "../interfaces";
import {Movies} from "../components";
import {Genres} from "../components/MoviesContainer/Genres";

interface IProps extends PropsWithChildren{
   movies: IMovie[]
}

const GenresPage: FC<IProps>= ({movies}) => {
    const [value, setValue] = useState('');

    const filteredMovie = movies.filter(movie =>{ return movie.title.toLowerCase().includes(value.toLowerCase())});


    return (
        <div>
            <div>
                <div>
                    <form>
                        <input type={"text"} placeholder={'search'} className={css.Search}
                               onChange={(event) => setValue(event.target.value)}/>
                        {/*<img src={} alt={}>*/}
                    </form>
                </div>
                <div>
                    {filteredMovie.map(movie => <Movies movie={movie} key={movie.id}/>)}
                </div>
            </div>
            <Genres/>
        </div>

    );
};

export {GenresPage};