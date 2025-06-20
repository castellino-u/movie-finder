//Acá crearemos el método get que usaremos

//importamos lo que vamos a usar

import axios from 'axios'
import { IMovie } from '../types/IMovie'


// http://www.omdbapi.com/?i=tt3896198&apikey=14f30366
//Ejemplo de uso de la api key
//  https://www.omdbapi.com/?apikey=TU_API_KEY&s=avengers

const API_KEY =   `http://www.omdbapi.com/?i=tt3896198&apikey=14f30366`

//hacemos el consumo, el axios, con una función
export const getMovies = async (search: string): Promise<IMovie[]> => {

    //hacemos el  fetch con axios
    const response = await axios.get(`${API_KEY}&S=${search}`)
    return response.data
}
