// Acá importaremos todos los componentes del proyecto y importamos esta screen sola a la app.tsx

import { useState } from "react"
import { MovieList } from "../componets/MovieList"
import { SearchBar } from "../componets/SearchBar"
import { IMovie } from "../types/IMovie"
import { getMovies } from "../crud/crudMovies"
import { Loader } from "../componets/Loader"


export const MainScreen = () => {
  const [loading, setLoading] = useState(false)
  const [firstSearch, setFirstSearch] = useState(false) //antes de hacer una busqueda, este en falso
  const [movies, setMovies] = useState<IMovie[]>([]) //le especificamos de que va a ser el array para poder pasarle las props
  const resolvedora = async (search: string) =>{
    setLoading(true)
    setFirstSearch(true)
    const response = await getMovies(search) 
    console.log(response)
    setMovies(response)
    setLoading(false)
  }



  return (
    <div>
        
        <SearchBar handleSearch={resolvedora}></SearchBar>
        {firstSearch ? (loading ? (<Loader></Loader>) : (<MovieList firstSearch={firstSearch} moviesArray={movies} />)) : 
        <div className="items-center">
          <h1 className="text-white items-center text-6xl  text-center mt-[20vh]"> Welcome</h1>
        </div>
          }
    </div>
  )
}
