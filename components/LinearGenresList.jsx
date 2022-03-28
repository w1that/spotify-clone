import axios from 'axios';
import React, {useState, useEffect} from 'react'
import genreService from '../services/GenreService';
import LinearGenreItem from './LinearGenreItem';

export default function LinearGenresList() {
// anasayfada görünecek olanlar burada sıralanacak

const [genres, setGenres] = useState([])

useEffect(() => {
  genreService.getGenres()
  .then(res=>setGenres(res.data.data));
}, [])

  return (
    <div className='w-full'>
      {genres.map(genre=>{
        return <LinearGenreItem genre={genre} key={genre.id}/>
      })}
    </div>
  )
}
