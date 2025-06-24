//  MovieList: muestra la lista de peliculas encontradas-

import { FC } from "react";
import { IMovie } from "../types/IMovie";
import { MovieCard } from "./MovieCard";

interface Props{
    moviesArray: IMovie[],
    firstSearch: boolean
}

export const MovieList: FC<Props> = ({moviesArray, firstSearch}) => {
    return (

    <div className=" flex flex-wrap w-4/5 gap-4 m-auto mt-4.5 justify-center h-[80vh] overflow-auto">
        {((moviesArray.length > 0) ==false && firstSearch) ? <h1>No se encontraron películas</h1> : moviesArray.map((movie)=> <MovieCard movie={movie}/>)  }
    </div>
    );
}; 