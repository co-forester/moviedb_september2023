import {useEffect, useState} from "react";

import {IMovie} from "../../../interfaces";
import css from './Search.module.css'
import {movieService} from "../../../services";
import {MoviesList} from "../MoviesList";
import {Pagination} from "../../Pagination";
import {useAppPrevNextContext} from "../../../hooks/useAppPrevNextContext";

const Search = () => {
    const [value, setValue] = useState<string>('');
    const [data, setData] = useState<IMovie[]>(null)
    const [movies, setMovies] = useState<IMovie[]>([]);
    const {page, setPage, setTotal_pages} = useAppPrevNextContext();

    useEffect(() => {
        movieService.getKeyWord(value, page).then(({data:{page, results, total_pages}}) => {
            setMovies(results);
            setPage(page);
            setTotal_pages(total_pages);
            setData(data)
        })
    }, [page, value]);

    return (
        <div className={css.Search}>
            <div className={css.SearchHead}>
                <div className={css.SearchMap}>
                    <div>
                            <form>
                                <input type={"text"} placeholder={'search'} className={css.SearchInput}
                                       onChange={(event) => setValue(event.target.value)}
                                />
                                {/*<img src={} alt={}>*/}
                            </form>
                    </div>
                </div>
                <Pagination/>
            </div>
            <MoviesList movies={movies}/>
        </div>
    );
};

export {Search};