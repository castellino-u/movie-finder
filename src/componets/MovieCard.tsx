//  MovieCard: representa una sola pelicula

import { IMovie } from "../types/IMovie";

interface MovieCardProps{
    movie: IMovie
}


export const MovieCard: React.FC<MovieCardProps> = ({movie}) => {

    return (

    <div className="w-[300px] h-[450px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div  className="h-[250px]">
            <img className="rounded-t-lg w-full h-full" src={movie.Poster} alt="" onError={(e)=>{
                e.currentTarget.onerror = null
                e.currentTarget.src = 'https://ia601904.us.archive.org/28/items/placeholder-image//placeholder-image.jpg'
            }} />
        </div>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.Title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.Type[0].toUpperCase() + movie.Type.slice(1).toLowerCase()}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> {movie.Year}</p>

        </div>
    </div>

    )
}
