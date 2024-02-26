import React, {FC, PropsWithChildren} from 'react';

import {IGenre} from "../../../interfaces";

interface IProps extends  PropsWithChildren{
    genre: IGenre
}

const Genre: FC<IProps> = ({genre}) => {
    // const {id, name} = genre;
    console.log(genre)
    
    return (
        <div>
            {/*<div>id: {id}</div>*/}
            {/*<div>name: {name}</div>*/}


        </div>
    );
};

export {Genre};