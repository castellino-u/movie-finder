// SearchForm: campo de texto y boton
//Acá no hay todavía funcionalidad, solo la estructura

import { useState } from "react"

interface Props{
    handleSearch: (search: string)=> void
}

export const SearchBar: React.FC<Props> = ({handleSearch}) => {

    const [searchText, setSearchText] = useState('') //estado para el input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setSearchText(e.target.value)
    } //funcion manejadora que me va a guardar lo que se ingresa en el input - onchange



    // const handleClick = async ()=>{
    //     const response = await getMovies(searchText)
    //     console.log(response)  //esto es para mostrarte que busque por consola
    // }//funcion manejadora del onClick


    return (
        <header className=" flex justify-between px-10 h-[10vh] items-center bg-black">
            <h1 className="text-white text-4xl">Movie Finder</h1>

        <form onSubmit={(e)=>{
            e.preventDefault()
            handleSearch(searchText)
        }}>
            <input className=" p-1 text-white border border-amber-50" type="text"  onChange={handleChange}/> 
            <button className=" p-1 bg-white  border border-amber-50" type="submit"  >🔍 Search </button>
        </form>

        </header>

    )
}
